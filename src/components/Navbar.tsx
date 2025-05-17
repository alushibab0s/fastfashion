import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[85%] z-50 transition-all duration-300 rounded-xl backdrop-blur-md px-6 py-3
        ${isScrolled ? 'bg-slate-900/60 shadow-lg' : 'bg-slate-800/60'}`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-white font-bold text-xl">
              MODE<span className="text-gray-300">IMPACT</span>
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {['Startseite', 'Statistiken', 'Kernprobleme', 'Ressourcen'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-300 hover:text-white transition-all transform hover:translate-y-1 duration-200"
                >
                  {item}
                </a>
              ))}
              <a
                href="#"
                className="bg-gray-300 text-slate-900 px-4 py-2 rounded-md font-semibold hover:bg-white transition-all transform hover:translate-y-1 duration-200"
              >
                Aktiv werden
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-white hover:text-gray-300 focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 bg-slate-900/90 rounded-xl shadow-lg px-4 py-4">
          {['Startseite', 'Statistiken', 'Kernprobleme', 'Ressourcen'].map((item) => (
            <a
              key={item}
              href="#"
              className="block text-gray-300 py-2 hover:text-white transition-all transform hover:translate-y-1 duration-200"
            >
              {item}
            </a>
          ))}
          <a
            href="#"
            className="block mt-2 bg-gray-300 text-slate-900 py-2 px-4 text-center rounded-md font-semibold hover:bg-white transition-all transform hover:translate-y-1 duration-200"
          >
            Aktiv werden
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
