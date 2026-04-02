import React from 'react';
import { Award, WheatOff, Clock } from 'lucide-react';

export default function SocialProof() {
  const features = [
    {
      icon: <Award className="w-6 h-6 text-woodfire" />,
      title: "Eccellenza Italiana",
      description: "Ingredienti DOP e IGP"
    },
    {
      icon: <WheatOff className="w-6 h-6 text-woodfire" />,
      title: "Opzioni Senza Glutine",
      description: "Impasti dedicati e sicuri"
    },
    {
      icon: <Clock className="w-6 h-6 text-woodfire" />,
      title: "Chiuso il Lunedì",
      description: "Aperto tutte le altre sere"
    }
  ];

  return (
    <section className="bg-white border-b border-gray-100 py-8 relative z-20 -mt-6 mx-4 md:mx-auto max-w-5xl rounded-xl shadow-xl">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center pt-6 md:pt-0 first:pt-0 px-4">
              <div className="bg-parchment p-3 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="font-serif font-semibold text-gray-900 text-lg mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
