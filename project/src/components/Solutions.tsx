import React from 'react';
import { Check } from 'lucide-react';

const solutions = [
  {
    title: 'Supermercados',
    features: ['Controle de estoque', 'Múltiplos caixas', 'Gestão de fornecedores', 'Controle fiscal']
  },
  {
    title: 'Restaurantes',
    features: ['Controle de mesas', 'Comanda eletrônica', 'Gestão de cardápio', 'Integração com delivery']
  },
  {
    title: 'Delivery',
    features: ['Pedidos online', 'Rastreamento em tempo real', 'Gestão de entregadores', 'Avaliações']
  }
];

export function Solutions() {
  return (
    <section id="solucoes" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Soluções por Segmento</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">{solution.title}</h3>
              <ul className="space-y-4">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}