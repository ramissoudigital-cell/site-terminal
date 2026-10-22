import React from 'react';
import { Logo } from './Logo';
import { InteractivePhoneMockup } from './InteractivePhoneMockup';
import { APP_CONFIG } from '../config/appConfig';
import { 
  Download, 
  Globe, 
  Calculator, 
  CalendarCheck, 
  Clock, 
  Sparkles, 
  ShieldCheck, 
  GraduationCap, 
  ArrowRight,
  CheckCircle2,
  FileCheck
} from 'lucide-react';

interface HeroProps {
  onOpenWebDemo: () => void;
  onOpenInstallModal: () => void;
  onDownloadApk: () => void;
  onDownloadIos?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenWebDemo,
  onOpenInstallModal,
  onDownloadApk,
  onDownloadIos,
}) => {
  return (
    <section id="accueil" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Arrière-plan décoratif et maillage technologique */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#38BDF8]/15 via-[#2563EB]/10 to-transparent rounded-full blur-3xl transform -translate-y-1/3" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-gradient-to-tr from-[#0B1F5B]/10 via-[#38BDF8]/10 to-transparent rounded-full blur-3xl" />
        {/* Grille subtile */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#0B1F5B 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Colonne Gauche : Présentation et Call-To-Action */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Badge de statut officiel */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#2563EB] text-xs font-bold tracking-wide shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-[#2563EB] animate-pulse" />
              <span>Plateforme Officielle • Promotion Bac Terminale D</span>
            </div>

            {/* Titre Principal & Slogan */}
            <div className="space-y-3">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <Logo size="lg" />
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B1F5B] tracking-tight leading-[1.15]">
                {APP_CONFIG.tagline}
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {APP_CONFIG.shortDescription}
              </p>
            </div>

            {/* Indicateurs clés des fonctionnalités */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0">
                  <Calculator className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 leading-tight">Moyennes D</p>
                  <p className="text-[10px] text-slate-500">Coeffs officiels</p>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <CalendarCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 leading-tight">Agenda Malin</p>
                  <p className="text-[10px] text-slate-500">Devoirs & DS</p>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 leading-tight">Emploi du temps</p>
                  <p className="text-[10px] text-slate-500">Accès hors-ligne</p>
                </div>
              </div>
            </div>

            {/* Boutons d'action principaux */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              {/* Bouton Principal : Télécharger pour Android */}
              <button
                type="button"
                onClick={onDownloadApk}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-[#2563EB] via-[#1D4ED8] to-[#0B1F5B] hover:from-[#1E40AF] hover:to-[#07143D] shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 glow-blue group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center">
                  <Download className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-left">
                  <span className="block text-xs uppercase tracking-wider text-sky-200 font-semibold leading-tight">
                    Fichier APK certifié
                  </span>
                  <span className="block text-base font-bold leading-tight">
                    Télécharger pour Android
                  </span>
                </div>
              </button>

              {/* Bouton Secondaire : Télécharger pour iOS */}
              <a
                href="https://terminal-d-jra3.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl text-base font-bold text-[#0B1F5B] bg-white hover:bg-slate-50 border-2 border-slate-200 hover:border-[#38BDF8] shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer group"
              >
                <svg viewBox="0 0 170 170" className="w-5 h-5 fill-current text-[#0B1F5B] group-hover:text-[#2563EB] transition-colors">
                  <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.59-7.71-11.66-14.01-6.19-9.56-11.09-20.91-14.7-34.05-3.6-13.14-5.41-25.13-5.41-35.97 0-14.45 3.49-26.24 10.47-35.37 6.99-9.13 15.86-13.79 26.63-13.98 5.65 0 11.5 1.52 17.56 4.56 6.05 3.04 10.05 4.57 11.99 4.57 1.74 0 5.98-1.58 12.72-4.73 6.74-3.15 12.5-4.52 17.27-4.11 13.04 1.09 23.36 6.3 30.96 15.65-11.52 6.96-17.18 16.63-16.97 29.02.22 9.78 3.91 18.04 11.09 24.78 7.17 6.74 15.76 10.65 25.76 11.74-2.17 6.74-4.89 13.7-8.15 20.89zM119.22 31.84c0-7.39 2.61-14.35 7.83-20.87 5.22-6.52 11.74-10.43 19.57-11.74.87 7.61-1.63 14.78-7.5 21.52-5.87 6.74-12.5 10.43-19.9 11.09z" />
                </svg>
                <span>Télécharger pour iOS</span>
              </a>
            </div>

            {/* Informations pratiques sous les boutons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">
                <FileCheck className="w-4 h-4 text-emerald-500" />
                Version {APP_CONFIG.release.version} ({APP_CONFIG.release.apkSize})
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
                Gratuit pour tous les élèves
              </span>
              <button 
                type="button" 
                onClick={onOpenInstallModal}
                className="text-[#2563EB] hover:underline font-bold inline-flex items-center gap-1 cursor-pointer"
              >
                Guide d'installation Android
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

          </div>

          {/* Colonne Droite : Smartphone Interactif ultra soigné */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="w-full max-w-sm">
              <div className="mb-3 text-center">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 bg-white/90 px-3 py-1 rounded-full shadow-xs border border-slate-200">
                  <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
                  Aperçu interactif de l'application
                </span>
              </div>
              <InteractivePhoneMockup initialScreen="dashboard" interactive={true} />
              <p className="text-center text-[11px] text-slate-400 mt-3 font-medium">
                👆 Touche les onglets du smartphone pour tester l'interface
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
