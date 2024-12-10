import React from 'react';
import { ShoppingCart, Utensils, Truck, BarChart, Shield, Wifi } from 'lucide-react';

const features = [
  {
    icon: ShoppingCart,
    title: 'PDV Completo',
    description: 'Sistema de caixa intuitivo com controle de estoque integrado'
  },
  {
    icon: Utensils,
    title: 'Gestão de Restaurantes',
    description: 'Controle de mesas, pedidos e comandas em tempo real'
  },
  {
    icon: Truck,
    title: 'Sistema Delivery',
    description: 'Gestão completa de entregas e pedidos online'
  },
  {
    icon: BarChart,
    title: 'Relatórios Detalhados',
    description: 'Análises e insights para melhorar seu negócio'
  },
  {
    icon: Shield,
    title: 'Segurança Avançada',
    description: 'Proteção total dos seus dados e transações'
  },
  {
    icon: Wifi,
    title: 'Acesso Remoto',
    description: 'Gerencie seu negócio de qualquer lugar'
  }
];

export function Features() {
  return (
    <section id="recursos" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Recursos Principais</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-black p-6 rounded-lg border border-blue-900 hover:border-blue-500 transition-colors">
              <feature.icon className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}