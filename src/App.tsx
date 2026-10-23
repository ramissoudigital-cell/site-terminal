/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { APP_CONFIG, AppReleaseInfo } from './config/appConfig';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturesSection } from './components/FeaturesSection';
import { ScreenshotsGallery } from './components/ScreenshotsGallery';
import { GradeCalculatorLive } from './components/GradeCalculatorLive';
import { DownloadSection } from './components/DownloadSection';
import { TrustSection } from './components/TrustSection';
import { UpdatesChangelog } from './components/UpdatesChangelog';
import { Footer } from './components/Footer';
import { InstallGuideModal } from './components/InstallGuideModal';
import { IosDownloadModal } from './components/IosDownloadModal';
import { WebAppDemoModal } from './components/WebAppDemoModal';
import { LegalModal } from './components/LegalModals';
import { ContactModal } from './components/ContactModal';
import { CheckCircle2, Download, X, HelpCircle, Smartphone } from 'lucide-react';

export default function App() {
  // Configuration modifiable (state réactif)
  const [releaseConfig, setReleaseConfig] = useState<AppReleaseInfo>(APP_CONFIG.release);

  // Modals state
  const [isInstallGuideOpen, setIsInstallGuideOpen] = useState(false);
  const [isIosModalOpen, setIsIosModalOpen] = useState(false);
  const [isWebAppModalOpen, setIsWebAppModalOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  // Toast de téléchargement
  const [downloadToast, setDownloadToast] = useState<{
    show: boolean;
    title: string;
    message: string;
  }>({
    show: false,
    title: '',
    message: '',
  });

  const handleUpdateConfig = (newVals: Partial<AppReleaseInfo>) => {
    setReleaseConfig((prev) => ({ ...prev, ...newVals }));
  };

  const handleDownloadApk = () => {
    if (!releaseConfig.isApkAvailable) {
      setDownloadToast({
        show: true,
        title: 'Téléchargement bientôt disponible',
        message: 'Le package APK pour cette mise à jour est en cours de compilation. Tu peux déjà utiliser la version Web !',
      });
      return;
    }

    // Déclenchement du téléchargement réel du fichier
    const apkFileName = 'Terminal-D.apk';
    const apkUrl = releaseConfig.apkDownloadUrl || '/Terminal-D.apk';
    
    // Création d'un élément d'ancrage virtuel pour initier le téléchargement
    const link = document.createElement('a');
    link.href = apkUrl;
    link.setAttribute('download', apkFileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Notification à l'utilisateur
    setDownloadToast({
      show: true,
      title: 'Téléchargement de l\'APK démarré !',
      message: `Fichier : ${apkFileName} (${releaseConfig.apkSize}). Suis le guide d'installation pour autoriser la source sur Android.`,
    });
  };

  const scrollToCalculator = () => {
    const el = document.getElementById('simulateur');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col selection:bg-[#38BDF8] selection:text-[#0B1F5B]">
      
      {/* Barre de navigation officielle */}
      <Navbar
        onOpenWebDemo={() => setIsWebAppModalOpen(true)}
        onOpenInstallModal={() => setIsInstallGuideOpen(true)}
        onOpenIosModal={() => setIsIosModalOpen(true)}
      />

      {/* Contenu principal */}
      <main className="flex-1">
        {/* Section 1 : Accueil / Hero */}
        <Hero
          onOpenWebDemo={() => setIsWebAppModalOpen(true)}
          onOpenInstallModal={() => setIsInstallGuideOpen(true)}
          onDownloadApk={handleDownloadApk}
          onDownloadIos={() => setIsIosModalOpen(true)}
        />

        {/* Section 2 : Les 6 fonctionnalités clés */}
        <FeaturesSection onExploreCalculator={scrollToCalculator} />

        {/* Section 3 : Aperçus réalistes des écrans */}
        <ScreenshotsGallery />

        {/* Section 4 : Simulateur interactif de moyennes Terminale D */}
        <GradeCalculatorLive />

        {/* Section 5 : Espace de Téléchargement Android & iOS */}
        <DownloadSection
          config={releaseConfig}
          onUpdateConfig={handleUpdateConfig}
          onOpenWebDemo={() => setIsWebAppModalOpen(true)}
          onOpenInstallGuide={() => setIsInstallGuideOpen(true)}
          onOpenIosModal={() => setIsIosModalOpen(true)}
          onDownloadApk={handleDownloadApk}
        />

        {/* Section 6 : Confiance & Confidentialité */}
        <TrustSection />

        {/* Section 7 : Mises à jour & Nouveautés */}
        <UpdatesChangelog />
      </main>

      {/* Pied de page officiel */}
      <Footer
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
        onOpenContact={() => setIsContactOpen(true)}
        onOpenWebDemo={() => setIsWebAppModalOpen(true)}
        onOpenIosModal={() => setIsIosModalOpen(true)}
      />

      {/* MODAL : Guide d'installation Android pas à pas */}
      <InstallGuideModal
        isOpen={isInstallGuideOpen}
        onClose={() => setIsInstallGuideOpen(false)}
        onDownloadApk={handleDownloadApk}
      />

      {/* MODAL : Téléchargement et Installation iOS (iPhone & iPad) */}
      <IosDownloadModal
        isOpen={isIosModalOpen}
        onClose={() => setIsIosModalOpen(false)}
        onOpenWebApp={() => setIsWebAppModalOpen(true)}
        iosStatusText={releaseConfig.iosStatusText}
      />

      {/* MODAL : Application Web Démo Interactive */}
      <WebAppDemoModal
        isOpen={isWebAppModalOpen}
        onClose={() => setIsWebAppModalOpen(false)}
        onDownloadApk={handleDownloadApk}
      />

      {/* MODAL : Mentions légales / Politique de confidentialité */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* MODAL : Contact & Support */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* TOAST FLOTTANT DE TÉLÉCHARGEMENT */}
      {downloadToast.show && (
        <div className="fixed bottom-6 right-6 z-50 max-w-md bg-[#0B1F5B] text-white p-4 rounded-2xl shadow-2xl border border-white/20 flex items-start gap-3 animate-slideUp">
          <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div className="space-y-1 flex-1 text-xs">
            <p className="font-extrabold text-sm text-white">
              {downloadToast.title}
            </p>
            <p className="text-slate-300 leading-relaxed">
              {downloadToast.message}
            </p>
            <div className="pt-2 flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setDownloadToast({ ...downloadToast, show: false });
                  setIsInstallGuideOpen(true);
                }}
                className="text-[#38BDF8] hover:underline font-bold inline-flex items-center gap-1 cursor-pointer"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                Voir le guide d'installation
              </button>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setDownloadToast({ ...downloadToast, show: false })}
            className="text-white/60 hover:text-white p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

    </div>
  );
}
