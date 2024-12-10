export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  benefits: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Óleo de Copaíba',
    description: 'Anti-inflamatório natural, cicatrizante e antisséptico',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80',
    benefits: ['Anti-inflamatório', 'Cicatrizante', 'Antisséptico']
  },
  {
    id: 2,
    name: 'Óleo de Andiroba',
    description: 'Anti-inflamatório e repelente natural',
    image: 'https://images.unsplash.com/photo-1601300576246-965c985bd59c?auto=format&fit=crop&q=80',
    benefits: ['Anti-inflamatório', 'Repelente natural', 'Hidratante']
  },
  {
    id: 3,
    name: 'Sangue de Dragão',
    description: 'Poderoso cicatrizante e antioxidante natural',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80',
    benefits: ['Cicatrizante', 'Antioxidante', 'Anti-idade']
  },
  {
    id: 4,
    name: 'Blend Amazônico',
    description: 'Mistura especial de óleos amazônicos para múltiplos benefícios',
    image: 'https://images.unsplash.com/photo-1590779033100-9f60a05a013d?auto=format&fit=crop&q=80',
    benefits: ['Hidratante', 'Nutritivo', 'Fortalecedor']
  },
  {
    id: 5,
    name: 'Óleo de Pracaxi',
    description: 'Hidratante natural para cabelos e pele',
    image: 'https://images.unsplash.com/photo-1601300576246-965c985bd59c?auto=format&fit=crop&q=80',
    benefits: ['Hidratante', 'Antiqueda', 'Fortalecedor']
  },
  {
    id: 6,
    name: 'Blend Capilar',
    description: 'Mistura especial para tratamento capilar',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80',
    benefits: ['Fortalecimento', 'Crescimento', 'Brilho']
  }
];