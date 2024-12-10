import React from 'react';
import { Heart, Leaf, Shield } from 'lucide-react';

export function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-pink-600 mb-12">Por que nos escolher?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <Heart className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Produtos Naturais</h3>
            <p className="text-gray-600">Selecionamos apenas os melhores produtos naturais da Amazônia.</p>
          </div>
          <div className="text-center">
            <Leaf className="w-12 h-12 text-amber-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Sustentabilidade</h3>
            <p className="text-gray-600">Compromisso com o meio ambiente e comunidades locais.</p>
          </div>
          <div className="text-center">
            <Shield className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Qualidade Garantida</h3>
            <p className="text-gray-600">Todos os produtos passam por rigoroso controle de qualidade.</p>
          </div>
        </div>
      </div>
    </section>
  );
}