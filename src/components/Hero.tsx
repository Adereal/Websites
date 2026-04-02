import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop"
          alt="Wood-fired Neapolitan Pizza"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-bold tracking-tight mb-6 drop-shadow-lg">
            Il Calore di Casa,<br />
            <span className="text-woodfire">La Vera Pizza Napoletana.</span>
          </h1>
          
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light drop-shadow-md mb-10">
            Impasti curati, lievitazioni leggere e il vero forno a legna a Sant'Agata dei Goti.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#menu"
              className="w-full sm:w-auto bg-aglianico hover:bg-aglianico-dark text-white px-8 py-4 rounded-full font-medium text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
            >
              Scopri il Menù
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="#prenota"
              className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-medium text-lg transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Prenota un Tavolo
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <a href="#menu" className="text-white/70 hover:text-white transition-colors">
          <div className="w-[30px] h-[50px] rounded-full border-2 border-current flex justify-center p-2">
            <div className="w-1 h-3 bg-current rounded-full"></div>
          </div>
        </a>
      </motion.div>
    </section>
  );
}
