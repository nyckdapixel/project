import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { products } from '../data/products';

const whatsappMessage = encodeURIComponent('Vim pelo site, quero entender mais sobre os produtos que a senhora vende, e pra que servem');

export function Products() {
  return (
    <section id="produtos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-pink-600 mb-12">Nossos Produtos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-green-50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-green-700 mb-2">Benefícios:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600">
                    {product.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm italic text-pink-600">Consultar valores no WhatsApp</span>
                  <a
                    href={`https://wa.me/5582999488457?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm transition-colors flex items-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Consultar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}