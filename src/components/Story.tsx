import React from 'react';

export default function Story() {
  return (
    <section id="storia" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-parchment rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-woodfire/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=2070&auto=format&fit=crop" 
                alt="Paolo Mastrocinque making pizza" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-aglianico text-white p-6 rounded-full shadow-xl w-32 h-32 flex items-center justify-center text-center border-4 border-white">
              <div>
                <span className="block font-serif text-2xl font-bold">100%</span>
                <span className="block text-xs uppercase tracking-wider">Passione</span>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="lg:pl-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              La Leggenda della Bella 'Mbriana
            </h2>
            <h3 className="text-xl text-woodfire font-medium mb-6">e la passione di Paolo Mastrocinque</h3>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Nella tradizione napoletana, la <strong>Bella 'Mbriana</strong> è lo spirito benevolo della casa. È colei che porta calore, fortuna e ospitalità tra le mura domestiche. Non si mostra mai chiaramente, ma la sua presenza si avverte nell'atmosfera accogliente di una famiglia riunita.
              </p>
              <p>
                È proprio questo lo spirito che <strong>Paolo Mastrocinque</strong> ha voluto infondere nella sua pizzeria a Sant'Agata dei Goti. Ogni ospite che varca la soglia non è un semplice cliente, ma un invitato nella nostra "casa".
              </p>
              <p>
                La nostra pizza nasce da questa filosofia: un impasto curato con dedizione, una lievitazione lenta e leggera per garantire la massima digeribilità, e la cottura nel vero forno a legna. Un rito antico che si rinnova ogni sera, per portare in tavola non solo un pasto, ma un'esperienza di pura convivialità campana.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100">
              <p className="font-serif text-xl text-gray-900 italic">
                "Vi aspettiamo a casa nostra."
              </p>
              <p className="mt-2 font-medium text-gray-500">— Paolo Mastrocinque</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
