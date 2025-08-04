import React from 'react';
import { Sun, Facebook, Instagram, Linkedin, Mail, Phone, MessageCircle } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[var(--sunlink-green)] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Sun className="h-8 w-8 text-[var(--sunlink-orange)]" />
              <h3 className="text-2xl font-bold text-[var(--sunlink-orange)]">SunLink</h3>
            </div>
            <p className="text-green-100 mb-6 leading-relaxed">
              Conectando você à melhor energia solar. Seu hub completo para encontrar as melhores oportunidades de projetos solares.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-[var(--sunlink-orange)] hover:bg-[var(--sunlink-light-orange)] p-2 rounded-full transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a
                href="#"
                className="bg-[var(--sunlink-orange)] hover:bg-[var(--sunlink-light-orange)] p-2 rounded-full transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a
                href="#"
                className="bg-[var(--sunlink-orange)] hover:bg-[var(--sunlink-light-orange)] p-2 rounded-full transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[var(--sunlink-orange)]">Navegação</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-green-100 hover:text-white transition-colors duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-green-100 hover:text-white transition-colors duration-300"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-green-100 hover:text-white transition-colors duration-300"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('simulation')}
                  className="text-green-100 hover:text-white transition-colors duration-300"
                >
                  Simulação
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-green-100 hover:text-white transition-colors duration-300"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[var(--sunlink-orange)]">Serviços</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-green-100 hover:text-white transition-colors duration-300"
                >
                  Energia Solar Residencial
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-green-100 hover:text-white transition-colors duration-300"
                >
                  Energia Solar Empresarial
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('simulation')}
                  className="text-green-100 hover:text-white transition-colors duration-300"
                >
                  Simulação Online
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-green-100 hover:text-white transition-colors duration-300"
                >
                  Financiamento
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-green-100 hover:text-white transition-colors duration-300"
                >
                  Consultoria Especializada
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[var(--sunlink-orange)]">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 text-[var(--sunlink-orange)]" />
                <div>
                  <p className="text-green-100 text-sm">WhatsApp</p>
                  <p className="text-white font-medium">(11) 99999-9999</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[var(--sunlink-orange)]" />
                <div>
                  <p className="text-green-100 text-sm">Telefone</p>
                  <p className="text-white font-medium">(11) 3333-4444</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[var(--sunlink-orange)]" />
                <div>
                  <p className="text-green-100 text-sm">Email</p>
                  <p className="text-white font-medium">contato@sunlink.com.br</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => scrollToSection('simulation')}
              className="mt-6 bg-[var(--sunlink-orange)] hover:bg-[var(--sunlink-light-orange)] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 w-full"
            >
              Simule Agora
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[var(--sunlink-light-green)] mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-green-100 text-sm">
              <p>&copy; 2024 SunLink. Todos os direitos reservados.</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-green-100 hover:text-white transition-colors duration-300">
                Política de Privacidade
              </a>
              <a href="#" className="text-green-100 hover:text-white transition-colors duration-300">
                Termos de Uso
              </a>
              <a href="#" className="text-green-100 hover:text-white transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-green-100 text-sm">
              Seus dados são tratados com segurança e privacidade. Não enviamos spam.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

