import React from 'react';
import { Leaf, Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white py-4 px-6 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Leaf className="h-8 w-8 text-green-600" />
          <h1 className="text-2xl font-bold text-pink-600">Sunshine da Amazônia</h1>
        </div>
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            <li><a href="#produtos" className="text-gray-600 hover:text-green-600 transition-colors">Produtos</a></li>
            <li><a href="#sobre" className="text-gray-600 hover:text-green-600 transition-colors">Sobre</a></li>
            <li><a href="#contato" className="text-gray-600 hover:text-green-600 transition-colors">Contato</a></li>
            <li>
              <a 
                href="https://wa.me/5582999488457" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors"
              >
                Falar com Fátima
              </a>
            </li>
          </ul>
        </nav>
        <button className="md:hidden text-green-600">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}