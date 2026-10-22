import React, { useState } from 'react';
import { 
  Calculator, 
  Calendar, 
  Clock, 
  LayoutDashboard, 
  Sparkles, 
  ChevronRight,
  TrendingUp,
  CheckCircle,
  Award,
  Bell,
  BookOpen
} from 'lucide-react';

export const ScreenshotsGallery: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<'dashboard' | 'moyennes' | 'agenda' | 'emploi'>('dashboard');

  const screenConfigs = [
    {
      id: 'dashboard',
      label: 'Tableau de bord',
      icon: LayoutDashboard,
      description: 'Vue panoramique sur la moyenne générale, le rang de classe, le prochain cours et les devoirs prioritaires de la semaine.',
    },
    {
      id: 'moyennes',
      label: 'Calcul des moyennes',
      icon: Calculator,
      description: 'Récapitulatif par matière avec application instantanée des coefficients de Terminale D et simulation de la mention.',
    },
    {
      id: 'agenda',
      label: 'Agenda & Devoirs',
      icon: Calendar,
      description: 'Calendrier des interrogations, devoirs surveillés et compositions avec rappels configurables pour chaque épreuve.',
    },
    {
      id: 'emploi',
      label: 'Emploi du temps',
      icon: Clock,
      description: 'Planning hebdomadaire détaillé avec salles de cours, enseignants et notifications en cas de changement.',
    },
  ];

  return (
    <section id="apercu" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Titre */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-bold tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interface Mobile Épurée & Intuitive</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F5B] tracking-tight">
            Aperçus réalistes des écrans de l'application
          </h2>

          <p className="text-base text-slate-600">
            Une interface scolaire moderne, pensée pour offrir une lisibilité optimale sur smartphone même en plein soleil dans la cour du lycée.
          </p>
        </div>

        {/* Boutons sélecteurs d'écrans */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {screenConfigs.map((screen) => {
            const Icon = screen.icon;
            const isActive = activeScreen === screen.id;
            return (
              <button
                key={screen.id}
                type="button"
                onClick={() => setActiveScreen(screen.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#0B1F5B] text-white shadow-md glow-blue scale-105'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#38BDF8]' : 'text-slate-500'}`} />
                <span>{screen.label}</span>
              </button>
            );
          })}
        </div>

        {/* Présentation de l'écran sélectionné dans un smartphone moderne */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Colonne d'explication de l'écran */}
          <div className="lg:col-span-6 space-y-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563EB] bg-blue-50 px-3 py-1 rounded-lg">
              <span>Écran n° {screenConfigs.findIndex(s => s.id === activeScreen) + 1} sur {screenConfigs.length}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F5B]">
              {screenConfigs.find(s => s.id === activeScreen)?.label}
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {screenConfigs.find(s => s.id === activeScreen)?.description}
            </p>

            <div className="space-y-3 pt-2 text-left">
              {activeScreen === 'dashboard' && (
                <>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Calcul en temps réel de la moyenne générale du trimestre.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Statut visuel sur les compositions et épreuves de la semaine.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Rappel des consignes et annonces importantes du délégué.</span>
                  </div>
                </>
              )}

              {activeScreen === 'moyennes' && (
                <>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Coefficients configurés : SVT (4), Maths (4), PC (4), Philo (2), etc.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Distinction claire entre notes d'interrogations et devoirs surveillés.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Barre de mention prévisionnelle au Baccalauréat.</span>
                  </div>
                </>
              )}

              {activeScreen === 'agenda' && (
                <>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Enregistrement rapide des interrogations et devoirs de maison.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Priorisation intelligente par date d'échéance et coefficient.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Possibilité de marquer une tâche comme terminée en un clic.</span>
                  </div>
                </>
              )}

              {activeScreen === 'emploi' && (
                <>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Vue nette par jour : lundi au samedi matin.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Affichage des salles (Labo Chimie, Salle 14, Gymnase).</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Consultation 100% hors-ligne en cours de journée.</span>
                  </div>
                </>
              )}
            </div>

            <div className="pt-3">
              <a
                href="#telechargement"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#2563EB] hover:text-[#0B1F5B] transition-colors"
              >
                <span>Télécharger la version Android complète</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Colonne du Smartphone avec l'écran sélectionné */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-[300px] sm:w-[320px] rounded-[40px] bg-[#0B1F5B] p-2.5 shadow-2xl border-4 border-slate-700/60 ring-1 ring-white/20">
              
              <div className="bg-[#F8FAFC] rounded-[32px] overflow-hidden flex flex-col h-[520px] text-xs">
                {/* Header mobile */}
                <div className="bg-[#0B1F5B] text-white p-3.5">
                  <div className="flex justify-between items-center text-[10px] text-slate-300 mb-2">
                    <span>09:41</span>
                    <span className="font-bold text-[#38BDF8]">Terminale D App</span>
                    <span>100%</span>
                  </div>
                  <div className="text-xs font-black text-white flex items-center justify-between">
                    <span>{screenConfigs.find(s => s.id === activeScreen)?.label}</span>
                    <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded font-normal">2026-2027</span>
                  </div>
                </div>

                {/* Contenu spécifique de l'écran */}
                <div className="flex-1 p-3.5 space-y-3 overflow-y-auto bg-slate-50 text-left">
                  {activeScreen === 'dashboard' && (
                    <div className="space-y-3">
                      <div className="p-3 bg-gradient-to-r from-[#0B1F5B] to-[#2563EB] text-white rounded-2xl shadow-sm">
                        <span className="text-[10px] text-sky-200">Moyenne Globale</span>
                        <div className="text-2xl font-black mt-0.5">15.22 / 20</div>
                        <span className="inline-block mt-1 text-[9px] bg-emerald-500 text-white font-bold px-2 py-0.5 rounded-full">
                          Mention Bien
                        </span>
                      </div>
                      
                      <div className="p-2.5 bg-white rounded-xl border border-slate-200">
                        <p className="text-[10px] text-slate-500 font-semibold">Prochain cours</p>
                        <p className="font-bold text-slate-800 text-[11px]">SVT : Génétique & Méiose</p>
                        <p className="text-[9px] text-[#2563EB]">10h15 - Salle Labo 2</p>
                      </div>

                      <div className="p-2.5 bg-white rounded-xl border border-slate-200">
                        <p className="text-[10px] text-slate-500 font-semibold">Alerte Devoir</p>
                        <p className="font-bold text-slate-800 text-[11px]">Interro Maths : Dérivées</p>
                        <p className="text-[9px] text-rose-600 font-bold">Demain 08h00</p>
                      </div>
                    </div>
                  )}

                  {activeScreen === 'moyennes' && (
                    <div className="space-y-2">
                      <div className="p-2 bg-white rounded-xl border border-slate-200 flex justify-between items-center">
                        <div>
                          <p className="font-bold text-slate-800 text-[11px]">SVT (Coeff 4)</p>
                          <p className="text-[9px] text-slate-500">2 interrogations + 1 devoir</p>
                        </div>
                        <span className="font-black text-[#0B1F5B] text-xs bg-slate-100 px-2 py-1 rounded">16.0 / 20</span>
                      </div>

                      <div className="p-2 bg-white rounded-xl border border-slate-200 flex justify-between items-center">
                        <div>
                          <p className="font-bold text-slate-800 text-[11px]">Mathématiques (Coeff 4)</p>
                          <p className="text-[9px] text-slate-500">1 interrogation + 1 devoir</p>
                        </div>
                        <span className="font-black text-[#0B1F5B] text-xs bg-slate-100 px-2 py-1 rounded">14.5 / 20</span>
                      </div>

                      <div className="p-2 bg-white rounded-xl border border-slate-200 flex justify-between items-center">
                        <div>
                          <p className="font-bold text-slate-800 text-[11px]">Physique - Chimie (Coeff 4)</p>
                          <p className="text-[9px] text-slate-500">2 devoirs surveillés</p>
                        </div>
                        <span className="font-black text-[#0B1F5B] text-xs bg-slate-100 px-2 py-1 rounded">15.0 / 20</span>
                      </div>

                      <div className="p-2 bg-white rounded-xl border border-slate-200 flex justify-between items-center">
                        <div>
                          <p className="font-bold text-slate-800 text-[11px]">Philosophie (Coeff 2)</p>
                          <p className="text-[9px] text-slate-500">1 dissertation</p>
                        </div>
                        <span className="font-black text-[#0B1F5B] text-xs bg-slate-100 px-2 py-1 rounded">13.0 / 20</span>
                      </div>
                    </div>
                  )}

                  {activeScreen === 'agenda' && (
                    <div className="space-y-2">
                      <div className="p-2.5 bg-white border-l-4 border-l-rose-500 rounded-xl border border-slate-200">
                        <span className="text-[9px] font-bold text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded">Urgent</span>
                        <p className="font-bold text-slate-800 text-[11px] mt-1">Devoir surveillé de Mathématiques</p>
                        <p className="text-[9px] text-slate-500">Jeudi à 08h00 • Coeff 4</p>
                      </div>

                      <div className="p-2.5 bg-white border-l-4 border-l-amber-500 rounded-xl border border-slate-200">
                        <span className="text-[9px] font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded">Devoir maison</span>
                        <p className="font-bold text-slate-800 text-[11px] mt-1">Dissertation de Philosophie</p>
                        <p className="text-[9px] text-slate-500">À rendre vendredi</p>
                      </div>

                      <div className="p-2.5 bg-white border-l-4 border-l-blue-500 rounded-xl border border-slate-200">
                        <span className="text-[9px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">Interro</span>
                        <p className="font-bold text-slate-800 text-[11px] mt-1">Interrogation de Physique-Chimie</p>
                        <p className="text-[9px] text-slate-500">Lundi prochain</p>
                      </div>
                    </div>
                  )}

                  {activeScreen === 'emploi' && (
                    <div className="space-y-2">
                      <div className="p-2 bg-white rounded-xl border border-slate-200">
                        <div className="flex justify-between text-[10px] text-slate-500">
                          <span>08h00 - 10h00</span>
                          <span className="text-blue-600 font-bold">Salle 14</span>
                        </div>
                        <p className="font-bold text-slate-800 text-[11px]">Mathématiques (M. N'Guessan)</p>
                      </div>

                      <div className="p-2 bg-white rounded-xl border border-slate-200">
                        <div className="flex justify-between text-[10px] text-slate-500">
                          <span>10h15 - 12h15</span>
                          <span className="text-emerald-600 font-bold">Labo SVT</span>
                        </div>
                        <p className="font-bold text-slate-800 text-[11px]">SVT (Mme Touré)</p>
                      </div>

                      <div className="p-2 bg-white rounded-xl border border-slate-200">
                        <div className="flex justify-between text-[10px] text-slate-500">
                          <span>14h00 - 16h00</span>
                          <span className="text-purple-600 font-bold">Labo Chimie</span>
                        </div>
                        <p className="font-bold text-slate-800 text-[11px]">Physique-Chimie (M. Bamba)</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer simulation */}
                <div className="bg-white border-t border-slate-200 p-2 text-center text-[9px] text-slate-400">
                  Terminale D Mobile • Version 1.2
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
