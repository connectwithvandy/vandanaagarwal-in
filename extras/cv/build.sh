#!/bin/sh
# Rebuild the public CV PDF from cv.html with headless Chrome.
cd "$(dirname "$0")"
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="../../public/Vandana-Agarwal-Nik-CV.pdf" "file://$PWD/cv.html" 2>/dev/null
