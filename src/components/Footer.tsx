import React from 'react';
import { Logo } from './Logo';
import { APP_CONFIG } from '../config/appConfig';
import { Mail, GraduationCap, Heart, ShieldCheck, Download, Globe } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenContact: () => void;
  onOpenWebDemo: () => void;
  onOpenIosModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onOpenContact,
  onOpenWebDemo,
  onOpenIosModal,
}) => {
  return (
    <footer className="bg-[#0B1F5B] text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Colonne 1 : Marque & Slogan (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Logo size="lg" variant="white" showTagline={false} />
            
            <p className="text-base font-bold text-[#38BDF8]">
              {APP_CONFIG.tagline}
            </p>

            <p className="text-xs sm:text-sm text-slate-300 max-w-sm leading-relaxed">
              La plateforme scolaire créée spécialement pour accompagner les élèves de Terminale D dans la gestion de leurs notes, coefficients, devoirs et réussite au Baccalauréat.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-sky-200 text-xs font-semibold">
                <GraduationCap className="w-3.5 h-3.5" />
                Version {APP_CONFIG.release.version} ({APP_CONFIG.release.releaseDate})
              </span>
            </div>
          </div>

          {/* Colonne 2 : Navigation Rapide (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-sky-300">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#accueil" className="hover:text-white transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#fonctionnalites" className="hover:text-white transition-colors">
                  Fonctionnalités Clés
                </a>
              </li>
              <li>
                <a href="#apercu" className="hover:text-white transition-colors">
                  Aperçu de l'Application
                </a>
              </li>
              <li>
                <a href="#simulateur" className="hover:text-white transition-colors">
                  Simulateur de Moyennes
                </a>
              </li>
              <li>
                <a href="#telechargement" className="hover:text-white transition-colors">
                  Téléchargement Android (APK)
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenIosModal || onOpenWebDemo}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Télécharger pour iOS (iPhone)
                </button>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Éthique & Support (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-sky-300">
              Assistance & Équipe
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Une question sur le calcul des coefficients ou une suggestion d'amélioration pour notre classe ?
            </p>

            <div className="space-y-2 pt-1 text-xs">
              <button
                type="button"
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#38BDF8]" />
                <span>Contacter l'administrateur / délégué</span>
              </button>
            </div>

            <div className="pt-2 text-[11px] text-slate-400">
              Disponible pour toute la promotion Terminale D.
            </div>
          </div>

        </div>

        {/* Ligne inférieure : Copyright et Liens Légaux */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} Terminale D. Tous droits réservés.</span>
          </p>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Politique de Confidentialité
            </button>
            <span className="text-slate-600">•</span>
            <button
              type="button"
              onClick={onOpenTerms}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Conditions d'Utilisation
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
