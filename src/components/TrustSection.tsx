import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  UserCheck, 
  WifiOff, 
  Database, 
  HeartHandshake,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';

export const TrustSection: React.FC = () => {
  return (
    <section id="securite" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Titre & Engagement */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold tracking-wide">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Sécurité & Déontologie Scolaire</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F5B] tracking-tight">
            Une application conçue pour ton organisation et ta réussite
          </h2>

          <p className="text-base text-slate-600 leading-relaxed">
            L'année de Terminale D exige concentration, sérénité et méthode. Notre priorité absolue est d'offrir un outil sain, respectueux de ta vie privée et fiable à chaque instant.
          </p>
        </div>

        {/* Grille des engagements de sécurité et d'éthique */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="p-6 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 hover:border-[#38BDF8] transition-all glow-card">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#2563EB] flex items-center justify-center mb-4">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-base font-extrabold text-[#0B1F5B] mb-2">
              Confidentialité stricte des notes
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Tes notes, tes devoirs et tes moyennes restent ta propriété exclusive. La visibilité de tes informations dépend uniquement des autorisations que tu définis.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 hover:border-[#38BDF8] transition-all glow-card">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <WifiOff className="w-6 h-6" />
            </div>
            <h3 className="text-base font-extrabold text-[#0B1F5B] mb-2">
              Autonomie totale hors-ligne
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Aucun besoin de forfait internet permanent pour consulter ton emploi du temps ou calculer ta moyenne. Tout est stocké et calculé directement sur ton téléphone.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 hover:border-[#38BDF8] transition-all glow-card">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
              <Database className="w-6 h-6" />
            </div>
            <h3 className="text-base font-extrabold text-[#0B1F5B] mb-2">
              Zéro pistage publicitaire
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              L'application ne contient aucun traqueur commercial, aucune bannière intempestive et ne revend aucune donnée à des tiers publicitaires.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 hover:border-[#38BDF8] transition-all glow-card">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
              <UserCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-extrabold text-[#0B1F5B] mb-2">
              Conformité avec la série D
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Les pondérations des coefficients (SVT, Maths, PC, Français, Philo, etc.) sont rigoureusement alignées sur le règlement officiel du Baccalauréat.
            </p>
          </div>

        </div>

        {/* Encadré d'engagement pour les familles et élèves */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-blue-50/70 border border-blue-200 text-xs sm:text-sm text-slate-700 leading-relaxed flex flex-col md:flex-row items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-[#0B1F5B] text-white flex items-center justify-center shrink-0">
            <HeartHandshake className="w-7 h-7 text-[#38BDF8]" />
          </div>
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="font-extrabold text-[#0B1F5B] text-base">
              Un cadre protecteur pour chaque élève
            </h4>
            <p className="text-slate-600">
              L'application Terminale D a été conçue bénévolement avec et pour les élèves. Son unique vocation est de t'offrir de la clarté dans ton emploi du temps et une maîtrise totale de tes résultats pour aborder les épreuves finales dans les meilleures conditions.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
