import React from 'react';
import { Home, Building2, Calculator, CreditCard, CheckCircle, ArrowRight } from 'lucide-react';

const Services = () => {
  const scrollToSimulation = () => {
    const element = document.getElementById('simulation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--sunlink-green)] mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas de energia solar para residências e empresas, com foco na melhor experiência do cliente.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Residential */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-[var(--sunlink-green)] rounded-full w-16 h-16 flex items-center justify-center mr-4">
                <Home className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[var(--sunlink-green)]">Energia Solar Residencial</h3>
                <p className="text-gray-600">Para sua casa e família</p>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Transforme sua residência em uma fonte de energia limpa e econômica. Nossos parceiros oferecem soluções personalizadas que se adaptam perfeitamente ao seu consumo e orçamento.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-[var(--sunlink-orange)] mr-3" />
                <span className="text-gray-700">Redução de até 90% na conta de luz</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-[var(--sunlink-orange)] mr-3" />
                <span className="text-gray-700">Valorização do imóvel em até 10%</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-[var(--sunlink-orange)] mr-3" />
                <span className="text-gray-700">Instalação rápida e segura</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-[var(--sunlink-orange)] mr-3" />
                <span className="text-gray-700">Garantia de até 25 anos</span>
              </div>
            </div>

            <button
              onClick={scrollToSimulation}
              className="w-full bg-[var(--sunlink-green)] text-white py-3 rounded-lg font-semibold hover:bg-[var(--sunlink-light-green)] transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <span>Simular para Residência</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Commercial */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-[var(--sunlink-orange)] rounded-full w-16 h-16 flex items-center justify-center mr-4">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[var(--sunlink-green)]">Energia Solar Empresarial</h3>
                <p className="text-gray-600">Para seu negócio crescer</p>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Reduza significativamente os custos operacionais da sua empresa e demonstre compromisso com a sustentabilidade. Soluções escaláveis para negócios de todos os tamanhos.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-[var(--sunlink-orange)] mr-3" />
                <span className="text-gray-700">Redução drástica nos custos operacionais</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-[var(--sunlink-orange)] mr-3" />
                <span className="text-gray-700">Melhoria da imagem corporativa</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-[var(--sunlink-orange)] mr-3" />
                <span className="text-gray-700">Incentivos fiscais disponíveis</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-[var(--sunlink-orange)] mr-3" />
                <span className="text-gray-700">ROI em 3-5 anos</span>
              </div>
            </div>

            <button
              onClick={scrollToSimulation}
              className="w-full bg-[var(--sunlink-orange)] text-white py-3 rounded-lg font-semibold hover:bg-[var(--sunlink-light-orange)] transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <span>Simular para Empresa</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Additional Services */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Simulation Service */}
          <div className="bg-gradient-to-r from-[var(--sunlink-green)] to-[var(--sunlink-light-green)] text-white rounded-xl p-8">
            <div className="flex items-center mb-4">
              <Calculator className="h-8 w-8 text-[var(--sunlink-orange)] mr-3" />
              <h3 className="text-2xl font-bold">Simulação Inteligente</h3>
            </div>
            <p className="mb-6 leading-relaxed">
              Nossa plataforma analisa seu perfil de consumo e conecta você aos melhores fornecedores do mercado, garantindo a proposta mais vantajosa.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-[var(--sunlink-orange)] mr-2" />
                <span className="text-sm">Análise personalizada do consumo</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-[var(--sunlink-orange)] mr-2" />
                <span className="text-sm">Comparação de múltiplas propostas</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-[var(--sunlink-orange)] mr-2" />
                <span className="text-sm">Recomendação do melhor custo-benefício</span>
              </li>
            </ul>
            <button
              onClick={scrollToSimulation}
              className="bg-[var(--sunlink-orange)] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[var(--sunlink-light-orange)] transition-colors duration-300"
            >
              Fazer Simulação
            </button>
          </div>

          {/* Financing Service */}
          <div className="bg-gradient-to-r from-[var(--sunlink-orange)] to-[var(--sunlink-light-orange)] text-white rounded-xl p-8">
            <div className="flex items-center mb-4">
              <CreditCard className="h-8 w-8 text-white mr-3" />
              <h3 className="text-2xl font-bold">Opções de Financiamento</h3>
            </div>
            <p className="mb-6 leading-relaxed">
              Trabalhamos com os melhores parceiros financeiros para oferecer condições especiais e facilitar seu investimento em energia solar.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-white mr-2" />
                <span className="text-sm">Financiamento em até 120 meses</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-white mr-2" />
                <span className="text-sm">Taxas competitivas do mercado</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-white mr-2" />
                <span className="text-sm">Aprovação rápida e desburocratizada</span>
              </li>
            </ul>
            <button
              onClick={scrollToSimulation}
              className="bg-white text-[var(--sunlink-orange)] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Consultar Financiamento
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

