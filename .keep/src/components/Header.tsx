import React from 'react';
import { ShoppingCart, Search, Menu, Leaf } from 'lucide-react';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItemsCount, onCartClick }) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Leaf className="w-8 h-8 text-emerald-600" />
            <h1 className="text-2xl font-bold text-gray-900">Devsa</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">Products</a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">Categories</a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">About</a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-emerald-600 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button 
              onClick={onCartClick}
              className="relative p-2 text-gray-600 hover:text-emerald-600 transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
            <button className="md:hidden p-2 text-gray-600">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;