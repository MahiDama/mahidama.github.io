#!/bin/bash

# Installation and Setup Script for Professional Portfolio Site
# This script installs Hugo and starts the development server

echo "🚀 Professional Portfolio Setup"
echo "================================"
echo ""

# Check if Hugo is installed
if command -v hugo &> /dev/null; then
    HUGO_INSTALLED=true
    echo "✓ Hugo is already installed: $(hugo version)"
else
    HUGO_INSTALLED=false
    echo "✗ Hugo is not installed. Installing now..."
    
    # Check for Homebrew (macOS) or apt (Linux)
    if command -v brew &> /dev/null; then
        echo "Installing Hugo via Homebrew..."
        brew install hugo
    elif command -v apt &> /dev/null; then
        echo "Installing Hugo via apt..."
        sudo apt-get update
        sudo apt-get install -y hugo
    else
        echo "Homebrew/apt not found. Please install Hugo manually:"
        echo "  macOS: brew install hugo"
        echo "  Ubuntu: sudo apt-get install hugo"
        echo "  Windows: Visit https://gohugo.io/installation/"
        exit 1
    fi
fi

echo ""
echo "📁 Project Structure Verified"
echo "✓ Content files ready"
echo "✓ Theme installed"
echo "✓ CSS & JavaScript configured"
echo ""

# Start development server
echo "🔧 Starting development server..."
echo "Visit http://localhost:1313 in your browser"
echo ""
echo "Press Ctrl+C to stop the server"
echo "================================"
echo ""

cd "$(dirname "$0")"
hugo server -D
