import React, { useState } from 'react';
import { Plus, Star } from 'lucide-react';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isPopular?: boolean;
}

const menuData: MenuItem[] = [
  {
    id: 'm1',
    name: 'Margherita',
    description: 'Pomodoro San Marzano DOP, fior di latte di Agerola, basilico fresco, olio EVO.',
    price: 6.50,
    category: 'Le Classiche',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=2069&auto=format&fit=crop'
  },
  {
    id: 'm2',
    name: 'Marinara',
    description: 'Pomodoro San Marzano DOP, aglio, origano, olio EVO.',
    price: 5.00,
    category: 'Le Classiche',
    image: 'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'm3',
    name: 'La Tartufona',
    description: 'Crema di tartufo nero, fior di latte, funghi porcini, scaglie di parmigiano, olio al tartufo.',
    price: 12.00,
    category: 'Le Speciali di Paolo',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop',
    isPopular: true
  },
  {
    id: 'm4',
    name: 'Bella \'Mbriana',
    description: 'Pomodorini gialli del piennolo, provola affumicata, salsiccia di maialino nero, basilico.',
    price: 10.50,
    category: 'Le Speciali di Paolo',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop'
  },
  {
    id: 'm5',
    name: 'Margherita SG',
    description: 'Impasto senza glutine, Pomodoro San Marzano DOP, fior di latte, basilico.',
    price: 8.50,
    category: 'Senza Glutine',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=2069&auto=format&fit=crop'
  },
  {
    id: 'm6',
    name: 'Aglianico del Sannio DOC',
    description: 'Vino rosso locale, strutturato e avvolgente. Bottiglia 75cl.',
    price: 18.00,
    category: 'I Vini',
    image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=1915&auto=format&fit=crop'
  }
];

const categories = ['Tutte', 'Le Classiche', 'Le Speciali di Paolo', 'Senza Glutine', 'I Vini'];

interface MenuProps {
  onAddToCart: (item: MenuItem) => void;
}

export default function Menu({ onAddToCart }: MenuProps) {
  const [activeCategory, setActiveCategory] = useState('Tutte');

  const filteredMenu = activeCategory === 'Tutte' 
    ? menuData 
    : menuData.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Il Nostro Menù</h2>
          <div className="w-24 h-1 bg-aglianico mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Scopri le nostre pizze, preparate con passione, lievitazione leggera e cotte rigorosamente nel forno a legna.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-aglianico text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMenu.map(item => (
            <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                {item.isPopular && (
                  <div className="absolute top-4 right-4 bg-woodfire text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                    <Star className="w-3 h-3 fill-current" /> Più Amata
                  </div>
                )}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                  {item.category}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-xl font-bold text-gray-900">{item.name}</h3>
                  <span className="font-medium text-aglianico text-lg">€{item.price.toFixed(2)}</span>
                </div>
                <p className="text-gray-500 text-sm mb-6 flex-grow leading-relaxed">
                  {item.description}
                </p>
                
                <button
                  onClick={() => onAddToCart(item)}
                  className="w-full bg-gray-50 hover:bg-aglianico hover:text-white text-gray-900 border border-gray-200 hover:border-aglianico py-3 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 group/btn"
                >
                  <Plus className="w-5 h-5 text-aglianico group-hover/btn:text-white transition-colors" />
                  Aggiungi all'ordine
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
