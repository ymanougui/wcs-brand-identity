param(
    [string]$pngDir = "C:\Users\manou\Downloads\wechinasourcing visual identity\New try\brand-assets\01-logo\png"
)

Add-Type -AssemblyName System.Drawing

function Resize-Image($srcPath, $dstPath, [int]$w, [int]$h) {
    if (-not (Test-Path $srcPath)) {
        Write-Error "Source file not found: $srcPath"
        return
    }
    $src = [System.Drawing.Image]::FromFile($srcPath)
    $bmp = New-Object System.Drawing.Bitmap($w, $h, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.Clear([System.Drawing.Color]::Transparent)
    $g.DrawImage($src, 0, 0, $w, $h)
    $g.Dispose()
    $src.Dispose()
    if (Test-Path $dstPath) { Remove-Item $dstPath -Force }
    $bmp.Save($dstPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    Write-Host "Created $dstPath ($w x $h)"
}

$colors = @('full', 'navy', 'black', 'reversed-white')
foreach ($color in $colors) {
    $src3x = Join-Path $pngDir "wcs_horizontal_${color}@3x.png"
    $dst2x = Join-Path $pngDir "wcs_horizontal_${color}@2x.png"
    $dst1x = Join-Path $pngDir "wcs_horizontal_${color}@1x.png"
    
    Resize-Image $src3x $dst2x 480 67
    Resize-Image $src3x $dst1x 240 34
}
Write-Host "All downsampling complete."
