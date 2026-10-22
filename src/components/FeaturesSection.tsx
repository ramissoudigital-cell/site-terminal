import React from 'react';
import { 
  Calculator, 
  CalendarClock, 
  Clock, 
  LineChart, 
  CheckSquare, 
  Megaphone,
  ArrowRight,
  TrendingUp,
  BookmarkCheck,
  Shield,
  Layers,
  Sparkles
} from 'lucide-react';

interface FeaturesSectionProps {
  onExploreCalculator: () => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onExploreCalculator }) => {
  const features = [
    {
      id: 'moyennes',
      icon: Calculator,
      title: 'Calcul automatique des moyennes',
      subtitle: 'Précision mathématique avec coefficients de la série D',
      description: 'Calcul instantané des moyennes par matière et de la moyenne générale selon les coefficients officiels configurés (SVT Coeff 4, Maths Coeff 4, PC Coeff 4, etc.). Évite les erreurs manuelles et prévois ta mention au Bac.',
      accentColor: 'from-blue-600 to-[#0B1F5B]',
      badgeColor: 'bg-blue-50 text-[#2563EB] border-blue-200',
      tag: 'Coefficients Officiels',
      demoComponent: (
        <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-xs space-y-2">
          <div className="flex justify-between items-center font-bold text-slate-800">
            <span>SVT (Coeff 4) : 16.0 • Maths (Coeff 4) : 14.5</span>
          </div>
          <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-[#38BDF8] to-[#2563EB] h-full rounded-full" style={{ width: '76%' }} />
          </div>
          <div className="flex justify-between text-[11px] text-slate-500">
            <span>Moyenne Générale : <strong className="text-[#0B1F5B]">15.22 / 20</strong></span>
            <span className="text-emerald-600 font-bold">Mention Bien</span>
          </div>
        </div>
      ),
    },
    {
      id: 'agenda',
      icon: CalendarClock,
      title: 'Agenda scolaire intelligent',
      subtitle: 'Zéro imprévu pour les épreuves capitales',
      description: 'Enregistre les interrogations écrites, devoirs surveillés et compositions. Reçois des rappels ciblés pour planifier ton calendrier de révisions en avance et ne plus être pris de court.',
      accentColor: 'from-[#38BDF8] to-[#2563EB]',
      badgeColor: 'bg-sky-50 text-sky-700 border-sky-200',
      tag: 'Rappels & Révisions',
      demoComponent: (
        <div className="mt-4 space-y-2">
          <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-xs flex items-center justify-between">
            <span className="font-bold text-slate-800">Composition Physique : Jeudi</span>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500 text-white">Dans 3 jours</span>
          </div>
          <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-xs flex items-center justify-between">
            <span className="font-bold text-slate-800">Interro SVT Génétique : Lundi</span>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-600 text-white">Rappel actif</span>
          </div>
        </div>
      ),
    },
    {
      id: 'emploi-du-temps',
      icon: Clock,
      title: 'Emploi du temps dynamique',
      subtitle: 'Toujours à portée de main, même sans connexion',
      description: 'Consulte l’emploi du temps officiel de ta classe avec les salles et les créneaux horaires. Intègre facilement les modifications validées (cours déplacé, rattrapage ou professeur absent).',
      accentColor: 'from-purple-600 to-[#0B1F5B]',
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      tag: 'Salles & Horaires',
      demoComponent: (
        <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
          <div className="p-2 bg-slate-50 border border-slate-200 rounded-lg">
            <p className="text-[10px] text-slate-500 font-semibold">08:00 - 10:00</p>
            <p className="font-bold text-slate-800">Mathématiques</p>
            <p className="text-[10px] text-blue-600 font-medium">Salle 14</p>
          </div>
          <div className="p-2 bg-slate-50 border border-slate-200 rounded-lg">
            <p className="text-[10px] text-slate-500 font-semibold">10:15 - 12:15</p>
            <p className="font-bold text-slate-800">SVT (Labo)</p>
            <p className="text-[10px] text-emerald-600 font-medium">Labo 2</p>
          </div>
        </div>
      ),
    },
    {
      id: 'suivi-resultats',
      icon: LineChart,
      title: 'Suivi des résultats',
      subtitle: 'Visualise tes progrès au fil des trimestres',
      description: 'Analyse l’évolution de tes notes et moyennes grâce à des indicateurs clairs. Repère immédiatement tes matières fortes et les disciplines à consolider pour maximiser tes chances au Bac.',
      accentColor: 'from-emerald-600 to-[#0B1F5B]',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      tag: 'Courbe de Progression',
      demoComponent: (
        <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
          <div className="flex justify-between items-center mb-1 text-[11px]">
            <span className="text-slate-500">Progression globale</span>
            <span className="text-emerald-600 font-bold flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +1.2 pts
            </span>
          </div>
          <div className="flex items-end gap-1.5 h-12 pt-2">
            <div className="flex-1 bg-blue-200 rounded-t h-[60%] text-center text-[9px] font-bold text-blue-900 flex items-center justify-center">T1</div>
            <div className="flex-1 bg-blue-400 rounded-t h-[75%] text-center text-[9px] font-bold text-white flex items-center justify-center">T2</div>
            <div className="flex-1 bg-[#2563EB] rounded-t h-[90%] text-center text-[9px] font-bold text-white flex items-center justify-center">T3</div>
          </div>
        </div>
      ),
    },
    {
      id: 'devoirs',
      icon: CheckSquare,
      title: 'Organisation des devoirs',
      subtitle: 'Gestion méthodique des tâches et échéances',
      description: 'Gère l’ensemble de tes devoirs scolaires, travaux pratiques et lectures obligatoires. Coche les devoirs terminés et garde une visibilité nette sur ce qui te reste à accomplir.',
      accentColor: 'from-amber-500 to-[#0B1F5B]',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      tag: 'Gestion des Tâches',
      demoComponent: (
        <div className="mt-4 space-y-1.5 text-xs">
          <div className="p-2 bg-white rounded-lg border border-slate-200 flex items-center gap-2">
            <span className="w-4 h-4 rounded bg-emerald-500 text-white flex items-center justify-center text-[10px]">✓</span>
            <span className="text-slate-500 line-through text-[11px]">DM Chimie : Titrage acido-basique</span>
          </div>
          <div className="p-2 bg-white rounded-lg border border-slate-200 flex items-center gap-2">
            <span className="w-4 h-4 rounded border-2 border-slate-300" />
            <span className="text-slate-800 font-medium text-[11px]">Dissertation Philosophie p. 112</span>
          </div>
        </div>
      ),
    },
    {
      id: 'infos-classe',
      icon: Megaphone,
      title: 'Informations de la classe',
      subtitle: 'Restez tous alignés au sein de la promotion',
      description: 'Accède aux annonces importantes, aux notes de coordination des délégués, aux fiches de révisions partagées et aux consignes transmises pour la classe de Terminale D.',
      accentColor: 'from-indigo-600 to-[#0B1F5B]',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      tag: 'Annonces & Entraide',
      demoComponent: (
        <div className="mt-4 p-2.5 bg-blue-50/70 rounded-xl border border-blue-200 text-xs">
          <div className="flex items-center gap-1.5 text-[#0B1F5B] font-bold text-[11px]">
            <BookmarkCheck className="w-3.5 h-3.5 text-[#2563EB]" />
            Délégué de classe :
          </div>
          <p className="text-[10px] text-slate-600 mt-1 leading-snug">
            Les annales corrigées du Bac D 2020-2025 sont disponibles chez le reprographe du lycée.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section id="fonctionnalites" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-bold tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Conçu spécialement pour la série Terminale D</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F5B] tracking-tight">
            Les outils indispensables pour réussir ton année scolaire
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Chaque fonctionnalité a été pensée selon la réalité du programme de Terminale D : coefficients officiels, rigueur méthodologique et gain de temps quotidien.
          </p>
        </div>

        {/* Grille des 6 fonctionnalités clés */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="group relative rounded-3xl bg-[#F8FAFC] border border-slate-200/90 p-6 flex flex-col justify-between transition-all duration-300 hover:bg-white hover:border-[#38BDF8]/60 glow-card glow-card-hover"
              >
                <div>
                  {/* Icône & Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0B1F5B] to-[#2563EB] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6 text-[#38BDF8]" />
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${feature.badgeColor}`}>
                      {feature.tag}
                    </span>
                  </div>

                  {/* Titres */}
                  <h3 className="text-lg font-extrabold text-[#0B1F5B] tracking-tight group-hover:text-[#2563EB] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    {feature.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Composant interactif d'illustration de la fonctionnalité */}
                <div className="pt-2">
                  {feature.demoComponent}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bannière d'appel à tester le simulateur de moyenne */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-[#0B1F5B] via-[#1E3A8A] to-[#2563EB] p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-black">
              Envie de tester le calcul avec tes propres notes ?
            </h3>
            <p className="text-sm text-sky-200 max-w-xl">
              Utilise notre simulateur interactif de moyenne Terminale D en direct ci-dessous pour tester tes coefficients dès maintenant !
            </p>
          </div>
          <button
            type="button"
            onClick={onExploreCalculator}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-white text-[#0B1F5B] hover:bg-sky-50 shadow-md hover:shadow-lg transition-all cursor-pointer shrink-0"
          >
            <span>Ouvrir le simulateur de notes</span>
            <ArrowRight className="w-4 h-4 text-[#2563EB]" />
          </button>
        </div>

      </div>
    </section>
  );
};
