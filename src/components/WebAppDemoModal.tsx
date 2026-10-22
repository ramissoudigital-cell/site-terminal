import React, { useState } from 'react';
import { 
  X, 
  Globe, 
  Calculator, 
  Calendar, 
  Clock, 
  BookOpen, 
  Plus, 
  CheckCircle, 
  Trash2, 
  Award,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Download
} from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';
import { Logo } from './Logo';

interface WebAppDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownloadApk: () => void;
}

interface HomeworkItem {
  id: string;
  subject: string;
  title: string;
  dueDate: string;
  done: boolean;
}

export const WebAppDemoModal: React.FC<WebAppDemoModalProps> = ({
  isOpen,
  onClose,
  onDownloadApk,
}) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'moyennes' | 'agenda' | 'emploi'>('moyennes');

  // État local des notes pour la version Web
  const [grades, setGrades] = useState<{ [id: string]: number }>({
    svt: 15.5,
    maths: 14.0,
    pc: 15.0,
    fr: 13.5,
    philo: 13.0,
    anglais: 16.0,
    hg: 14.5,
    eps: 16.5,
    lv2: 14.0,
  });

  // Liste de devoirs interactive
  const [homeworks, setHomeworks] = useState<HomeworkItem[]>([
    {
      id: '1',
      subject: 'Mathématiques',
      title: 'Devoir surveillé : Étude de fonctions et primitives',
      dueDate: 'Jeudi à 08h00',
      done: false,
    },
    {
      id: '2',
      subject: 'SVT',
      title: 'Schéma de synthèse sur la transmission du message nerveux',
      dueDate: 'Vendredi à 10h15',
      done: false,
    },
    {
      id: '3',
      subject: 'Philosophie',
      title: 'Plan détaillé dissertation sur la Vérité et la Science',
      dueDate: 'Lundi prochain',
      done: true,
    },
  ]);

  const [newHwSubject, setNewHwSubject] = useState('Mathématiques');
  const [newHwTitle, setNewHwTitle] = useState('');
  const [newHwDate, setNewHwDate] = useState('');

  const handleAddHomework = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newHwTitle.trim()) return;
    const newItem: HomeworkItem = {
      id: Date.now().toString(),
      subject: newHwSubject,
      title: newHwTitle,
      dueDate: newHwDate || 'Échéance proche',
      done: false,
    };
    setHomeworks([newItem, ...homeworks]);
    setNewHwTitle('');
    setNewHwDate('');
  };

  const toggleHomework = (id: string) => {
    setHomeworks(
      homeworks.map((h) => (h.id === id ? { ...h, done: !h.done } : h))
    );
  };

  const deleteHomework = (id: string) => {
    setHomeworks(homeworks.filter((h) => h.id !== id));
  };

  // Calcul moyenne
  let totalPts = 0;
  let totalCoeffs = 0;
  APP_CONFIG.subjects.forEach((s) => {
    const g = grades[s.id] ?? 10;
    totalPts += g * s.coefficient;
    totalCoeffs += s.coefficient;
  });
  const avg = totalCoeffs > 0 ? (totalPts / totalCoeffs).toFixed(2) : '0.00';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col h-[90vh] max-h-[850px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Barre supérieure style navigateur / Web App */}
        <div className="bg-[#0B1F5B] text-white px-4 sm:px-6 py-3 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <div className="h-4 w-[1px] bg-white/20 mx-1" />
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#38BDF8]" />
              <span className="text-xs font-bold text-white tracking-wide">
                Terminale D • Version Web Officielle
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onDownloadApk}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Installer sur Android</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Sous-en-tête avec onglets */}
        <div className="bg-slate-50 border-b border-slate-200 px-4 sm:px-6 py-2.5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('moyennes')}
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'moyennes'
                  ? 'bg-[#0B1F5B] text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-200/70'
              }`}
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Calcul des Moyennes</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('agenda')}
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'agenda'
                  ? 'bg-[#0B1F5B] text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-200/70'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Agenda & Devoirs</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('emploi')}
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'emploi'
                  ? 'bg-[#0B1F5B] text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-200/70'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>Emploi du temps</span>
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs">
            <span className="text-slate-500 font-medium">Moyenne simulée :</span>
            <span className="font-extrabold text-[#2563EB] bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
              {avg} / 20
            </span>
          </div>
        </div>

        {/* Contenu principal de l'application Web */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-white">
          
          {/* VUE MOYENNES */}
          {activeTab === 'moyennes' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-[#0B1F5B] to-[#2563EB] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-md">
                <div>
                  <span className="text-xs text-sky-200 uppercase tracking-wider font-semibold">
                    Synthèse Trimestrielle • Terminale D
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-4xl font-black">{avg}</span>
                    <span className="text-sm text-sky-200">/ 20</span>
                  </div>
                </div>
                <div className="text-left sm:text-right">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white text-[#0B1F5B] shadow-sm">
                    {parseFloat(avg) >= 14 ? 'Mention Bien' : parseFloat(avg) >= 12 ? 'Mention Assez Bien' : 'Admis'}
                  </span>
                  <p className="text-[11px] text-sky-100 mt-1">Total : {totalCoeffs} coefficients</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {APP_CONFIG.subjects.map((sub) => {
                  const val = grades[sub.id] ?? 12;
                  return (
                    <div key={sub.id} className="p-3.5 rounded-2xl border border-slate-200 bg-slate-50/60 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs text-slate-900">{sub.name}</span>
                        <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-white border border-slate-200 text-slate-700">
                          Coeff {sub.coefficient}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <input
                          type="range"
                          min="0"
                          max="20"
                          step="0.5"
                          value={val}
                          onChange={(e) =>
                            setGrades({ ...grades, [sub.id]: parseFloat(e.target.value) })
                          }
                          className="flex-1 accent-[#2563EB]"
                        />
                        <span className="font-black text-xs text-[#0B1F5B] w-12 text-right">
                          {val.toFixed(1)}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* VUE AGENDA & DEVOIRS */}
          {activeTab === 'agenda' && (
            <div className="space-y-6">
              {/* Formulaire d'ajout rapide */}
              <form onSubmit={handleAddHomework} className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-3">
                <span className="font-bold text-xs text-[#0B1F5B] block">
                  Ajouter un devoir ou une interrogation
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <select
                    value={newHwSubject}
                    onChange={(e) => setNewHwSubject(e.target.value)}
                    className="px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs font-medium"
                  >
                    {APP_CONFIG.subjects.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name} (Coeff {s.coefficient})
                      </option>
                    ))}
                  </select>

                  <input
                    type="text"
                    placeholder="Intitulé du devoir ou de l'épreuve..."
                    value={newHwTitle}
                    onChange={(e) => setNewHwTitle(e.target.value)}
                    className="px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs font-medium"
                  />

                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Échéance (ex: Vendredi 14h)"
                      value={newHwDate}
                      onChange={(e) => setNewHwDate(e.target.value)}
                      className="flex-1 px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs font-medium"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-xl text-xs font-bold flex items-center justify-center shrink-0 cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </form>

              {/* Liste des devoirs */}
              <div className="space-y-2.5">
                {homeworks.map((hw) => (
                  <div
                    key={hw.id}
                    className={`p-3.5 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
                      hw.done
                        ? 'bg-slate-50 border-slate-200 opacity-60'
                        : 'bg-white border-slate-200 shadow-xs'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => toggleHomework(hw.id)}
                        className={`w-5 h-5 rounded-md flex items-center justify-center transition-colors cursor-pointer ${
                          hw.done
                            ? 'bg-emerald-500 text-white'
                            : 'border-2 border-slate-300 hover:border-[#2563EB]'
                        }`}
                      >
                        {hw.done && <CheckCircle className="w-3.5 h-3.5" />}
                      </button>
                      <div>
                        <span className="text-[10px] font-bold text-[#2563EB] uppercase tracking-wider block">
                          {hw.subject}
                        </span>
                        <p className={`text-xs font-bold text-slate-800 ${hw.done ? 'line-through text-slate-400' : ''}`}>
                          {hw.title}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        {hw.dueDate}
                      </span>
                      <button
                        type="button"
                        onClick={() => deleteHomework(hw.id)}
                        className="text-slate-400 hover:text-rose-500 p-1 cursor-pointer"
                        title="Supprimer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* VUE EMPLOI DU TEMPS */}
          {activeTab === 'emploi' && (
            <div className="space-y-4">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                <span>Planning officiel de la classe de Terminale D</span>
                <span className="font-bold text-[#2563EB]">Série Scientifique</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl border border-slate-200 bg-white space-y-3">
                  <div className="font-bold text-xs text-[#0B1F5B] pb-2 border-b border-slate-100">
                    Lundi
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="p-2 bg-blue-50/70 rounded-lg">
                      <span className="text-[10px] text-blue-700 font-bold">08:00 - 10:00</span>
                      <p className="font-bold text-slate-900">Mathématiques</p>
                      <p className="text-[10px] text-slate-500">Salle 14 • M. N'Guessan</p>
                    </div>
                    <div className="p-2 bg-emerald-50/70 rounded-lg">
                      <span className="text-[10px] text-emerald-700 font-bold">10:15 - 12:15</span>
                      <p className="font-bold text-slate-900">SVT</p>
                      <p className="text-[10px] text-slate-500">Labo 2 • Mme Touré</p>
                    </div>
                    <div className="p-2 bg-purple-50/70 rounded-lg">
                      <span className="text-[10px] text-purple-700 font-bold">14:00 - 16:00</span>
                      <p className="font-bold text-slate-900">Physique - Chimie</p>
                      <p className="text-[10px] text-slate-500">Labo Chimie • M. Bamba</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl border border-slate-200 bg-white space-y-3">
                  <div className="font-bold text-xs text-[#0B1F5B] pb-2 border-b border-slate-100">
                    Mardi
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="p-2 bg-rose-50/70 rounded-lg">
                      <span className="text-[10px] text-rose-700 font-bold">08:00 - 10:00</span>
                      <p className="font-bold text-slate-900">Philosophie</p>
                      <p className="text-[10px] text-slate-500">Salle 14</p>
                    </div>
                    <div className="p-2 bg-blue-50/70 rounded-lg">
                      <span className="text-[10px] text-blue-700 font-bold">10:15 - 12:15</span>
                      <p className="font-bold text-slate-900">Mathématiques</p>
                      <p className="text-[10px] text-slate-500">Salle 14</p>
                    </div>
                    <div className="p-2 bg-sky-50/70 rounded-lg">
                      <span className="text-[10px] text-sky-700 font-bold">14:00 - 16:00</span>
                      <p className="font-bold text-slate-900">Anglais</p>
                      <p className="text-[10px] text-slate-500">Salle 14</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl border border-slate-200 bg-white space-y-3">
                  <div className="font-bold text-xs text-[#0B1F5B] pb-2 border-b border-slate-100">
                    Mercredi
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="p-2 bg-emerald-50/70 rounded-lg">
                      <span className="text-[10px] text-emerald-700 font-bold">08:00 - 10:00</span>
                      <p className="font-bold text-slate-900">SVT (Travaux Pratiques)</p>
                      <p className="text-[10px] text-slate-500">Labo 2</p>
                    </div>
                    <div className="p-2 bg-purple-50/70 rounded-lg">
                      <span className="text-[10px] text-purple-700 font-bold">10:15 - 12:15</span>
                      <p className="font-bold text-slate-900">Physique - Chimie (TP)</p>
                      <p className="text-[10px] text-slate-500">Labo Chimie</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer Web App */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-3 flex items-center justify-between text-xs text-slate-500 shrink-0">
          <span>Application scolaire Terminale D • Session Web active</span>
          <button
            type="button"
            onClick={onClose}
            className="font-bold text-[#0B1F5B] hover:underline"
          >
            Fermer l'aperçu
          </button>
        </div>
      </div>
    </div>
  );
};
