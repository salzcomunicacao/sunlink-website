import React, { useState } from 'react';
import { Menu, X, Sun } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--sunlink-green)] shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Sun className="h-8 w-8 text-[var(--sunlink-orange)]" />
            <h1 className="text-2xl font-bold text-[var(--sunlink-orange)]">
              SunLink
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-[var(--sunlink-orange)] transition-colors duration-300 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-[var(--sunlink-orange)] transition-colors duration-300 font-medium"
            >
              Sobre Nós
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-[var(--sunlink-orange)] transition-colors duration-300 font-medium"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('simulation')}
              className="text-white hover:text-[var(--sunlink-orange)] transition-colors duration-300 font-medium"
            >
              Simulação
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-[var(--sunlink-orange)] transition-colors duration-300 font-medium"
            >
              Contato
            </button>
          </nav>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection('simulation')}
            className="hidden md:block bg-[var(--sunlink-orange)] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[var(--sunlink-light-orange)] transition-colors duration-300"
          >
            Simule Agora
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-[var(--sunlink-orange)] transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-[var(--sunlink-light-green)]">
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-white hover:text-[var(--sunlink-orange)] transition-colors duration-300 font-medium text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-[var(--sunlink-orange)] transition-colors duration-300 font-medium text-left"
              >
                Sobre Nós
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-white hover:text-[var(--sunlink-orange)] transition-colors duration-300 font-medium text-left"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('simulation')}
                className="text-white hover:text-[var(--sunlink-orange)] transition-colors duration-300 font-medium text-left"
              >
                Simulação
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-[var(--sunlink-orange)] transition-colors duration-300 font-medium text-left"
              >
                Contato
              </button>
              <button
                onClick={() => scrollToSection('simulation')}
                className="bg-[var(--sunlink-orange)] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[var(--sunlink-light-orange)] transition-colors duration-300 w-fit"
              >
                Simule Agora
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

