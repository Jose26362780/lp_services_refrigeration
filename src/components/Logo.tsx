// components/Logo.tsx (ou .jsx)
import React from 'react';
// Importe a imagem diretamente do seu caminho de assets.
// Ajuste o caminho se a imagem não estiver em src/assets/
import logoSrc from '../assets/logo-jmartinez.svg'; 

interface LogoProps {
  className?: string; // Para controlar o tamanho via Tailwind
}

export function Logo({ className = "w-12 h-12" }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={logoSrc} // Use a variável importada como o 'src'
        alt="Logotipo Engenharia e Serviços José Martinez: Refrigeração e Elétrica"
        className="w-full h-full object-contain"
      />
    </div>
  );
}