#!/bin/bash

# Script to extract Figma assets and organize them for Desktop 5

ZIP_FILE="$1"
TEMP_DIR="/tmp/figma_extract_$$"
TARGET_DIR="/Users/Shared/Misas Web/src/assets/desktop5"

if [ -z "$ZIP_FILE" ]; then
    echo "Usage: $0 <path_to_zip_file>"
    echo "Example: $0 ~/Desktop/figma-assets.zip"
    exit 1
fi

if [ ! -f "$ZIP_FILE" ]; then
    echo "Error: Zip file not found: $ZIP_FILE"
    exit 1
fi

echo "Extracting zip file: $ZIP_FILE"
mkdir -p "$TEMP_DIR"
cd "$TEMP_DIR"
unzip -q "$ZIP_FILE" 2>/dev/null || unzip -q "$ZIP_FILE" -d "$TEMP_DIR"

echo ""
echo "Files found in zip:"
ls -1 | head -20

echo ""
echo "Copying and renaming files..."

# Function to normalize filename (lowercase, remove spaces, handle variations)
normalize_name() {
    echo "$1" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9.-]//g'
}

# Map of expected files (normalized name -> actual target name)
declare -A FILE_MAP=(
    ["group18"]="group-18.png"
    ["group2"]="group-2.png"
    ["group"]="group.png"
    ["rectangle12"]="rectangle-12.png"
    ["rectangle45"]="rectangle-45.png"
    ["rectangle13"]="rectangle-13.svg"
    ["rectangle25"]="rectangle-25.svg"
    ["rectangle26"]="rectangle-26.svg"
    ["rectangle27"]="rectangle-27.svg"
    ["image"]="image.png"
    ["image1"]="image-1.png"
    ["image12"]="image-1-2.png"
    ["image13"]="image-1-3.png"
    ["image14"]="image-1-4.png"
    ["image15"]="image-1-5.png"
    ["image2"]="image-2.png"
    ["image22"]="image-2-2.png"
    ["image23"]="image-2-3.png"
    ["image24"]="image-2-4.png"
    ["image3"]="image-3.png"
    ["image32"]="image-3-2.png"
    ["image33"]="image-3-3.png"
    ["image34"]="image-3-4.png"
    ["image35"]="image-3-5.png"
    ["imagesvg"]="image.svg"
    ["vector"]="vector.svg"
    ["vector2"]="vector-2.svg"
    ["vector3"]="vector-3.svg"
    ["vector4"]="vector-4.svg"
    ["vector5"]="vector-5.svg"
    ["vector6"]="vector-6.svg"
    ["vector7"]="vector-7.svg"
    ["vector11"]="vector-11.svg"
    ["vector12"]="vector-12.svg"
    ["vector13"]="vector-13.svg"
    ["vector14"]="vector-14.svg"
    ["vector15"]="vector-15.svg"
    ["vector16"]="vector-16.svg"
    ["vector17"]="vector-17.svg"
    ["vector18"]="vector-18.svg"
    ["vector19"]="vector-19.svg"
    ["vector20"]="vector-20.svg"
)

copied=0
for file in *; do
    if [ -f "$file" ]; then
        # Get file extension
        ext="${file##*.}"
        base="${file%.*}"
        normalized=$(normalize_name "$base")
        
        # Try to find matching target
        target=""
        for key in "${!FILE_MAP[@]}"; do
            if [[ "$normalized" == *"$key"* ]] || [[ "$key" == *"$normalized"* ]]; then
                target="${FILE_MAP[$key]}"
                # Check if extension matches
                target_ext="${target##*.}"
                if [ "$ext" == "$target_ext" ]; then
                    break
                fi
            fi
        done
        
        if [ -n "$target" ]; then
            echo "  ✓ $file -> $target"
            cp "$file" "$TARGET_DIR/$target"
            ((copied++))
        else
            echo "  ? $file (no match found)"
        fi
    fi
done

echo ""
echo "Copied $copied files to $TARGET_DIR"
echo "Cleaning up..."
rm -rf "$TEMP_DIR"
echo "Done!"

