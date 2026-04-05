param(
  [Parameter(Mandatory = $true)]
  [string]$SourceMarkdown,
  [Parameter(Mandatory = $true)]
  [string]$OutputDocx
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.IO.Compression.FileSystem

function Escape-XmlText {
  param([string]$Text)
  if ($null -eq $Text) { return "" }
  $escaped = [System.Security.SecurityElement]::Escape($Text)
  return $escaped -replace "`r?`n", "</w:t><w:br/><w:t xml:space=`"preserve`">"
}

function New-RunXml {
  param([string]$Text, [int]$Size = 24, [bool]$Bold = $false, [string]$Color = "")
  $escaped = Escape-XmlText $Text
  $boldXml = if ($Bold) { "<w:b/><w:bCs/>" } else { "" }
  $colorXml = if ($Color) { "<w:color w:val=`"$Color`"/>" } else { "" }
  return "<w:r><w:rPr><w:rFonts w:ascii=`"Arial`" w:hAnsi=`"Arial`" w:cs=`"Arial`"/><w:sz w:val=`"$Size`"/><w:szCs w:val=`"$Size`"/>$boldXml$colorXml<w:lang w:bidi=`"ar-SA`"/></w:rPr><w:t xml:space=`"preserve`">$escaped</w:t></w:r>"
}

function New-ParagraphXml {
  param([string]$Text, [int]$Size = 24, [bool]$Bold = $false, [string]$Color = "", [int]$SpacingBefore = 0, [int]$SpacingAfter = 120, [string]$Style = "normal")
  $indentXml = ""
  if ($Style -eq "bullet") { $indentXml = "<w:ind w:right=`"420`" w:hanging=`"0`"/>" }
  $spacingXml = "<w:spacing w:before=`"$SpacingBefore`" w:after=`"$SpacingAfter`" w:line=`"360`" w:lineRule=`"auto`"/>"
  return "<w:p><w:pPr><w:jc w:val=`"right`"/><w:bidi/>$spacingXml$indentXml</w:pPr>$(New-RunXml -Text $Text -Size $Size -Bold $Bold -Color $Color)</w:p>"
}

function Convert-MarkdownToWordXml {
  param([string[]]$Lines)
  $paragraphs = New-Object System.Collections.Generic.List[string]
  foreach ($line in $Lines) {
    $trimmed = $line.TrimEnd()
    if ([string]::IsNullOrWhiteSpace($trimmed)) {
      $paragraphs.Add((New-ParagraphXml -Text " " -Size 8 -SpacingAfter 60))
      continue
    }
    if ($trimmed.StartsWith("# ")) {
      $paragraphs.Add((New-ParagraphXml -Text $trimmed.Substring(2) -Size 36 -Bold $true -Color "0F766E" -SpacingBefore 180 -SpacingAfter 180))
      continue
    }
    if ($trimmed.StartsWith("## ")) {
      $paragraphs.Add((New-ParagraphXml -Text $trimmed.Substring(3) -Size 30 -Bold $true -Color "173038" -SpacingBefore 180 -SpacingAfter 120))
      continue
    }
    if ($trimmed.StartsWith("### ")) {
      $paragraphs.Add((New-ParagraphXml -Text $trimmed.Substring(4) -Size 26 -Bold $true -Color "0B5450" -SpacingBefore 120 -SpacingAfter 80))
      continue
    }
    if ($trimmed -match '^\-\s+') {
      $paragraphs.Add((New-ParagraphXml -Text ("• " + ($trimmed -replace '^\-\s+', '')) -Size 23 -SpacingAfter 80 -Style "bullet"))
      continue
    }
    if ($trimmed -match '^\d+\.\s+') {
      $paragraphs.Add((New-ParagraphXml -Text $trimmed -Size 23 -SpacingAfter 80))
      continue
    }
    $paragraphs.Add((New-ParagraphXml -Text $trimmed -Size 23 -SpacingAfter 100))
  }
  return ($paragraphs -join "")
}

$sourcePath = [System.IO.Path]::GetFullPath($SourceMarkdown)
$outputPath = [System.IO.Path]::GetFullPath($OutputDocx)
$outputDir = Split-Path -Parent $outputPath
if (-not (Test-Path $sourcePath)) { throw "Source markdown file not found: $sourcePath" }
if (-not (Test-Path $outputDir)) { New-Item -ItemType Directory -Path $outputDir -Force | Out-Null }

$markdownLines = [System.IO.File]::ReadAllLines($sourcePath)
$documentBody = Convert-MarkdownToWordXml -Lines $markdownLines

$contentTypes = "<?xml version=`"1.0`" encoding=`"UTF-8`" standalone=`"yes`"?><Types xmlns=`"http://schemas.openxmlformats.org/package/2006/content-types`"><Default Extension=`"rels`" ContentType=`"application/vnd.openxmlformats-package.relationships+xml`"/><Default Extension=`"xml`" ContentType=`"application/xml`"/><Override PartName=`"/word/document.xml`" ContentType=`"application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml`"/></Types>"
$rels = "<?xml version=`"1.0`" encoding=`"UTF-8`" standalone=`"yes`"?><Relationships xmlns=`"http://schemas.openxmlformats.org/package/2006/relationships`"><Relationship Id=`"rId1`" Type=`"http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument`" Target=`"word/document.xml`"/></Relationships>"
$documentXml = "<?xml version=`"1.0`" encoding=`"UTF-8`" standalone=`"yes`"?><w:document xmlns:w=`"http://schemas.openxmlformats.org/wordprocessingml/2006/main`"><w:body>$documentBody<w:sectPr><w:pgSz w:w=`"11906`" w:h=`"16838`"/><w:pgMar w:top=`"1134`" w:right=`"1134`" w:bottom=`"1134`" w:left=`"1134`" w:header=`"708`" w:footer=`"708`" w:gutter=`"0`"/><w:bidi/></w:sectPr></w:body></w:document>"

$tempRoot = Join-Path $env:TEMP ("yd-docx-" + [Guid]::NewGuid().ToString("N"))
New-Item -ItemType Directory -Path $tempRoot -Force | Out-Null
New-Item -ItemType Directory -Path (Join-Path $tempRoot "_rels") -Force | Out-Null
New-Item -ItemType Directory -Path (Join-Path $tempRoot "word") -Force | Out-Null
[System.IO.File]::WriteAllText((Join-Path $tempRoot '[Content_Types].xml'), $contentTypes, [System.Text.UTF8Encoding]::new($false))
[System.IO.File]::WriteAllText((Join-Path $tempRoot '_rels\.rels'), $rels, [System.Text.UTF8Encoding]::new($false))
[System.IO.File]::WriteAllText((Join-Path $tempRoot 'word\document.xml'), $documentXml, [System.Text.UTF8Encoding]::new($false))

if (Test-Path $outputPath) { Remove-Item -LiteralPath $outputPath -Force }
[System.IO.Compression.ZipFile]::CreateFromDirectory($tempRoot, $outputPath)
Remove-Item -LiteralPath $tempRoot -Recurse -Force
Write-Output "Generated: $outputPath"