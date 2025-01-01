$sourceDir = "..\Flashcard\public\images\img-kanji"
$destDir = "public\images\img-kanji"

# Create destination directory if it doesn't exist
if (!(Test-Path -Path $destDir)) {
    New-Item -ItemType Directory -Path $destDir
}

# Copy all PNG files
Copy-Item -Path "$sourceDir\*.png" -Destination $destDir 