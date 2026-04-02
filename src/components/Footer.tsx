import React from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contatti" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="font-serif text-2xl font-bold text-white mb-2">Bella 'Mbriana</h3>
            <p className="text-woodfire text-sm uppercase tracking-widest mb-6">di Mastrocinque Paolo</p>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Il calore di casa, la vera pizza napoletana. Impasti curati e lievitazioni leggere a Sant'Agata dei Goti.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-aglianico transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/_bellambriana_di_mastro5_paolo" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-aglianico transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Contatti</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-woodfire shrink-0 mt-0.5" />
                <span>Contrada Sant'Anna,<br />82019 Sant'Agata dei Goti (BN)</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-woodfire shrink-0" />
                <a href="tel:+393333423528" className="hover:text-white transition-colors">+39 333 342 3528</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Orari</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <Clock className="w-5 h-5 text-woodfire shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium mb-1">Aperto tutte le sere</p>
                  <p>19:00 - 23:30</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <div className="w-5 h-5 shrink-0"></div>
                <div>
                  <p className="text-aglianico font-medium mb-1">Chiuso il Lunedì</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Map Placeholder */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h4 className="font-serif text-lg font-semibold mb-6">Dove Siamo</h4>
            <div className="w-full h-48 bg-gray-800 rounded-xl overflow-hidden relative group">
              {/* This would be an actual iframe in production */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center opacity-50 group-hover:opacity-70 transition-opacity"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white hover:text-gray-900 transition-colors flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Apri in Maps
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Pizzeria Bella 'Mbriana di Mastrocinque Paolo. Tutti i diritti riservati.
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
