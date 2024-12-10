import React from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export function Contact() {
  return (
    <section id="contato" className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-pink-600 mb-12">Fale Conosco</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-green-800">Entre em Contato</h3>
            <div className="space-y-4">
              <a
                href="https://wa.me/5582999488457"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-600 hover:text-green-600 transition-colors"
              >
                <MessageCircle className="w-6 h-6 text-pink-500" />
                <span>(82) 99948-8457 - Fátima Cintra</span>
              </a>
              <div className="flex items-center gap-4 text-gray-600">
                <Mail className="w-6 h-6 text-pink-500" />
                <span>nyck2305cintra@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-gray-600">
                <MapPin className="w-6 h-6 text-pink-500" />
                <span>Humaitá, Amazonas - Brasil</span>
              </div>
            </div>
          </div>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Seu nome"
              className="w-full px-4 py-2 rounded-lg bg-white border border-green-200 focus:outline-none focus:border-pink-500"
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              className="w-full px-4 py-2 rounded-lg bg-white border border-green-200 focus:outline-none focus:border-pink-500"
            />
            <textarea
              placeholder="Sua mensagem"
              rows={4}
              className="w-full px-4 py-2 rounded-lg bg-white border border-green-200 focus:outline-none focus:border-pink-500"
            />
            <button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-full transition-colors">
              Enviar mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}