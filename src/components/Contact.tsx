import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Send, CheckCircle } from 'lucide-react';
import React, { useState } from 'react';

// Tipagem de dados para o TypeScript
interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

//  form endpoint of Formspree
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xrbylpze'; 

// Componente do Formulário de Contato
export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        // Limpa o formulário após o envio
        setFormData({ name: '', phone: '', email: '', message: '' }); 
      } else {
        setStatus('error');
        // Adiciona um log para debugar a resposta do Formspree
        console.error('Formspree submission failed:', response.statusText);
      }
    } catch (error) {
      setStatus('error');
      console.error('Submission error:', error);
    }
  };

  // Mensagens de Status para o usuário
  const StatusMessage = () => {
    if (status === 'success') {
      return (
        <p className="flex items-center text-green-600 font-medium p-3 bg-green-50 rounded-md">
          <CheckCircle className="h-5 w-5 mr-2" /> 
          Solicitação enviada com sucesso! Entraremos em contato em breve.
        </p>
      );
    }
    if (status === 'error') {
      return (
        <p className="text-red-600 font-medium p-3 bg-red-50 rounded-md">
          Houve um erro ao enviar. Tente novamente ou use o WhatsApp.
        </p>
      );
    }
    return null;
  };

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="text-2xl text-foreground">
          Formulário de Contato
        </CardTitle>
        <CardDescription>
          Preencha os dados abaixo e entraremos em contato rapidamente.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <StatusMessage /> {/* Exibe a mensagem de sucesso/erro */}
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
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-gradient-hero" 
            size="lg"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? (
              // Indicador de Carregamento (você pode usar um spinner aqui)
              'Enviando...'
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                Enviar Solicitação
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}