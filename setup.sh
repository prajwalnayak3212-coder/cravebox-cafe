#!/bin/bash
# CraveBox Café - Automated Setup Script (Mac/Linux)

echo ""
echo "====================================="
echo " CraveBox Café - Setup Assistant"
echo "====================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo "Please install Node.js from https://nodejs.org"
    exit 1
fi

echo "✅ Node.js detected"
node --version

echo ""
echo "Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ npm install failed!"
    exit 1
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Add your media files to public/videos, public/images, and public/gallery"
echo "2. Run: npm run dev"
echo "3. Website opens at http://localhost:3000"
echo ""
echo "For help, see QUICK_START.md"
echo ""
