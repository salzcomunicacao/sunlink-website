import React from 'react';
import { Target, Eye, Heart, Users, Award, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--sunlink-green)] mb-6">
            Sobre a SunLink
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos mais que uma empresa de energia solar. Somos o hub que conecta você às melhores oportunidades do mercado solar brasileiro.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-[var(--sunlink-green)] mb-4">
                Nossa História
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                A SunLink nasceu da visão de democratizar o acesso à energia solar no Brasil. Percebemos que muitas pessoas queriam adotar energia limpa, mas se perdiam na complexidade do mercado, nas múltiplas opções e na dificuldade de encontrar fornecedores confiáveis.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Por isso, criamos uma plataforma inteligente que simplifica todo o processo, conectando consumidores às melhores oportunidades de projetos solares, com transparência, agilidade e confiança.
              </p>
            </div>

            <div className="bg-gradient-to-r from-[var(--sunlink-green)] to-[var(--sunlink-light-green)] text-white p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-2">Nosso Diferencial</h4>
              <p>
                Não somos apenas mais uma empresa de energia solar. Somos o hub inteligente que analisa o mercado, compara opções e conecta você à solução perfeita para seu perfil.
              </p>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="bg-[var(--sunlink-orange)] rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-[var(--sunlink-green)] mb-2">1000+</h4>
              <p className="text-gray-600">Clientes Conectados</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="bg-[var(--sunlink-orange)] rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-[var(--sunlink-green)] mb-2">50+</h4>
              <p className="text-gray-600">Parceiros Certificados</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="bg-[var(--sunlink-orange)] rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-[var(--sunlink-green)] mb-2">95%</h4>
              <p className="text-gray-600">Satisfação dos Clientes</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="bg-[var(--sunlink-orange)] rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-[var(--sunlink-green)] mb-2">24h</h4>
              <p className="text-gray-600">Tempo de Resposta</p>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="text-center p-8 bg-gradient-to-b from-[var(--sunlink-green)] to-[var(--sunlink-light-green)] text-white rounded-xl">
            <div className="bg-[var(--sunlink-orange)] rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Nossa Missão</h3>
            <p className="leading-relaxed">
              Democratizar o acesso à energia solar no Brasil, conectando pessoas e empresas às melhores soluções do mercado de forma simples, transparente e confiável.
            </p>
          </div>

          {/* Vision */}
          <div className="text-center p-8 bg-gradient-to-b from-[var(--sunlink-orange)] to-[var(--sunlink-light-orange)] text-white rounded-xl">
            <div className="bg-[var(--sunlink-green)] rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <Eye className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Nossa Visão</h3>
            <p className="leading-relaxed">
              Ser a principal plataforma de energia solar do Brasil, transformando a forma como as pessoas encontram e contratam soluções de energia limpa.
            </p>
          </div>

          {/* Values */}
          <div className="text-center p-8 bg-gradient-to-b from-gray-700 to-gray-800 text-white rounded-xl">
            <div className="bg-[var(--sunlink-orange)] rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Nossos Valores</h3>
            <p className="leading-relaxed">
              Transparência, sustentabilidade, inovação e compromisso com a satisfação do cliente são os pilares que guiam todas as nossas decisões.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

