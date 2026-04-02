import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, ShoppingBag, Wine } from 'lucide-react';
import { MenuItem } from './Menu';

export interface CartItem extends MenuItem {
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onAddAglianico: () => void;
}

export default function CartDrawer({ isOpen, onClose, items, onUpdateQuantity, onAddAglianico }: CartDrawerProps) {
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const hasAglianico = items.some(item => item.name.includes('Aglianico'));

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="bg-parchment p-2 rounded-full">
                  <ShoppingBag className="w-5 h-5 text-aglianico" />
                </div>
                <h2 className="font-serif text-xl font-bold text-gray-900">Il Tuo Ordine</h2>
              </div>
              <button 
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center text-gray-500 space-y-4">
                  <ShoppingBag className="w-16 h-16 text-gray-200" />
                  <p>Il tuo carrello è vuoto.<br/>Aggiungi qualche delizia dal menù!</p>
                  <button 
                    onClick={onClose}
                    className="text-aglianico font-medium hover:underline"
                  >
                    Torna al menù
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-gray-100">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start">
                            <h3 className="font-medium text-gray-900">{item.name}</h3>
                            <span className="font-medium text-gray-900">€{(item.price * item.quantity).toFixed(2)}</span>
                          </div>
                          <p className="text-sm text-gray-500 line-clamp-1">{item.description}</p>
                        </div>
                        <div className="flex items-center gap-3 mt-2">
                          <button 
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="font-medium w-4 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer / Checkout */}
            {items.length > 0 && (
              <div className="border-t border-gray-100 bg-gray-50 p-6">
                {/* Upsell */}
                {!hasAglianico && (
                  <div className="mb-6 bg-white p-4 rounded-xl border border-woodfire/30 shadow-sm flex items-start gap-4">
                    <div className="bg-woodfire/10 p-2 rounded-full shrink-0">
                      <Wine className="w-6 h-6 text-woodfire" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm mb-1">Aggiungi una bottiglia di Aglianico?</h4>
                      <p className="text-xs text-gray-500 mb-3">Il perfetto abbinamento per la tua pizza.</p>
                      <button 
                        onClick={onAddAglianico}
                        className="text-xs font-medium bg-woodfire text-white px-3 py-1.5 rounded-full hover:bg-woodfire/90 transition-colors"
                      >
                        + Aggiungi a €18.00
                      </button>
                    </div>
                  </div>
                )}

                <div className="flex justify-between items-center mb-6">
                  <span className="text-gray-600 font-medium">Totale</span>
                  <span className="font-serif text-2xl font-bold text-gray-900">€{subtotal.toFixed(2)}</span>
                </div>
                
                <button className="w-full bg-aglianico hover:bg-aglianico-dark text-white py-4 rounded-xl font-medium text-lg transition-colors shadow-md flex items-center justify-center gap-2">
                  Procedi all'Ordine
                  <ArrowRight className="w-5 h-5" />
                </button>
                <p className="text-center text-xs text-gray-500 mt-4">
                  Pagamento alla consegna o ritiro in pizzeria.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// Need to import ArrowRight for the button
import { ArrowRight } from 'lucide-react';
