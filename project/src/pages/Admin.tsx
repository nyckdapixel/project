import React, { useState } from 'react';
import { products as initialProducts, Product } from '../data/products';
import { Save, X, LogOut, Edit, Trash } from 'lucide-react';

interface ProductViewProps {
  product: Product;
  onEdit: () => void;
}

function ProductView({ product, onEdit }: ProductViewProps) {
  return (
    <div className="flex justify-between items-start">
      <div>
        <div className="flex items-center gap-4">
          <img src={product.image} alt={product.name} className="w-20 h-20 object-cover rounded" />
          <div>
            <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
            <p className="text-gray-600">{product.description}</p>
          </div>
        </div>
        <ul className="mt-2 ml-24 list-disc text-sm text-gray-600">
          {product.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>
      <button
        onClick={onEdit}
        className="flex items-center gap-2 px-3 py-1 text-blue-600 hover:text-blue-700 transition-colors"
      >
        <Edit className="w-4 h-4" />
        Editar
      </button>
    </div>
  );
}

interface EditFormProps {
  product: Product;
  onSave: (product: Product) => void;
  onCancel: () => void;
}

function EditForm({ product, onSave, onCancel }: EditFormProps) {
  const [editedProduct, setEditedProduct] = useState(product);
  const [benefits, setBenefits] = useState(product.benefits.join('\n'));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...editedProduct,
      benefits: benefits.split('\n').filter(benefit => benefit.trim() !== '')
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Nome do Produto</label>
        <input
          type="text"
          value={editedProduct.name}
          onChange={(e) => setEditedProduct({ ...editedProduct, name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Descrição</label>
        <input
          type="text"
          value={editedProduct.description}
          onChange={(e) => setEditedProduct({ ...editedProduct, description: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">URL da Imagem</label>
        <input
          type="text"
          value={editedProduct.image}
          onChange={(e) => setEditedProduct({ ...editedProduct, image: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Benefícios (um por linha)</label>
        <textarea
          value={benefits}
          onChange={(e) => setBenefits(e.target.value)}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        />
      </div>
      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={onCancel}
          className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors"
        >
          <X className="w-4 h-4" />
          Cancelar
        </button>
        <button
          type="submit"
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
        >
          <Save className="w-4 h-4" />
          Salvar
        </button>
      </div>
    </form>
  );
}

export function Admin() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated');
    window.location.href = '/';
  };

  const handleEdit = (product: Product) => {
    setEditingId(product.id);
  };

  const handleSave = (product: Product) => {
    setProducts(products.map(p => p.id === product.id ? product : p));
    setEditingId(null);
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-green-800">Gerenciar Produtos</h1>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Sair
            </button>
          </div>
          <div className="space-y-6">
            {products.map(product => (
              <div key={product.id} className="border rounded-lg p-4">
                {editingId === product.id ? (
                  <EditForm
                    product={product}
                    onSave={handleSave}
                    onCancel={handleCancel}
                  />
                ) : (
                  <ProductView
                    product={product}
                    onEdit={() => handleEdit(product)}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}