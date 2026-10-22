import React, { useState } from 'react';
import { APP_CONFIG, SubjectConfig } from '../config/appConfig';
import { Calculator, Award, RotateCcw, TrendingUp, Sparkles, CheckCircle2, Info } from 'lucide-react';

export const GradeCalculatorLive: React.FC = () => {
  // Initialisation avec les matières officielles de Terminale D
  const [grades, setGrades] = useState<{ [id: string]: number }>(() => {
    const initial: { [id: string]: number } = {};
    APP_CONFIG.subjects.forEach((s) => {
      initial[s.id] = s.defaultGrade || 13;
    });
    return initial;
  });

  const handleGradeChange = (id: string, val: number) => {
    const clamped = Math.min(20, Math.max(0, val));
    setGrades((prev) => ({ ...prev, [id]: clamped }));
  };

  const handleReset = () => {
    const resetValues: { [id: string]: number } = {};
    APP_CONFIG.subjects.forEach((s) => {
      resetValues[s.id] = s.defaultGrade || 13;
    });
    setGrades(resetValues);
  };

  // Calcul des totaux
  let totalPoints = 0;
  let totalCoefficients = 0;
  let sciencePoints = 0;
  let scienceCoeffs = 0;

  APP_CONFIG.subjects.forEach((sub) => {
    const g = grades[sub.id] ?? 10;
    totalPoints += g * sub.coefficient;
    totalCoefficients += sub.coefficient;

    if (['svt', 'maths', 'pc'].includes(sub.id)) {
      sciencePoints += g * sub.coefficient;
      scienceCoeffs += sub.coefficient;
    }
  });

  const average = totalCoefficients > 0 ? (totalPoints / totalCoefficients).toFixed(2) : '0.00';
  const numericAverage = parseFloat(average);
  const scienceAverage = scienceCoeffs > 0 ? (sciencePoints / scienceCoeffs).toFixed(2) : '0.00';

  const getMentionData = (avg: number) => {
    if (avg >= 16) {
      return {
        mention: 'Très Bien',
        badge: 'bg-emerald-600 text-white',
        message: 'Excellente trajectoire ! Félicitations pour ce niveau remarquable.',
        textColor: 'text-emerald-700',
      };
    }
    if (avg >= 14) {
      return {
        mention: 'Mention Bien',
        badge: 'bg-[#2563EB] text-white',
        message: 'Très bon niveau scientifique. La mention Bien est sécurisée !',
        textColor: 'text-[#2563EB]',
      };
    }
    if (avg >= 12) {
      return {
        mention: 'Mention Assez Bien',
        badge: 'bg-[#38BDF8] text-[#0B1F5B]',
        message: 'Bonne moyenne. Quelques points en maths ou SVT peuvent te propulser vers la mention Bien !',
        textColor: 'text-sky-700',
      };
    }
    if (avg >= 10) {
      return {
        mention: 'Admis (Passable)',
        badge: 'bg-amber-500 text-white',
        message: 'Baccalauréat validé. Poursuis tes efforts pour viser une mention.',
        textColor: 'text-amber-700',
      };
    }
    return {
      mention: 'Effort requis (< 10/20)',
      badge: 'bg-rose-500 text-white',
      message: 'Attention aux matières scientifiques à fort coefficient (SVT, Maths, PC). Révise régulièrement.',
      textColor: 'text-rose-600',
    };
  };

  const status = getMentionData(numericAverage);

  return (
    <section id="simulateur" className="py-20 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Titre & Description */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-[#0B1F5B] text-xs font-bold tracking-wide">
            <Calculator className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>Simulateur en Direct • Programme Terminale D</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F5B] tracking-tight">
            Teste le calcul officiel des moyennes Terminale D
          </h2>

          <p className="text-sm sm:text-base text-slate-600">
            Ajuste les curseurs de notes selon tes résultats actuels. L'algorithme applique fidèlement la pondération des coefficients officiels (Total : {totalCoefficients} coefficients).
          </p>
        </div>

        {/* Grille du simulateur */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Colonne de saisie des matières (8 cols) */}
          <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                Matières du Baccalauréat Série D
              </span>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#2563EB] transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Réinitialiser
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {APP_CONFIG.subjects.map((subject) => {
                const currentGrade = grades[subject.id] ?? 10;
                const isDominant = ['svt', 'maths', 'pc'].includes(subject.id);

                return (
                  <div
                    key={subject.id}
                    className={`p-3.5 rounded-2xl border transition-all ${
                      isDominant
                        ? 'border-blue-200/90 bg-blue-50/30'
                        : 'border-slate-200 bg-[#F8FAFC]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: subject.color }}
                        />
                        <span className="font-bold text-xs sm:text-sm text-slate-800">
                          {subject.name}
                        </span>
                      </div>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-600">
                        Coeff {subject.coefficient}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 mt-2">
                      <input
                        type="range"
                        min="0"
                        max="20"
                        step="0.5"
                        value={currentGrade}
                        onChange={(e) => handleGradeChange(subject.id, parseFloat(e.target.value))}
                        className="flex-1 accent-[#2563EB] cursor-pointer"
                      />
                      <div className="w-14 text-right">
                        <span className="font-extrabold text-sm text-[#0B1F5B] bg-white px-2 py-1 rounded-lg border border-slate-200 shadow-xs inline-block">
                          {currentGrade.toFixed(1)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-3 bg-slate-50 rounded-xl text-slate-500 text-xs flex items-center gap-2">
              <Info className="w-4 h-4 text-[#2563EB] shrink-0" />
              <span>
                Les 3 matières dominantes (SVT, Maths, PC) représentent 12 coefficients, soit la moitié du total de l'examen.
              </span>
            </div>
          </div>

          {/* Colonne de synthèse des résultats (4 cols) */}
          <div className="lg:col-span-4 space-y-5 lg:sticky lg:top-28">
            
            {/* Carte Résultat Principal */}
            <div className="rounded-3xl bg-gradient-to-br from-[#0B1F5B] via-[#1E3A8A] to-[#2563EB] text-white p-6 sm:p-7 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
              
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-wider text-sky-200 font-semibold">
                  Moyenne Générale
                </span>
                <span className={`text-xs font-black px-2.5 py-1 rounded-full shadow-sm ${status.badge}`}>
                  {status.mention}
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl font-black tracking-tight">{average}</span>
                <span className="text-sm text-sky-200 font-semibold">/ 20</span>
              </div>

              {/* Barre de jauge */}
              <div className="w-full bg-black/30 h-2.5 rounded-full overflow-hidden p-0.5 mb-4">
                <div
                  className="bg-gradient-to-r from-[#38BDF8] to-emerald-400 h-full rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(100, (numericAverage / 20) * 100)}%` }}
                />
              </div>

              <p className="text-xs text-sky-100 leading-relaxed bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                {status.message}
              </p>

              <div className="mt-5 pt-4 border-t border-white/15 grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-sky-300 text-[10px] block font-semibold">Total Points Bac</span>
                  <span className="font-extrabold text-base text-white">{totalPoints.toFixed(1)} / {totalCoefficients * 20}</span>
                </div>
                <div>
                  <span className="text-sky-300 text-[10px] block font-semibold">Pôle Sciences (SVT/Maths/PC)</span>
                  <span className="font-extrabold text-base text-white">{scienceAverage} / 20</span>
                </div>
              </div>
            </div>

            {/* Carte incitative pour l'application */}
            <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm text-center space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#2563EB] mx-auto flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-[#0B1F5B]">
                Sauvegarde tes notes dans l'application
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                L'application Terminale D calcule automatiquement tes moyennes après chaque interrogation ou devoir surveillé, et suit ton historique trimestre par trimestre.
              </p>
              <a
                href="#telechargement"
                className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-[#0B1F5B] hover:bg-[#2563EB] transition-colors"
              >
                Télécharger l'application complète
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
