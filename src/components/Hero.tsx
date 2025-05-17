import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Spline 3D Background */}
      <iframe
        src="https://my.spline.design/earthdayandnight-aR5pB6lD4IBaq230SAgOMacr/?quality=low"
        width="100%"
        height="100%"
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        allow="autoplay; fullscreen"
      ></iframe>

      {/* Optional: dark overlay for text readability */}
      <div className="absolute inset-0 bg-slate-600/20 z-10" />

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-3xl">
          <span className="inline-block py-1 px-3 mb-5 bg-transparent text-white font-semibold text-sm tracking-wider">
            BILDUNGSRESSOURCE
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Die wahren Kosten von Fast Fashion: SHEINs Umweltauswirkungen
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Eine Untersuchung darüber, wie Ultra-Fast-Fashion-Marken die Branchenlandschaft verändern und dabei zu erheblichen Umwelt- und sozialen Herausforderungen beitragen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-slate-900 px-8 py-3 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
              Mehr erfahren <ArrowRight size={20} />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors">
              Statistiken ansehen
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center animate-pulse">
        <span className="text-white text-sm mb-2">Scrollen Sie, um mehr zu entdecken</span>
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};
export default Hero;