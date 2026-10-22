import React from 'react';
import { X, Smartphone, Download, Settings, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';

interface InstallGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownloadApk: () => void;
}

export const InstallGuideModal: React.FC<InstallGuideModalProps> = ({
  isOpen,
  onClose,
  onDownloadApk,
}) => {
  if (!isOpen) return null;

  const steps = [
    {
      number: '1',
      title: 'Télécharger le fichier APK',
      description: 'Clique sur le bouton « Télécharger l\'APK » depuis le site sur ton smartphone Android. Le fichier sera sauvegardé dans ton dossier Téléchargements.',
      icon: Download,
    },
    {
      number: '2',
      title: 'Message de sécurité Android',
      description: 'Ton navigateur (Chrome, Firefox, etc.) peut afficher un avertissement type « Ce type de fichier peut endommager votre appareil ». C\'est une précaution automatique standard d\'Android pour les applications distribuées hors Play Store. Clique sur « Télécharger quand même ».',
      icon: AlertCircle,
    },
    {
      number: '3',
      title: 'Autoriser la source de téléchargement',
      description: 'Ouvre le fichier téléchargé. Si Android te demande une autorisation, clique sur « Paramètres » puis coche « Autoriser à partir de cette source » pour ton navigateur.',
      icon: Settings,
    },
    {
      number: '4',
      title: 'Finaliser l\'installation',
      description: 'Reviens sur la fenêtre d\'installation et appuie sur « Installer ». Une fois le processus terminé, appuie sur « Ouvrir » pour lancer Terminale D !',
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* En-tête */}
        <div className="bg-gradient-to-r from-[#0B1F5B] to-[#2563EB] text-white p-6 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <Smartphone className="w-5 h-5 text-[#38BDF8]" />
            </div>
            <div>
              <h3 className="text-lg font-extrabold">Guide d'installation Android</h3>
              <p className="text-xs text-sky-200">Comment installer l'APK Terminale D pas à pas</p>
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

        {/* Corps avec les étapes */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-700">
          <div className="p-3.5 bg-blue-50 border border-blue-200 rounded-2xl text-xs text-[#0B1F5B] flex items-start gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              Le fichier APK de Terminale D est officiel, sûr et vérifié. Il ne demande que les autorisations strictement nécessaires pour la sauvegarde de tes données scolaires.
            </p>
          </div>

          <div className="space-y-4">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="w-8 h-8 rounded-xl bg-[#0B1F5B] text-white flex items-center justify-center font-extrabold text-xs shrink-0">
                    {step.number}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-xs sm:text-sm text-slate-900 flex items-center gap-1.5">
                      <span>{step.title}</span>
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-4 bg-slate-100 rounded-2xl text-xs text-slate-600 space-y-1.5">
            <p className="font-bold text-slate-800">Un problème lors de l'installation ?</p>
            <p>
              Vérifie que ton appareil dispose d'au moins 50 Mo d'espace libre et fonctionne sous Android 7.0 ou supérieur. En cas de doute, la version Web reste accessible sans installation !
            </p>
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
          <button
            type="button"
            onClick={() => {
              onClose();
              onDownloadApk();
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] transition-colors shadow-sm glow-blue"
          >
            <Download className="w-4 h-4" />
            <span>Lancer le téléchargement ({APP_CONFIG.release.apkSize})</span>
          </button>
        </div>
      </div>
    </div>
  );
};
