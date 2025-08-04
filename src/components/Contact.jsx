import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Por favor, insira um email válido.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Aqui você integraria com seu backend
      console.log('Dados de contato:', formData);
      
      // Simula uma requisição
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      alert('Obrigado! Sua mensagem foi enviada com sucesso. Retornaremos em breve.');
      
      // Limpa o formulário
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      alert('Ocorreu um erro. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--sunlink-green)] mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tem dúvidas sobre energia solar? Nossa equipe está pronta para ajudar você a encontrar a melhor solução.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[var(--sunlink-green)] mb-6">
                Fale Conosco
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Estamos aqui para esclarecer suas dúvidas e ajudar você a dar o primeiro passo rumo à energia solar. Entre em contato através dos canais abaixo ou preencha o formulário.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {/* WhatsApp */}
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                <div className="bg-[var(--sunlink-orange)] rounded-full p-3">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--sunlink-green)] mb-1">WhatsApp</h4>
                  <p className="text-gray-600 mb-2">(11) 99999-9999</p>
                  <p className="text-sm text-gray-500">Resposta rápida e atendimento personalizado</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                <div className="bg-[var(--sunlink-green)] rounded-full p-3">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--sunlink-green)] mb-1">Email</h4>
                  <p className="text-gray-600 mb-2">contato@sunlink.com.br</p>
                  <p className="text-sm text-gray-500">Para dúvidas detalhadas e documentos</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                <div className="bg-[var(--sunlink-orange)] rounded-full p-3">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--sunlink-green)] mb-1">Telefone</h4>
                  <p className="text-gray-600 mb-2">(11) 3333-4444</p>
                  <p className="text-sm text-gray-500">Atendimento comercial especializado</p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                <div className="bg-[var(--sunlink-green)] rounded-full p-3">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--sunlink-green)] mb-1">Horário de Atendimento</h4>
                  <p className="text-gray-600 mb-1">Segunda a Sexta: 8h às 18h</p>
                  <p className="text-gray-600 mb-2">Sábado: 8h às 12h</p>
                  <p className="text-sm text-gray-500">WhatsApp disponível 24h</p>
                </div>
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-gradient-to-r from-[var(--sunlink-green)] to-[var(--sunlink-light-green)] text-white p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-2">Precisa de uma simulação rápida?</h4>
              <p className="mb-4">
                Use nossa ferramenta de simulação online e receba uma estimativa em minutos!
              </p>
              <button
                onClick={() => document.getElementById('simulation').scrollIntoView({ behavior: 'smooth' })}
                className="bg-[var(--sunlink-orange)] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[var(--sunlink-light-orange)] transition-colors duration-300"
              >
                Simular Agora
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[var(--sunlink-green)] mb-2">
                Envie sua Mensagem
              </h3>
              <p className="text-gray-600">
                Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="contact-name" className="block text-sm font-semibold text-[var(--sunlink-green)] mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[var(--sunlink-orange)] focus:outline-none transition-colors duration-300"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="contact-email" className="block text-sm font-semibold text-[var(--sunlink-green)] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[var(--sunlink-orange)] focus:outline-none transition-colors duration-300"
                  required
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-[var(--sunlink-green)] mb-2">
                  Assunto *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[var(--sunlink-orange)] focus:outline-none transition-colors duration-300"
                  required
                >
                  <option value="">Selecione o assunto</option>
                  <option value="simulation">Dúvidas sobre Simulação</option>
                  <option value="residential">Energia Solar Residencial</option>
                  <option value="commercial">Energia Solar Empresarial</option>
                  <option value="financing">Opções de Financiamento</option>
                  <option value="partnership">Parcerias</option>
                  <option value="support">Suporte Técnico</option>
                  <option value="other">Outros</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[var(--sunlink-green)] mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[var(--sunlink-orange)] focus:outline-none transition-colors duration-300 resize-vertical"
                  placeholder="Descreva sua dúvida ou necessidade..."
                  required
                />
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
                    <Send className="h-5 w-5" />
                    <span>Enviar Mensagem</span>
                  </>
                )}
              </button>

              <p className="text-center text-sm text-gray-500">
                Responderemos sua mensagem em até 24 horas úteis.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

