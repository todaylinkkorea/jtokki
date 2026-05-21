#!/bin/bash
set -e

CLIPS_DIR="public/clips"
echo "Starting video compression..."

for i in {1..4}
do
  INPUT="${CLIPS_DIR}/clip${i}.mp4"
  OPT_MP4="${CLIPS_DIR}/clip${i}_opt.mp4"
  WEBM="${CLIPS_DIR}/clip${i}.webm"

  if [ -f "$INPUT" ]; then
    echo "----------------------------------------"
    echo "Processing ${INPUT}..."
    
    # 1. MP4 Compression (H.264, scale to 480 width, crf 24, faststart for streaming)
    echo "Generating optimized MP4: ${OPT_MP4}"
    ffmpeg -y -i "$INPUT" -vf "scale=480:-2" -c:v libx264 -preset slow -crf 24 -maxrate 1.5M -bufsize 3M -c:a aac -b:a 64k -movflags +faststart "$OPT_MP4"

    # 2. WebM Compression (VP9, scale to 480 width, crf 30, faststart)
    echo "Generating optimized WebM: ${WEBM}"
    ffmpeg -y -i "$INPUT" -vf "scale=480:-2" -c:v libvpx-vp9 -crf 30 -b:v 0 -speed 4 -row-mt 1 -c:a libopus -b:a 64k "$WEBM"
    
    # 3. Replace original MP4 with optimized one
    echo "Replacing original MP4 with optimized version..."
    mv "$OPT_MP4" "$INPUT"
    
    echo "Finished processing clip${i}"
  else
    echo "Warning: ${INPUT} not found. Skipping."
  fi
done

echo "----------------------------------------"
echo "All videos compressed successfully!"
ls -lh "$CLIPS_DIR"
