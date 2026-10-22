import React, { useState } from 'react';
import { APP_CONFIG, AppReleaseInfo } from '../config/appConfig';
import { 
  Download, 
  Globe, 
  Smartphone, 
  QrCode, 
  CheckCircle2, 
  AlertTriangle, 
  HelpCircle, 
  FileText, 
  Settings2, 
  ExternalLink,
  ShieldCheck,
  HardDrive,
  Calendar,
  Layers,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Clock
} from 'lucide-react';

interface DownloadSectionProps {
  onOpenWebDemo: () => void;
  onOpenInstallGuide: () => void;
  onOpenIosModal?: () => void;
  onDownloadApk: () => void;
  config: AppReleaseInfo;
  onUpdateConfig: (newConfig: Partial<AppReleaseInfo>) => void;
}

export const DownloadSection: React.FC<DownloadSectionProps> = ({
  onOpenWebDemo,
  onOpenInstallGuide,
  onOpenIosModal,
  onDownloadApk,
  config,
  onUpdateConfig,
}) => {
  const [showQrCode, setShowQrCode] = useState(false);
  const [showConfigDrawer, setShowConfigDrawer] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Form state pour le panneau de réglages rapide
  const [tempApkUrl, setTempApkUrl] = useState(config.apkDownloadUrl);
  const [tempVersion, setTempVersion] = useState(config.version);
  const [tempSize, setTempSize] = useState(config.apkSize);
  const [tempDate, setTempDate] = useState(config.releaseDate);
  const [tempIsAvailable, setTempIsAvailable] = useState(config.isApkAvailable);

  const handleSaveConfig = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateConfig({
      apkDownloadUrl: tempApkUrl,
      version: tempVersion,
      apkSize: tempSize,
      releaseDate: tempDate,
      isApkAvailable: tempIsAvailable,
    });
    setShowConfigDrawer(false);
  };

  const faqItems = [
    {
      q: "Comment autoriser l'installation d'une application APK sur Android ?",
      a: "Lors de l'ouverture du fichier APK téléchargé, Android peut afficher un message de sécurité. Clique sur « Paramètres » puis active « Autoriser cette source » pour ton navigateur (Chrome, Firefox, etc.). Tu pourras ensuite cliquer sur « Installer ».",
    },
    {
      q: "L'application fonctionne-t-elle sans connexion Internet ?",
      a: "Oui ! Les calculs de moyennes, ton agenda et ton emploi du temps sont sauvegardés en local sur ton téléphone. Tu peux consulter et saisir tes notes même dans une zone sans réseau.",
    },
    {
      q: "Mes camarades ou d'autres personnes peuvent-ils voir mes notes ?",
      a: "Non. Tes notes et tes données restent strictement confidentielles sur ton appareil. L'application respecte la vie privée des élèves.",
    },
    {
      q: "La version Web nécessite-t-elle une installation ?",
      a: "Non, la version Web s'exécute directement dans le navigateur de ton smartphone, tablette ou ordinateur sans aucun téléchargement préalable.",
    },
  ];

  return (
    <section id="telechargement" className="py-20 bg-gradient-to-b from-white via-slate-50 to-blue-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-bold tracking-wide">
            <Download className="w-3.5 h-3.5" />
            <span>Centre Officiel de Distribution</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F5B] tracking-tight">
            Télécharge l'application Terminale D
          </h2>

          <p className="text-base text-slate-600">
            Choisis la version Android pour profiter d'une expérience mobile complète avec notifications hors-ligne, ou lance directement la version Web depuis ton navigateur.
          </p>
        </div>

        {/* Cartes de téléchargement (Android vs Web) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* CARTE 1 : TÉLÉCHARGEMENT ANDROID */}
          <div className="relative rounded-3xl bg-white border-2 border-blue-200/90 p-8 shadow-xl flex flex-col justify-between overflow-hidden glow-card">
            {/* Ruban officiel */}
            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#2563EB] to-[#0B1F5B] text-white text-[10px] font-black uppercase tracking-wider px-4 py-1.5 rounded-bl-2xl shadow-sm">
              Recommandé pour smartphones
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0B1F5B] to-[#2563EB] text-white flex items-center justify-center shadow-md">
                  <Smartphone className="w-8 h-8 text-[#38BDF8]" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#0B1F5B]">Édition Android (APK)</h3>
                  <p className="text-xs text-slate-500 font-medium">Application native pour téléphones et tablettes Android</p>
                </div>
              </div>

              {/* Spécifications techniques connues */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs">
                <div>
                  <span className="text-[10px] text-slate-500 block font-medium">Version</span>
                  <span className="font-extrabold text-slate-900">{config.version}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block font-medium">Taille du fichier</span>
                  <span className="font-extrabold text-slate-900">{config.apkSize}</span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-[10px] text-slate-500 block font-medium">Mise à jour</span>
                  <span className="font-extrabold text-slate-900">{config.releaseDate}</span>
                </div>
                <div className="col-span-2 sm:col-span-3 pt-2 border-t border-slate-200 text-[11px] text-slate-600">
                  <span className="font-semibold text-slate-700">Compatibilité : </span>
                  {config.minAndroidVersion}
                </div>
              </div>

              {/* Statut de disponibilité & Message d'information */}
              {config.isApkAvailable ? (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-2.5 text-xs text-emerald-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    Fichier APK certifié disponible au téléchargement direct.
                  </span>
                </div>
              ) : (
                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 flex items-center gap-2.5 text-xs text-amber-800">
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>
                    Le fichier APK de cette version est en cours de finalisation. Clique ci-dessous pour être notifié ou utilise la version Web.
                  </span>
                </div>
              )}
            </div>

            {/* Actions de téléchargement Android */}
            <div className="pt-8 space-y-3">
              {config.isApkAvailable ? (
                <button
                  type="button"
                  onClick={onDownloadApk}
                  className="w-full py-4 px-6 rounded-2xl font-black text-sm text-white bg-gradient-to-r from-[#2563EB] via-[#1D4ED8] to-[#0B1F5B] hover:from-[#1D4ED8] hover:to-[#07143D] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 glow-blue cursor-pointer"
                >
                  <Download className="w-5 h-5 text-[#38BDF8]" />
                  <span>Télécharger l'APK ({config.apkSize})</span>
                </button>
              ) : (
                <button
                  type="button"
                  disabled
                  className="w-full py-4 px-6 rounded-2xl font-bold text-sm text-slate-400 bg-slate-100 cursor-not-allowed flex items-center justify-center gap-2.5"
                >
                  <Clock className="w-5 h-5 text-slate-400" />
                  <span>Téléchargement bientôt disponible</span>
                </button>
              )}

              <div className="flex items-center justify-between text-xs pt-1">
                <button
                  type="button"
                  onClick={() => setShowQrCode(!showQrCode)}
                  className="inline-flex items-center gap-1.5 font-bold text-slate-700 hover:text-[#2563EB] transition-colors cursor-pointer"
                >
                  <QrCode className="w-4 h-4 text-[#2563EB]" />
                  <span>{showQrCode ? 'Masquer le QR Code' : 'Scanner le QR Code (Mobile)'}</span>
                </button>

                <button
                  type="button"
                  onClick={onOpenInstallGuide}
                  className="inline-flex items-center gap-1 font-bold text-[#2563EB] hover:underline cursor-pointer"
                >
                  <HelpCircle className="w-4 h-4" />
                  <span>Guide pas à pas</span>
                </button>
              </div>

              {/* Affichage du QR Code interactif */}
              {showQrCode && (
                <div className="mt-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center animate-fadeIn">
                  <div className="w-40 h-40 mx-auto bg-white p-2 rounded-xl shadow-md border border-slate-200 flex items-center justify-center">
                    {/* SVG QR Code Stylisé */}
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      {/* Repères coins */}
                      <rect x="5" y="5" width="28" height="28" fill="#0B1F5B" rx="3" />
                      <rect x="9" y="9" width="20" height="20" fill="#FFFFFF" rx="2" />
                      <rect x="13" y="13" width="12" height="12" fill="#2563EB" rx="1" />

                      <rect x="67" y="5" width="28" height="28" fill="#0B1F5B" rx="3" />
                      <rect x="71" y="9" width="20" height="20" fill="#FFFFFF" rx="2" />
                      <rect x="75" y="13" width="12" height="12" fill="#2563EB" rx="1" />

                      <rect x="5" y="67" width="28" height="28" fill="#0B1F5B" rx="3" />
                      <rect x="9" y="71" width="20" height="20" fill="#FFFFFF" rx="2" />
                      <rect x="13" y="75" width="12" height="12" fill="#2563EB" rx="1" />

                      {/* Motifs binaires stylisés */}
                      <rect x="38" y="8" width="8" height="8" fill="#0B1F5B" />
                      <rect x="50" y="8" width="10" height="8" fill="#38BDF8" />
                      <rect x="38" y="22" width="12" height="10" fill="#2563EB" />
                      <rect x="54" y="22" width="6" height="6" fill="#0B1F5B" />

                      <rect x="8" y="38" width="14" height="6" fill="#2563EB" />
                      <rect x="8" y="48" width="6" height="10" fill="#0B1F5B" />
                      <rect x="18" y="52" width="10" height="6" fill="#38BDF8" />

                      {/* Centre avec logo TD */}
                      <rect x="38" y="38" width="24" height="24" fill="#0B1F5B" rx="4" />
                      <text x="50" y="54" fill="#38BDF8" fontSize="11" fontWeight="bold" textAnchor="middle">TD</text>

                      <rect x="67" y="38" width="10" height="8" fill="#0B1F5B" />
                      <rect x="82" y="38" width="12" height="12" fill="#2563EB" />
                      <rect x="72" y="50" width="8" height="8" fill="#38BDF8" />
                      <rect x="84" y="54" width="8" height="6" fill="#0B1F5B" />

                      <rect x="38" y="68" width="12" height="8" fill="#0B1F5B" />
                      <rect x="54" y="68" width="8" height="12" fill="#2563EB" />
                      <rect x="38" y="80" width="16" height="12" fill="#38BDF8" />
                      <rect x="68" y="68" width="10" height="8" fill="#0B1F5B" />
                      <rect x="82" y="70" width="10" height="10" fill="#2563EB" />
                      <rect x="70" y="82" width="14" height="10" fill="#0B1F5B" />
                    </svg>
                  </div>
                  <p className="text-[11px] text-slate-600 mt-2 font-medium">
                    Scanne ce code avec l'appareil photo de ton téléphone pour télécharger directement l'APK.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* CARTE 2 : TÉLÉCHARGER POUR IOS (IPHONE & IPAD) */}
          <div className="relative rounded-3xl bg-white border border-slate-200/90 p-8 shadow-lg flex flex-col justify-between overflow-hidden">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-md">
                  <svg viewBox="0 0 170 170" className="w-8 h-8 fill-white">
                    <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.59-7.71-11.66-14.01-6.19-9.56-11.09-20.91-14.7-34.05-3.6-13.14-5.41-25.13-5.41-35.97 0-14.45 3.49-26.24 10.47-35.37 6.99-9.13 15.86-13.79 26.63-13.98 5.65 0 11.5 1.52 17.56 4.56 6.05 3.04 10.05 4.57 11.99 4.57 1.74 0 5.98-1.58 12.72-4.73 6.74-3.15 12.5-4.52 17.27-4.11 13.04 1.09 23.36 6.3 30.96 15.65-11.52 6.96-17.18 16.63-16.97 29.02.22 9.78 3.91 18.04 11.09 24.78 7.17 6.74 15.76 10.65 25.76 11.74-2.17 6.74-4.89 13.7-8.15 20.89zM119.22 31.84c0-7.39 2.61-14.35 7.83-20.87 5.22-6.52 11.74-10.43 19.57-11.74.87 7.61-1.63 14.78-7.5 21.52-5.87 6.74-12.5 10.43-19.9 11.09z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#0B1F5B]">Édition iOS (Apple)</h3>
                  <p className="text-xs text-slate-500 font-medium">Pour iPhone et iPad (iOS 15.0 ou supérieur)</p>
                </div>
              </div>

              {/* Spécifications iOS */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Compatibilité :</span>
                  <span className="font-bold text-slate-800">iPhone, iPad & Mac (Safari / App Store)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Installation :</span>
                  <span className="font-bold text-[#2563EB]">PWA Écran d'accueil & App Store</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Statut :</span>
                  <span className="font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    {config.iosStatusText || "Bientôt disponible sur l'App Store"}
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-200 flex items-center gap-2.5 text-xs text-[#0B1F5B]">
                <ShieldCheck className="w-4 h-4 text-[#2563EB] shrink-0" />
                <span>
                  Prêt pour iPhone : s'installe en un clic sur l'écran d'accueil avec fluidité native.
                </span>
              </div>
            </div>

            {/* Action iOS */}
            <div className="pt-8 space-y-3">
              <a
                href="https://terminal-d-jra3.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-2xl font-black text-sm text-white bg-slate-900 hover:bg-black shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer group"
              >
                <svg viewBox="0 0 170 170" className="w-5 h-5 fill-white group-hover:scale-110 transition-transform">
                  <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.59-7.71-11.66-14.01-6.19-9.56-11.09-20.91-14.7-34.05-3.6-13.14-5.41-25.13-5.41-35.97 0-14.45 3.49-26.24 10.47-35.37 6.99-9.13 15.86-13.79 26.63-13.98 5.65 0 11.5 1.52 17.56 4.56 6.05 3.04 10.05 4.57 11.99 4.57 1.74 0 5.98-1.58 12.72-4.73 6.74-3.15 12.5-4.52 17.27-4.11 13.04 1.09 23.36 6.3 30.96 15.65-11.52 6.96-17.18 16.63-16.97 29.02.22 9.78 3.91 18.04 11.09 24.78 7.17 6.74 15.76 10.65 25.76 11.74-2.17 6.74-4.89 13.7-8.15 20.89zM119.22 31.84c0-7.39 2.61-14.35 7.83-20.87 5.22-6.52 11.74-10.43 19.57-11.74.87 7.61-1.63 14.78-7.5 21.52-5.87 6.74-12.5 10.43-19.9 11.09z" />
                </svg>
                <span>Télécharger pour iOS</span>
              </a>

              <p className="text-center text-[11px] text-slate-500">
                Ouvre l'application directement sur Safari ou installe-la sur ton écran d'accueil iPhone.
              </p>
            </div>
          </div>

        </div>

        {/* Section FAQ & Aide installation */}
        <div className="mt-16 max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#2563EB]" />
              <h4 className="text-base sm:text-lg font-bold text-[#0B1F5B]">
                Questions fréquentes sur l'installation et l'utilisation
              </h4>
            </div>
            
            {/* Bouton de configuration technique (pour personnaliser facilement les liens APK/Web) */}
            <button
              type="button"
              onClick={() => setShowConfigDrawer(!showConfigDrawer)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#2563EB] px-2.5 py-1.5 rounded-lg border border-slate-200 hover:border-[#2563EB] transition-colors cursor-pointer"
              title="Configurer les paramètres de téléchargement"
            >
              <Settings2 className="w-3.5 h-3.5" />
              <span>Paramètres APK</span>
            </button>
          </div>

          {/* Panneau de configuration modifiable par le développeur / utilisateur */}
          {showConfigDrawer && (
            <form onSubmit={handleSaveConfig} className="mb-6 p-4 rounded-2xl bg-blue-50 border border-blue-200 space-y-3 text-xs animate-fadeIn">
              <div className="font-bold text-[#0B1F5B] text-sm flex items-center gap-2">
                <Settings2 className="w-4 h-4 text-[#2563EB]" />
                Configuration des liens de distribution
              </div>
              <p className="text-slate-600 text-[11px]">
                Tu peux modifier ici l'URL réelle de l'APK, le numéro de version ou le statut si tu disposes d'un nouveau fichier hébergé.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">URL de l'APK</label>
                  <input
                    type="text"
                    value={tempApkUrl}
                    onChange={(e) => setTempApkUrl(e.target.value)}
                    className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs"
                    placeholder="https://.../terminale-d.apk ou /terminale-d.apk"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Numéro de Version</label>
                  <input
                    type="text"
                    value={tempVersion}
                    onChange={(e) => setTempVersion(e.target.value)}
                    className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs"
                    placeholder="v1.2.0"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Taille du fichier</label>
                  <input
                    type="text"
                    value={tempSize}
                    onChange={(e) => setTempSize(e.target.value)}
                    className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs"
                    placeholder="24.4 Mo"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Date de mise à jour</label>
                  <input
                    type="text"
                    value={tempDate}
                    onChange={(e) => setTempDate(e.target.value)}
                    className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs"
                    placeholder="Octobre 2026"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="isAvailableCheck"
                  checked={tempIsAvailable}
                  onChange={(e) => setTempIsAvailable(e.target.checked)}
                  className="rounded text-[#2563EB]"
                />
                <label htmlFor="isAvailableCheck" className="font-semibold text-slate-700 cursor-pointer">
                  Marquer le fichier APK comme disponible immédiatement
                </label>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowConfigDrawer(false)}
                  className="px-3 py-1.5 rounded-lg border border-slate-300 font-semibold text-slate-600 hover:bg-slate-100"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg bg-[#2563EB] text-white font-bold hover:bg-[#1D4ED8]"
                >
                  Enregistrer les modifications
                </button>
              </div>
            </form>
          )}

          {/* Accordéon FAQ */}
          <div className="space-y-3">
            {faqItems.map((item, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="border border-slate-200/80 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full p-4 text-left flex items-center justify-between font-bold text-xs sm:text-sm text-slate-800 hover:text-[#2563EB] bg-slate-50/50 hover:bg-slate-50 cursor-pointer"
                  >
                    <span>{item.q}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 shrink-0 text-slate-400" /> : <ChevronDown className="w-4 h-4 shrink-0 text-slate-400" />}
                  </button>
                  {isOpen && (
                    <div className="p-4 bg-white text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
