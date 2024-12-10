import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-[600px] flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1616036740257-9449ea1f6605?auto=format&fit=crop&q=80"
          alt="Pôr do sol amazônico"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-transparent"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl text-white">
          <h2 className="text-5xl font-bold mb-6">Descubra o poder da natureza amazônica</h2>
          <p className="text-xl mb-8">Produtos naturais selecionados com amor e respeito pela biodiversidade da Amazônia.</p>
          <div className="flex gap-4">
            <a 
              href="https://wa.me/5582999488457"
              target="_blank"
              rel="noopener noreferrer" 
              className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors flex items-center gap-2"
            >
              Falar com Fátima
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}