import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Send, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
import React, { useState } from 'react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xrbylpze';

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        console.error('Formspree submission failed:', response.statusText);
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  const StatusMessage = () => {
    if (status === 'success') {
      return (
        <p className="flex items-center text-green-600 font-medium p-3 bg-green-50 rounded-md animate-fadeIn">
          <CheckCircle className="h-5 w-5 mr-2" />
          Solicitação enviada com sucesso! Entraremos em contato em breve.
        </p>
      );
    }
    if (status === 'error') {
      return (
        <p className="text-red-600 font-medium p-3 bg-red-50 rounded-md animate-fadeIn">
          Houve um erro ao enviar. Tente novamente ou use o WhatsApp.
        </p>
      );
    }
    return null;
  };

  return (
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fadeInUp p-6 pb-2">
      {/* Coluna Esquerda - Formulário */}
      <Card className="shadow-card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 " >
        <CardHeader>
          <CardTitle className="text-2xl text-foreground">
            Formulário de Contato
          </CardTitle>
          <CardDescription>
            Preencha os dados abaixo e entraremos em contato rapidamente.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <StatusMessage />
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nome Completo *</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Seu nome completo"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={status === 'loading'}
                className="transition-all duration-300 focus:ring-2 focus:ring-primary focus:scale-[1.01]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Telefone/WhatsApp *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(11) 99999-9999"
                value={formData.phone}
                onChange={handleChange}
                required
                disabled={status === 'loading'}
                className="transition-all duration-300 focus:ring-2 focus:ring-primary focus:scale-[1.01]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-mail *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={status === 'loading'}
                className="transition-all duration-300 focus:ring-2 focus:ring-primary focus:scale-[1.01]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Mensagem *</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Descreva o serviço que você precisa..."
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                disabled={status === 'loading'}
                className="transition-all duration-300 focus:ring-2 focus:ring-primary focus:scale-[1.01]"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-hero hover:opacity-90 hover:scale-[1.02] transition-all duration-300"
              size="lg"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? (
                'Enviando...'
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2 animate-pulse" />
                  Enviar Solicitação
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
      {/* Coluna Direita - Informações + Atendimento 24h */}
      <div className="flex flex-col gap-5  ">
        {/* Informações de Contato */}
        <Card className="shadow-card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">
              Informações de Contato
            </CardTitle>
            <CardDescription>
              Entre em contato diretamente pelos canais abaixo.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {[
              { icon: Phone, title: 'Telefone/WhatsApp', value: '(42) 8867-0758' },
              { icon: Mail, title: 'E-mail', value: 'josemmartinez71@gmail.com' },
              { icon: MapPin, title: 'Área de Atendimento', value: 'Ponta Grossa e Região' },
            ].map((info, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-4 transition-all duration-300 hover:translate-x-2"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110">
                  <info.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{info.title}</p>
                  <p className="text-muted-foreground">{info.value}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Atendimento 24 Horas */}
        <Card className="bg-gradient-hero text-primary-foreground shadow-hero transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl animate-fadeInUp">
          <CardHeader>
            <CardTitle className="text-xl">Atendimento Sob Agendamento</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-primary-foreground/90 leading-relaxed">
              Planeje seu serviço com antecedência e garanta a disponibilidade do técnico. Entre em contato para verificar horários.
            </p>
            <Button
              variant="secondary"
              className="mt-4 bg-primary-foreground text-primary hover:bg-primary-foreground/90 hover:scale-105 transition-all duration-300"
            >
              <a
                  href="https://api.whatsapp.com/send?phone=+554288670758&text=Ola Engenherio José Martinez! Gostaria de Contratar seus serviços"
                  target="_blank">
                     Agendar Atendimento
                  </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

