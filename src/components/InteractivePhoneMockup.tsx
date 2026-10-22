import React, { useState } from 'react';
import { 
  Calculator, 
  Calendar, 
  Clock, 
  Bell, 
  BookOpen, 
  CheckCircle2, 
  AlertCircle, 
  Award,
  ChevronRight,
  TrendingUp,
  Sparkles,
  Wifi,
  Battery,
  Signal
} from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';

interface PhoneMockupProps {
  initialScreen?: 'dashboard' | 'grades' | 'agenda' | 'timetable' | 'announcements';
  interactive?: boolean;
}

export const InteractivePhoneMockup: React.FC<PhoneMockupProps> = ({
  initialScreen = 'dashboard',
  interactive = true,
}) => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'grades' | 'agenda' | 'timetable' | 'announcements'>(initialScreen);

  // Exemple de notes en direct
  const [grades, setGrades] = useState<{ [key: string]: number }>({
    svt: 16.0,
    maths: 14.5,
    pc: 15.0,
    philo: 13.0,
    fr: 14.0,
    anglais: 16.5,
  });

  // Calcul dynamique de la moyenne pondérée
  const calculateTotal = () => {
    let totalPoints = 0;
    let totalCoeffs = 0;
    APP_CONFIG.subjects.forEach((sub) => {
      const g = grades[sub.id] !== undefined ? grades[sub.id] : (sub.defaultGrade || 14);
      totalPoints += g * sub.coefficient;
      totalCoeffs += sub.coefficient;
    });
    return (totalPoints / totalCoeffs).toFixed(2);
  };

  const currentAverage = parseFloat(calculateTotal());

  const getMention = (avg: number) => {
    if (avg >= 16) return { label: 'Très Bien', color: 'bg-emerald-500 text-white' };
    if (avg >= 14) return { label: 'Mention Bien', color: 'bg-[#2563EB] text-white' };
    if (avg >= 12) return { label: 'Mention Assez Bien', color: 'bg-[#38BDF8] text-[#0B1F5B]' };
    if (avg >= 10) return { label: 'Admis', color: 'bg-amber-500 text-white' };
    return { label: 'Effort requis', color: 'bg-rose-500 text-white' };
  };

  const mention = getMention(currentAverage);

  return (
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[360px] select-none">
      {/* Halo lumineux d'arrière-plan */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-[#2563EB]/30 via-[#38BDF8]/20 to-[#0B1F5B]/30 rounded-[48px] blur-xl opacity-75 -z-10 transform scale-95" />

      {/* Châssis externe du smartphone */}
      <div className="relative rounded-[44px] bg-[#0B1F5B] p-3 shadow-2xl border-4 border-slate-700/50 ring-1 ring-white/20">
        
        {/* Boutons physiques du smartphone */}
        <div className="absolute -left-[7px] top-28 w-[3px] h-10 bg-slate-600 rounded-l-sm" />
        <div className="absolute -left-[7px] top-42 w-[3px] h-10 bg-slate-600 rounded-l-sm" />
        <div className="absolute -right-[7px] top-32 w-[3px] h-12 bg-slate-600 rounded-r-sm" />

        {/* Écran interne */}
        <div className="relative rounded-[36px] bg-[#F8FAFC] text-slate-800 overflow-hidden flex flex-col h-[650px] shadow-inner">
          
          {/* Barre d'état (Status Bar) */}
          <div className="bg-[#0B1F5B] text-white px-6 pt-3 pb-2 flex items-center justify-between text-xs tracking-tight shrink-0">
            <span className="font-semibold text-[11px]">08:30</span>
            {/* Dynamic Island / Notch */}
            <div className="w-20 h-4 bg-black/60 rounded-full flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-slate-900 rounded-full ring-1 ring-slate-800" />
            </div>
            <div className="flex items-center gap-1.5 text-white/90">
              <Signal className="w-3 h-3" />
              <Wifi className="w-3 h-3" />
              <Battery className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* En-tête de l'application */}
          <div className="bg-gradient-to-r from-[#0B1F5B] to-[#1E3A8A] text-white px-4 py-3 shrink-0 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center ring-1 ring-white/20">
                  <span className="font-black text-[#38BDF8] text-xs">TD</span>
                </div>
                <div>
                  <h4 className="text-xs font-bold leading-none tracking-wide text-white">Terminale D</h4>
                  <p className="text-[10px] text-sky-200 mt-0.5">Lycée Scientifique • Année 2026</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] text-emerald-300 font-medium">Connecté</span>
              </div>
            </div>

            {/* Navigation rapide par onglets sur le smartphone */}
            {interactive && (
              <div className="flex items-center gap-1 mt-3 bg-white/10 p-1 rounded-xl backdrop-blur-sm text-[10px] overflow-x-auto no-scrollbar">
                <button
                  type="button"
                  onClick={() => setActiveTab('dashboard')}
                  className={`px-2.5 py-1 rounded-lg font-medium transition-all shrink-0 ${
                    activeTab === 'dashboard'
                      ? 'bg-white text-[#0B1F5B] font-bold shadow-sm'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  Tableau
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('grades')}
                  className={`px-2.5 py-1 rounded-lg font-medium transition-all shrink-0 ${
                    activeTab === 'grades'
                      ? 'bg-white text-[#0B1F5B] font-bold shadow-sm'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  Moyennes
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('agenda')}
                  className={`px-2.5 py-1 rounded-lg font-medium transition-all shrink-0 ${
                    activeTab === 'agenda'
                      ? 'bg-white text-[#0B1F5B] font-bold shadow-sm'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  Agenda
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('timetable')}
                  className={`px-2.5 py-1 rounded-lg font-medium transition-all shrink-0 ${
                    activeTab === 'timetable'
                      ? 'bg-white text-[#0B1F5B] font-bold shadow-sm'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  Horaires
                </button>
              </div>
            )}
          </div>

          {/* Contenu de l'écran avec scroll fluide */}
          <div className="flex-1 overflow-y-auto p-3.5 space-y-3.5 text-left text-xs bg-[#F8FAFC]">
            
            {/* ÉCRAN 1 : TABLEAU DE BORD */}
            {activeTab === 'dashboard' && (
              <div className="space-y-3 animate-fadeIn">
                {/* Carte Moyenne Générale */}
                <div className="bg-gradient-to-br from-[#0B1F5B] to-[#2563EB] text-white p-3.5 rounded-2xl shadow-md relative overflow-hidden">
                  <div className="absolute right-0 bottom-0 translate-x-2 translate-y-2 opacity-10">
                    <Award className="w-24 h-24" />
                  </div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] text-sky-200 uppercase tracking-wider font-semibold">Moyenne Générale</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${mention.color}`}>
                      {mention.label}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold text-white tracking-tight">{currentAverage}</span>
                    <span className="text-xs text-sky-200">/ 20</span>
                  </div>
                  <div className="mt-2.5 flex items-center justify-between text-[10px] text-white/80 pt-2 border-t border-white/10">
                    <span className="flex items-center gap-1">
                      <TrendingUp className="w-3 h-3 text-emerald-400" />
                      +0.45 vs Trimestre 1
                    </span>
                    <span>Rang : 3e / 46 élèves</span>
                  </div>
                </div>

                {/* Prochain Cours Immédiat */}
                <div className="bg-white p-3 rounded-2xl border border-slate-200/80 shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-xs shrink-0">
                      PC
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-slate-800">Physique - Chimie</div>
                      <div className="text-[10px] text-slate-500">Salle Labo 2 • Prof. Kouassi</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                      08h30 - 10h25
                    </span>
                  </div>
                </div>

                {/* Prochains devoirs & épreuves urgentes */}
                <div className="bg-white p-3 rounded-2xl border border-slate-200/80 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-slate-900 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-500" />
                      Échéances prioritaires
                    </span>
                    <span className="text-[9px] text-[#2563EB] font-semibold">2 cette semaine</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="p-2 rounded-xl bg-rose-50/70 border border-rose-200/60 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-rose-500" />
                        <div>
                          <p className="text-[10px] font-bold text-slate-800">Devoir Surveillé de Maths</p>
                          <p className="text-[9px] text-slate-500">Limites, continuités & dérivées • Coeff 4</p>
                        </div>
                      </div>
                      <span className="text-[9px] font-bold text-rose-600 bg-white px-1.5 py-0.5 rounded border border-rose-200">
                        Demain
                      </span>
                    </div>

                    <div className="p-2 rounded-xl bg-amber-50/70 border border-amber-200/60 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-amber-500" />
                        <div>
                          <p className="text-[10px] font-bold text-slate-800">DM SVT : Génétique mendélienne</p>
                          <p className="text-[9px] text-slate-500">Exercices 3 & 4 p. 78 • Coeff 2</p>
                        </div>
                      </div>
                      <span className="text-[9px] font-bold text-amber-700 bg-white px-1.5 py-0.5 rounded border border-amber-200">
                        Jeudi
                      </span>
                    </div>
                  </div>
                </div>

                {/* Info Délégué */}
                <div className="p-2.5 bg-sky-50 rounded-xl border border-sky-200 flex items-start gap-2">
                  <Bell className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[10px] font-bold text-[#0B1F5B]">Message du délégué</p>
                    <p className="text-[9px] text-slate-600 leading-tight mt-0.5">
                      Rappel : Réunion de révision SVT samedi matin à 09h en bibliothèque.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* ÉCRAN 2 : CALCUL DES MOYENNES & COEFFICIENTS */}
            {activeTab === 'grades' && (
              <div className="space-y-3 animate-fadeIn">
                <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-500 font-medium">Total Coefficient</span>
                    <p className="text-base font-extrabold text-[#0B1F5B]">24 Coeffs</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-500 font-medium">Moyenne simulée</span>
                    <p className="text-base font-extrabold text-[#2563EB]">{currentAverage} / 20</p>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider px-1">
                    Matières scientifiques (Dominante D)
                  </div>
                  
                  {/* SVT */}
                  <div className="bg-white p-2.5 rounded-xl border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700 font-bold text-[9px]">SVT</span>
                        <span className="text-[11px] font-bold text-slate-800">Sc. Vie & Terre</span>
                      </div>
                      <span className="text-[9px] text-slate-500">Coefficient : 4</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-xs text-slate-900 bg-slate-100 px-2 py-1 rounded-lg">
                        {grades.svt ?? 16.0} / 20
                      </span>
                    </div>
                  </div>

                  {/* MATHS */}
                  <div className="bg-white p-2.5 rounded-xl border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="px-1.5 py-0.5 rounded bg-blue-100 text-blue-700 font-bold text-[9px]">MATHS</span>
                        <span className="text-[11px] font-bold text-slate-800">Mathématiques</span>
                      </div>
                      <span className="text-[9px] text-slate-500">Coefficient : 4</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-xs text-slate-900 bg-slate-100 px-2 py-1 rounded-lg">
                        {grades.maths ?? 14.5} / 20
                      </span>
                    </div>
                  </div>

                  {/* PHYSIQUE CHIMIE */}
                  <div className="bg-white p-2.5 rounded-xl border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="px-1.5 py-0.5 rounded bg-purple-100 text-purple-700 font-bold text-[9px]">PC</span>
                        <span className="text-[11px] font-bold text-slate-800">Physique - Chimie</span>
                      </div>
                      <span className="text-[9px] text-slate-500">Coefficient : 4</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-xs text-slate-900 bg-slate-100 px-2 py-1 rounded-lg">
                        {grades.pc ?? 15.0} / 20
                      </span>
                    </div>
                  </div>

                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider px-1 pt-1">
                    Lettres & Sciences Humaines
                  </div>

                  {/* PHILO */}
                  <div className="bg-white p-2.5 rounded-xl border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="px-1.5 py-0.5 rounded bg-rose-100 text-rose-700 font-bold text-[9px]">PHILO</span>
                        <span className="text-[11px] font-bold text-slate-800">Philosophie</span>
                      </div>
                      <span className="text-[9px] text-slate-500">Coefficient : 2</span>
                    </div>
                    <span className="font-extrabold text-xs text-slate-900 bg-slate-100 px-2 py-1 rounded-lg">
                      {grades.philo ?? 13.0} / 20
                    </span>
                  </div>

                  {/* ANGLAIS */}
                  <div className="bg-white p-2.5 rounded-xl border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="px-1.5 py-0.5 rounded bg-sky-100 text-sky-700 font-bold text-[9px]">LV1</span>
                        <span className="text-[11px] font-bold text-slate-800">Anglais</span>
                      </div>
                      <span className="text-[9px] text-slate-500">Coefficient : 2</span>
                    </div>
                    <span className="font-extrabold text-xs text-slate-900 bg-slate-100 px-2 py-1 rounded-lg">
                      {grades.anglais ?? 16.5} / 20
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* ÉCRAN 3 : AGENDA SCOLAIRE */}
            {activeTab === 'agenda' && (
              <div className="space-y-3 animate-fadeIn">
                <div className="bg-gradient-to-r from-blue-600 to-[#0B1F5B] text-white p-3 rounded-2xl">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold text-sky-200">Semaine en cours</span>
                    <span className="text-[9px] bg-white/20 px-2 py-0.5 rounded-full font-bold">Octobre 2026</span>
                  </div>
                  <p className="text-sm font-bold mt-1">Organisateur d'Épreuves</p>
                </div>

                <div className="space-y-2">
                  <div className="bg-white p-3 rounded-xl border-l-4 border-l-rose-500 border border-slate-200">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-bold text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded">
                        Composition / DS
                      </span>
                      <span className="text-[9px] text-slate-500">Jeudi 08h - 11h</span>
                    </div>
                    <p className="font-bold text-slate-900 text-[11px] mt-1">Mathématiques : Grand Devoir</p>
                    <p className="text-[9px] text-slate-500 mt-0.5">Suites numériques, limites et fonctions exponentielles.</p>
                  </div>

                  <div className="bg-white p-3 rounded-xl border-l-4 border-l-blue-500 border border-slate-200">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">
                        Interrogation
                      </span>
                      <span className="text-[9px] text-slate-500">Vendredi 14h</span>
                    </div>
                    <p className="font-bold text-slate-900 text-[11px] mt-1">SVT : Schéma bilan mitose & méiose</p>
                    <p className="text-[9px] text-slate-500 mt-0.5">Interrogation de 30 minutes sans document.</p>
                  </div>

                  <div className="bg-white p-3 rounded-xl border-l-4 border-l-emerald-500 border border-slate-200">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                        Devoir maison rendu
                      </span>
                      <span className="text-[9px] text-emerald-600 font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-2.5 h-2.5" /> Fait
                      </span>
                    </div>
                    <p className="font-bold text-slate-900 text-[11px] mt-1">Philosophie : Dissertation</p>
                    <p className="text-[9px] text-slate-500 mt-0.5">Sujet : « La conscience est-elle source de liberté ? »</p>
                  </div>
                </div>
              </div>
            )}

            {/* ÉCRAN 4 : EMPLOI DU TEMPS */}
            {activeTab === 'timetable' && (
              <div className="space-y-3 animate-fadeIn">
                <div className="flex items-center justify-between bg-white p-2.5 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 text-xs">Aujourd'hui • Mardi</span>
                  <span className="text-[10px] text-[#2563EB] font-bold bg-blue-50 px-2 py-0.5 rounded">
                    6h de cours
                  </span>
                </div>

                <div className="space-y-1.5">
                  <div className="bg-white p-2.5 rounded-xl border border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="text-center w-10 shrink-0 font-bold text-[10px] text-slate-500">
                        08:00
                      </div>
                      <div className="w-1 h-8 bg-blue-600 rounded-full" />
                      <div>
                        <p className="text-[11px] font-bold text-slate-900">Mathématiques</p>
                        <p className="text-[9px] text-slate-500">Salle 14 • M. N'Guessan</p>
                      </div>
                    </div>
                    <span className="text-[9px] text-slate-400 font-medium">2h</span>
                  </div>

                  <div className="bg-white p-2.5 rounded-xl border border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="text-center w-10 shrink-0 font-bold text-[10px] text-slate-500">
                        10:15
                      </div>
                      <div className="w-1 h-8 bg-emerald-500 rounded-full" />
                      <div>
                        <p className="text-[11px] font-bold text-slate-900">SVT (Sc. Naturelles)</p>
                        <p className="text-[9px] text-slate-500">Labo SVT • Mme Touré</p>
                      </div>
                    </div>
                    <span className="text-[9px] text-slate-400 font-medium">2h</span>
                  </div>

                  <div className="bg-slate-100/80 p-1.5 rounded-lg text-center text-[10px] text-slate-500 font-medium">
                    Pause Déjeuner • 12h15 - 14h00
                  </div>

                  <div className="bg-white p-2.5 rounded-xl border border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="text-center w-10 shrink-0 font-bold text-[10px] text-slate-500">
                        14:00
                      </div>
                      <div className="w-1 h-8 bg-purple-600 rounded-full" />
                      <div>
                        <p className="text-[11px] font-bold text-slate-900">Physique - Chimie</p>
                        <p className="text-[9px] text-slate-500">Labo Chimie • M. Bamba</p>
                      </div>
                    </div>
                    <span className="text-[9px] text-slate-400 font-medium">2h</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Barre de navigation inférieure native du smartphone */}
          <div className="bg-white border-t border-slate-200/80 px-4 py-2 flex items-center justify-around text-slate-400 shrink-0">
            <button
              type="button"
              onClick={() => setActiveTab('dashboard')}
              className={`flex flex-col items-center gap-0.5 ${
                activeTab === 'dashboard' ? 'text-[#2563EB]' : 'hover:text-slate-600'
              }`}
            >
              <Award className="w-4 h-4" />
              <span className="text-[9px] font-semibold">Accueil</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('grades')}
              className={`flex flex-col items-center gap-0.5 ${
                activeTab === 'grades' ? 'text-[#2563EB]' : 'hover:text-slate-600'
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span className="text-[9px] font-semibold">Moyennes</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('agenda')}
              className={`flex flex-col items-center gap-0.5 ${
                activeTab === 'agenda' ? 'text-[#2563EB]' : 'hover:text-slate-600'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span className="text-[9px] font-semibold">Agenda</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('timetable')}
              className={`flex flex-col items-center gap-0.5 ${
                activeTab === 'timetable' ? 'text-[#2563EB]' : 'hover:text-slate-600'
              }`}
            >
              <Clock className="w-4 h-4" />
              <span className="text-[9px] font-semibold">Emploi</span>
            </button>
          </div>

          {/* Barre de gesture Android / iOS */}
          <div className="bg-white pb-1 pt-0.5 flex justify-center shrink-0">
            <div className="w-24 h-1 bg-slate-300 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
