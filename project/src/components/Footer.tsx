import React from 'react';
import { Leaf } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <Leaf className="h-8 w-8 text-pink-400" />
            <span className="text-xl font-bold">Sunshine da Amazônia</span>
          </div>
          <div className="text-center md:text-right">
            <p>© 2024 Sunshine da Amazônia. Todos os direitos reservados.</p>
            <a 
              href="https://wa.me/5582999488457"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-300 transition-colors"
            >
              Fale com Fátima Cintra
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}