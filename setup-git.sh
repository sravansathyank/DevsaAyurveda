#!/bin/bash

# Git setup script for the Devsa e-commerce project
echo "Setting up Git repository for Devsa project..."

# Initialize git repository
git init

# Add all files to staging
git add .

# Create initial commit
git commit -m "Initial commit: Basic Vite React TypeScript setup"

# Create and switch to feature branch
git checkout -b feature/ecommerce-header

# Stage the header component changes
git add src/components/Header.tsx

# Commit the header component
git commit -m "feat: Add responsive e-commerce header component

- Add Header component with navigation, search, and cart
- Include Lucide React icons for UI elements
- Implement responsive design with mobile menu button
- Add cart item counter with dynamic badge
- Style with Tailwind CSS and hover effects"

echo "Git repository setup complete!"
echo "Current branch: feature/ecommerce-header"
echo ""
echo "To continue development:"
echo "1. Make your changes"
echo "2. git add <files>"
echo "3. git commit -m 'your commit message'"
echo "4. git push origin feature/ecommerce-header"