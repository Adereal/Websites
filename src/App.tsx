import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Menu, { MenuItem } from './components/Menu';
import Story from './components/Story';
import Footer from './components/Footer';
import CartDrawer, { CartItem } from './components/CartDrawer';

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (item: MenuItem) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(0, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const handleAddAglianico = () => {
    const aglianico: MenuItem = {
      id: 'm6',
      name: 'Aglianico del Sannio DOC',
      description: 'Vino rosso locale, strutturato e avvolgente. Bottiglia 75cl.',
      price: 18.00,
      category: 'I Vini',
      image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=1915&auto=format&fit=crop'
    };
    handleAddToCart(aglianico);
  };

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-parchment font-sans">
      <Navbar 
        cartItemCount={cartItemCount} 
        onOpenCart={() => setIsCartOpen(true)} 
      />
      
      <main>
        <Hero />
        <SocialProof />
        <Menu onAddToCart={handleAddToCart} />
        <Story />
      </main>

      <Footer />

      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onAddAglianico={handleAddAglianico}
      />
      
      {/* Mobile Floating Cart Button (only shows when cart has items and drawer is closed) */}
      {!isCartOpen && cartItemCount > 0 && (
        <button
          onClick={() => setIsCartOpen(true)}
          className="md:hidden fixed bottom-6 right-6 z-40 bg-aglianico text-white p-4 rounded-full shadow-2xl flex items-center justify-center animate-bounce"
        >
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            <span className="absolute -top-2 -right-2 bg-white text-aglianico text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-aglianico">
              {cartItemCount}
            </span>
          </div>
        </button>
      )}
    </div>
  );
}
