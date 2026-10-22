import React from 'react';
import { X, Shield, FileText } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0B1F5B] text-white p-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            {type === 'privacy' ? (
              <Shield className="w-5 h-5 text-[#38BDF8]" />
            ) : (
              <FileText className="w-5 h-5 text-[#38BDF8]" />
            )}
            <h3 className="font-extrabold text-base sm:text-lg">
              {type === 'privacy'
                ? 'Politique de Confidentialité — Terminale D'
                : 'Conditions Générales d\'Utilisation — Terminale D'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p className="font-semibold text-slate-900">
                Dernière mise à jour : 15 Octobre 2026
              </p>
              
              <h4 className="font-bold text-slate-900 text-sm mt-3">1. Engagement de confidentialité</h4>
              <p>
                L'application <strong>Terminale D</strong> a été conçue pour soutenir les élèves dans leur parcours scolaire sans compromettre leur vie privée. Nous accordons une importance primordiale à la protection des données personnelles et scolaires.
              </p>

              <h4 className="font-bold text-slate-900 text-sm mt-3">2. Données traitées</h4>
              <p>
                L'application enregistre les notes, coefficients, devoirs, rappels et emplois du temps saisis par l'élève. Ces informations sont stockées localement sur le terminal de l'utilisateur afin de permettre un accès permanent même sans réseau Internet.
              </p>

              <h4 className="font-bold text-slate-900 text-sm mt-3">3. Visibilité et partage des notes</h4>
              <p>
                La visibilité des notes et des moyennes de chaque élève dépend exclusivement des autorisations et choix configurés au sein de l'application. Aucun tiers, annonceur publicitaire ou camarade de classe ne peut accéder aux résultats d'un élève sans accord explicite.
              </p>

              <h4 className="font-bold text-slate-900 text-sm mt-3">4. Absence de publicité commerciale</h4>
              <p>
                L'application ne contient aucun système de traçage comportemental et ne commercialise aucune donnée à caractère personnel.
              </p>
            </>
          ) : (
            <>
              <p className="font-semibold text-slate-900">
                Dernière mise à jour : 15 Octobre 2026
              </p>

              <h4 className="font-bold text-slate-900 text-sm mt-3">1. Objet du service</h4>
              <p>
                L'application <strong>Terminale D</strong> est un outil pédagogique et organisationnel destiné aux élèves de la série scientifique Terminale D pour le suivi de leurs notes, de leur emploi du temps et de leurs devoirs scolaires.
              </p>

              <h4 className="font-bold text-slate-900 text-sm mt-3">2. Calcul des moyennes et coefficients</h4>
              <p>
                Les formules de calcul et les coefficients appliqués sont conformes aux barèmes officiels de la filière Terminale D. Les résultats et mentions affichés dans l'application constituent des estimations prévisionnelles destinées à guider le travail personnel de l'élève.
              </p>

              <h4 className="font-bold text-slate-900 text-sm mt-3">3. Responsabilité de l'utilisateur</h4>
              <p>
                Chaque élève est responsable de l'exactitude des notes et devoirs qu'il saisit dans son application, ainsi que de la conservation de ses identifiants ou sauvegardes.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#0B1F5B] hover:bg-[#2563EB] transition-colors"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
