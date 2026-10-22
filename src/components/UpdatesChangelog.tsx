import React from 'react';
import { APP_CONFIG } from '../config/appConfig';
import { Sparkles, Calendar, CheckCircle2, History, GitCommit } from 'lucide-react';

export const UpdatesChangelog: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="text-center mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#0B1F5B] text-xs font-bold tracking-wide">
            <History className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>Journal des Mises à Jour</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F5B]">
            Nouveautés & Évolutions
          </h2>
          <p className="text-sm text-slate-600">
            L'application s'enrichit continuellement pour répondre aux besoins concrets des élèves tout au long de l'année scolaire.
          </p>
        </div>

        {/* Liste des versions */}
        <div className="space-y-6 relative before:absolute before:inset-0 before:left-5 before:w-0.5 before:bg-slate-200">
          {APP_CONFIG.release.changelog.map((entry, idx) => {
            const isLatest = idx === 0;
            return (
              <div key={entry.version} className="relative flex items-start gap-4 sm:gap-6">
                
                {/* Pastille chronologique */}
                <div
                  className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 z-10 shadow-sm ${
                    isLatest
                      ? 'bg-[#2563EB] text-white ring-4 ring-blue-100'
                      : 'bg-white text-slate-500 border border-slate-200'
                  }`}
                >
                  <GitCommit className="w-5 h-5" />
                </div>

                {/* Carte de version */}
                <div className="flex-1 bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-base font-black text-[#0B1F5B]">
                        Version {entry.version}
                      </span>
                      {isLatest && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-800">
                          Version Actuelle
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {entry.date}
                    </span>
                  </div>

                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                    {entry.highlights.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
