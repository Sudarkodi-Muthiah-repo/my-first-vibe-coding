#!/bin/bash

# Quick Setup Script for Learning Land

echo "🎓 Learning Land - Setup Script"
echo "================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 16 or higher."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo "📝 Creating .env file from .env.example..."
    cp .env.example .env
    echo "✅ .env file created. Update it with your configuration."
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "🚀 Quick Commands:"
echo "   npm run dev     - Start development server"
echo "   npm run build   - Build for production"
echo "   npm run preview - Preview production build"
echo ""
echo "📚 Documentation:"
echo "   README.md       - Project overview and features"
echo "   DEPLOYMENT.md   - Deployment guide for Vercel"
echo ""
echo "📖 Next steps:"
echo "   1. Run: npm run dev"
echo "   2. Open: http://localhost:3000"
echo "   3. Start building!"
echo ""
