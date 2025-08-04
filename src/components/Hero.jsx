import React from 'react';
import { ArrowRight, Zap, Leaf, TrendingUp } from 'lucide-react';

const Hero = () => {
  const scrollToSimulation = () => {
    const element = document.getElementById('simulation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 min-h-screen bg-gradient-to-br from-[var(--sunlink-green)] to-[var(--sunlink-light-green)] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Conecte-se à
                <span className="text-[var(--sunlink-orange)]"> Melhor</span>
                <br />
                Energia Solar
              </h1>
              <p className="text-xl md:text-2xl text-green-100">
                Seu hub completo para encontrar as melhores oportunidades de projetos solares para sua residência ou empresa.
              </p>
            </div>

            {/* Quick Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Zap className="h-8 w-8 text-[var(--sunlink-orange)]" />
                <div>
                  <p className="font-semibold">Economia de até 90%</p>
                  <p className="text-sm text-green-100">na conta de luz</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Leaf className="h-8 w-8 text-[var(--sunlink-orange)]" />
                <div>
                  <p className="font-semibold">100% Sustentável</p>
                  <p className="text-sm text-green-100">energia limpa</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <TrendingUp className="h-8 w-8 text-[var(--sunlink-orange)]" />
                <div>
                  <p className="font-semibold">Valoriza seu imóvel</p>
                  <p className="text-sm text-green-100">até 10% a mais</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToSimulation}
                className="bg-[var(--sunlink-orange)] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[var(--sunlink-light-orange)] transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Simule Sua Economia</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[var(--sunlink-green)] transition-all duration-300"
              >
                Saiba Mais
              </button>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative">
            <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="text-center space-y-6">
                <div className="bg-[var(--sunlink-orange)] rounded-full w-24 h-24 mx-auto flex items-center justify-center">
                  <Zap className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Simulação Gratuita</h3>
                <p className="text-green-100">
                  Descubra em minutos quanto você pode economizar com energia solar
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-2xl font-bold text-[var(--sunlink-orange)]">5min</p>
                    <p className="text-sm">Simulação rápida</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-2xl font-bold text-[var(--sunlink-orange)]">100%</p>
                    <p className="text-sm">Gratuito</p>
                  </div>
                </div>
                <button
                  onClick={scrollToSimulation}
                  className="w-full bg-[var(--sunlink-orange)] text-white py-3 rounded-lg font-semibold hover:bg-[var(--sunlink-light-orange)] transition-colors duration-300"
                >
                  Começar Agora
                </button>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[var(--sunlink-orange)]/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

