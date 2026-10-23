import React, { useState } from 'react';
import { 
  X, 
  Smartphone, 
  Share, 
  PlusSquare, 
  Bell, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Globe,
  Clock
} from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';

interface IosDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenWebApp: () => void;
  iosStatusText?: string;
}

export const IosDownloadModal: React.FC<IosDownloadModalProps> = ({
  isOpen,
  onClose,
  onOpenWebApp,
  iosStatusText = "Bientôt disponible sur l'App Store",
}) => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  if (!isOpen) return null;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailOrPhone.trim()) return;
    setIsSubscribed(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* En-tête iOS */}
        <div className="bg-[#0B1F5B] text-white p-6 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
              {/* Apple SVG Icon */}
              <svg viewBox="0 0 170 170" className="w-7 h-7 fill-white">
                <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.59-7.71-11.66-14.01-6.19-9.56-11.09-20.91-14.7-34.05-3.6-13.14-5.41-25.13-5.41-35.97 0-14.45 3.49-26.24 10.47-35.37 6.99-9.13 15.86-13.79 26.63-13.98 5.65 0 11.5 1.52 17.56 4.56 6.05 3.04 10.05 4.57 11.99 4.57 1.74 0 5.98-1.58 12.72-4.73 6.74-3.15 12.5-4.52 17.27-4.11 13.04 1.09 23.36 6.3 30.96 15.65-11.52 6.96-17.18 16.63-16.97 29.02.22 9.78 3.91 18.04 11.09 24.78 7.17 6.74 15.76 10.65 25.76 11.74-2.17 6.74-4.89 13.7-8.15 20.89zM119.22 31.84c0-7.39 2.61-14.35 7.83-20.87 5.22-6.52 11.74-10.43 19.57-11.74.87 7.61-1.63 14.78-7.5 21.52-5.87 6.74-12.5 10.43-19.9 11.09z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-white">Terminale D pour iOS</h3>
              <p className="text-xs text-sky-200">iPhone & iPad • iOS 15.0 ou version ultérieure</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Corps du modal */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-700">
          
          {/* Badge de statut */}
          <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-2xl flex items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-600 shrink-0" />
              <span className="font-bold text-amber-900">
                Statut officiel : {iosStatusText}
              </span>
            </div>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-amber-200 text-amber-900">
              Bêta TestFlight en cours
            </span>
          </div>

          {/* Méthode recommandée immédiate pour iPhone : Web App / Écran d'accueil */}
          <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-3">
            <div className="flex items-center gap-2 text-[#0B1F5B]">
              <Smartphone className="w-5 h-5 text-[#2563EB]" />
              <h4 className="font-bold text-sm">
                Tu as un iPhone ? Installe l'application tout de suite sans attendre !
              </h4>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Grâce à la technologie PWA pour iOS, tu peux installer Terminale D sur ton iPhone dès maintenant en 3 étapes simples :
            </p>

            <div className="space-y-2 pt-1 text-xs">
              <div className="flex items-start gap-2.5 p-2 bg-white rounded-xl border border-blue-100">
                <span className="w-5 h-5 rounded-full bg-[#0B1F5B] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  1
                </span>
                <span>Ouvre ce site sur <strong>Safari</strong> depuis ton iPhone.</span>
              </div>

              <div className="flex items-start gap-2.5 p-2 bg-white rounded-xl border border-blue-100">
                <span className="w-5 h-5 rounded-full bg-[#0B1F5B] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  2
                </span>
                <span className="flex items-center gap-1.5 flex-wrap">
                  Touche le bouton <strong>Partager</strong>
                  <Share className="w-3.5 h-3.5 inline text-[#2563EB]" />
                  (le carré avec la flèche vers le haut).
                </span>
              </div>

              <div className="flex items-start gap-2.5 p-2 bg-white rounded-xl border border-blue-100">
                <span className="w-5 h-5 rounded-full bg-[#0B1F5B] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  3
                </span>
                <span className="flex items-center gap-1.5 flex-wrap">
                  Fais défiler vers le bas et touche <strong>« Sur l'écran d'accueil »</strong>
                  <PlusSquare className="w-3.5 h-3.5 inline text-[#2563EB]" />
                  puis clique sur <strong>Ajouter</strong>.
                </span>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 pt-1">
              ✨ L'icône Terminale D apparaîtra comme une vraie application sur ton écran d'accueil avec plein écran et accès rapide.
            </p>
          </div>

          {/* Formulaire de notification pour la sortie App Store */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
              <Bell className="w-4 h-4 text-[#2563EB]" />
              <span>Être alerté(e) dès la disponibilité sur l'App Store / TestFlight</span>
            </div>

            {isSubscribed ? (
              <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-800 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Merci ! Tu recevras un lien direct dès la validation officielle de l'application iOS.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="text"
                  required
                  value={emailOrPhone}
                  onChange={(e) => setEmailOrPhone(e.target.value)}
                  placeholder="Ton e-mail ou WhatsApp..."
                  className="flex-1 px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs outline-none focus:border-[#2563EB]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#0B1F5B] hover:bg-[#2563EB] transition-colors shrink-0 cursor-pointer"
                >
                  M'avertir
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Pied du modal */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-200 transition-colors"
          >
            Fermer
          </button>
          
          <a
            href="https://terminal-d-jra3.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] transition-colors shadow-sm glow-blue cursor-pointer"
          >
            <Globe className="w-4 h-4" />
            <span>Ouvrir sur Safari (iPhone)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
