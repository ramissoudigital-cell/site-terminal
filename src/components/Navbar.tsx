import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { APP_CONFIG } from '../config/appConfig';
import { Download, Globe, Menu, X, Smartphone } from 'lucide-react';

interface NavbarProps {
  onOpenWebDemo: () => void;
  onOpenInstallModal: () => void;
  onOpenIosModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenWebDemo, onOpenInstallModal, onOpenIosModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'Fonctionnalités', href: '#fonctionnalites' },
    { label: 'Aperçu App', href: '#apercu' },
    { label: 'Simulateur', href: '#simulateur' },
    { label: 'Sécurité & Confiance', href: '#securite' },
    { label: 'Téléchargement', href: '#telechargement' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-white/80 backdrop-blur-sm py-4 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo officiel Terminale D */}
          <a href="#accueil" className="focus:outline-none">
            <Logo size="md" showTagline={true} />
          </a>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-[#2563EB] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#2563EB] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions rapides Desktop */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenIosModal || onOpenWebDemo}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-[#0B1F5B] bg-slate-100 hover:bg-slate-200/80 transition-colors cursor-pointer"
            >
              <svg viewBox="0 0 170 170" className="w-3.5 h-3.5 fill-current text-[#0B1F5B]">
                <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.59-7.71-11.66-14.01-6.19-9.56-11.09-20.91-14.7-34.05-3.6-13.14-5.41-25.13-5.41-35.97 0-14.45 3.49-26.24 10.47-35.37 6.99-9.13 15.86-13.79 26.63-13.98 5.65 0 11.5 1.52 17.56 4.56 6.05 3.04 10.05 4.57 11.99 4.57 1.74 0 5.98-1.58 12.72-4.73 6.74-3.15 12.5-4.52 17.27-4.11 13.04 1.09 23.36 6.3 30.96 15.65-11.52 6.96-17.18 16.63-16.97 29.02.22 9.78 3.91 18.04 11.09 24.78 7.17 6.74 15.76 10.65 25.76 11.74-2.17 6.74-4.89 13.7-8.15 20.89zM119.22 31.84c0-7.39 2.61-14.35 7.83-20.87 5.22-6.52 11.74-10.43 19.57-11.74.87 7.61-1.63 14.78-7.5 21.52-5.87 6.74-12.5 10.43-19.9 11.09z" />
              </svg>
              <span>Télécharger pour iOS</span>
            </button>

            <a
              href="#telechargement"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#2563EB] to-[#0B1F5B] hover:from-[#1D4ED8] hover:to-[#07143D] transition-all shadow-md hover:shadow-lg glow-blue cursor-pointer"
            >
              <Smartphone className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Télécharger l'APK</span>
            </a>
          </div>

          {/* Bouton Menu Mobile */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Panneau Mobile Déroulant */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-slate-200 space-y-2 pb-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-blue-50 hover:text-[#2563EB] rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenIosModal) onOpenIosModal();
                  else onOpenWebDemo();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-[#0B1F5B] bg-slate-100"
              >
                <svg viewBox="0 0 170 170" className="w-4 h-4 fill-current text-[#0B1F5B]">
                  <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.59-7.71-11.66-14.01-6.19-9.56-11.09-20.91-14.7-34.05-3.6-13.14-5.41-25.13-5.41-35.97 0-14.45 3.49-26.24 10.47-35.37 6.99-9.13 15.86-13.79 26.63-13.98 5.65 0 11.5 1.52 17.56 4.56 6.05 3.04 10.05 4.57 11.99 4.57 1.74 0 5.98-1.58 12.72-4.73 6.74-3.15 12.5-4.52 17.27-4.11 13.04 1.09 23.36 6.3 30.96 15.65-11.52 6.96-17.18 16.63-16.97 29.02.22 9.78 3.91 18.04 11.09 24.78 7.17 6.74 15.76 10.65 25.76 11.74-2.17 6.74-4.89 13.7-8.15 20.89zM119.22 31.84c0-7.39 2.61-14.35 7.83-20.87 5.22-6.52 11.74-10.43 19.57-11.74.87 7.61-1.63 14.78-7.5 21.52-5.87 6.74-12.5 10.43-19.9 11.09z" />
                </svg>
                <span>Télécharger pour iOS</span>
              </button>
              <a
                href="#telechargement"
                onClick={handleLinkClick}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#2563EB] to-[#0B1F5B]"
              >
                <Download className="w-4 h-4 text-[#38BDF8]" />
                <span>Télécharger pour Android (APK)</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
