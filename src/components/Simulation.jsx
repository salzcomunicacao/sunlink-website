import React, { useState } from 'react';
import { Calculator, Zap, Shield, Clock } from 'lucide-react';

const Simulation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    consumption: '',
    propertyType: 'residential'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const formatWhatsApp = (value) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
    return value;
  };

  const handleWhatsAppChange = (e) => {
    const formatted = formatWhatsApp(e.target.value);
    setFormData(prev => ({
      ...prev,
      whatsapp: formatted
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name || !formData.email || !formData.whatsapp || !formData.consumption) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Por favor, insira um email válido.');
      return;
    }

    // Validação de WhatsApp
    const whatsappNumbers = formData.whatsapp.replace(/\D/g, '');
    if (whatsappNumbers.length < 10) {
      alert('Por favor, insira um número de WhatsApp válido.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Aqui você integraria com seu backend
      console.log('Dados da simulação:', formData);
      
      // Simula uma requisição
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      alert('Obrigado! Sua simulação será enviada em breve para seu email e WhatsApp.');
      
      // Limpa o formulário
      setFormData({
        name: '',
        email: '',
        whatsapp: '',
        consumption: '',
        propertyType: 'residential'
      });
    } catch (error) {
      alert('Ocorreu um erro. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="simulation" className="py-20 bg-gradient-to-br from-[var(--sunlink-green)] to-[var(--sunlink-light-green)]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Simule Sua Economia
                <span className="text-[var(--sunlink-orange)]"> Agora!</span>
              </h2>
              <p className="text-xl text-green-100 leading-relaxed">
                Descubra em minutos quanto você pode economizar na sua conta de luz com energia solar. Nossa simulação é gratuita, rápida e sem compromisso.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-[var(--sunlink-orange)] rounded-full p-3">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Resultado em 5 minutos</h3>
                  <p className="text-green-100">Simulação rápida e precisa</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-[var(--sunlink-orange)] rounded-full p-3">
                  <Calculator className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">100% Gratuito</h3>
                  <p className="text-green-100">Sem custos ou compromissos</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-[var(--sunlink-orange)] rounded-full p-3">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Dados Seguros</h3>
                  <p className="text-green-100">Suas informações protegidas</p>
                </div>
              </div>
            </div>

            {/* Process Steps */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Como funciona:</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="bg-[var(--sunlink-orange)] rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
                  <span>Preencha seus dados básicos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-[var(--sunlink-orange)] rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                  <span>Receba sua simulação personalizada</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-[var(--sunlink-orange)] rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
                  <span>Converse com nossos especialistas</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <div className="bg-[var(--sunlink-orange)] rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--sunlink-green)] mb-2">
                Simulação Gratuita
              </h3>
              <p className="text-gray-600">
                Preencha os dados abaixo e receba sua simulação
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Property Type */}
              <div>
                <label className="block text-sm font-semibold text-[var(--sunlink-green)] mb-2">
                  Tipo de Propriedade *
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, propertyType: 'residential' }))}
                    className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                      formData.propertyType === 'residential'
                        ? 'border-[var(--sunlink-orange)] bg-[var(--sunlink-orange)]/10 text-[var(--sunlink-orange)]'
                        : 'border-gray-300 hover:border-[var(--sunlink-orange)]'
                    }`}
                  >
                    Residencial
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, propertyType: 'commercial' }))}
                    className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                      formData.propertyType === 'commercial'
                        ? 'border-[var(--sunlink-orange)] bg-[var(--sunlink-orange)]/10 text-[var(--sunlink-orange)]'
                        : 'border-gray-300 hover:border-[var(--sunlink-orange)]'
                    }`}
                  >
                    Empresarial
                  </button>
                </div>
              </div>

              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[var(--sunlink-green)] mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[var(--sunlink-orange)] focus:outline-none transition-colors duration-300"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[var(--sunlink-green)] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[var(--sunlink-orange)] focus:outline-none transition-colors duration-300"
                  required
                />
              </div>

              {/* WhatsApp */}
              <div>
                <label htmlFor="whatsapp" className="block text-sm font-semibold text-[var(--sunlink-green)] mb-2">
                  WhatsApp (com DDD) *
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleWhatsAppChange}
                  placeholder="(11) 99999-9999"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[var(--sunlink-orange)] focus:outline-none transition-colors duration-300"
                  required
                />
              </div>

              {/* Consumption */}
              <div>
                <label htmlFor="consumption" className="block text-sm font-semibold text-[var(--sunlink-green)] mb-2">
                  Média de Consumo Mensal (kWh) *
                </label>
                <select
                  id="consumption"
                  name="consumption"
                  value={formData.consumption}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[var(--sunlink-orange)] focus:outline-none transition-colors duration-300"
                  required
                >
                  <option value="">Selecione sua faixa de consumo</option>
                  <option value="0-150">0 - 150 kWh</option>
                  <option value="151-300">151 - 300 kWh</option>
                  <option value="301-500">301 - 500 kWh</option>
                  <option value="501-800">501 - 800 kWh</option>
                  <option value="801-1200">801 - 1200 kWh</option>
                  <option value="1201+">Mais de 1200 kWh</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[var(--sunlink-orange)] text-white py-4 rounded-lg font-semibold text-lg hover:bg-[var(--sunlink-light-orange)] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Zap className="h-5 w-5" />
                    <span>Receber Minha Simulação</span>
                  </>
                )}
              </button>

              {/* Privacy */}
              <p className="text-center text-sm text-gray-500">
                🔒 Seus dados estão seguros. Não enviamos spam.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Simulation;

