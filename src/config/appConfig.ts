/**
 * Configuration officielle de l'application scolaire Terminale D
 * Modifiable facilement pour mettre à jour les liens de distribution,
 * les numéros de version, les dates de parution et les statuts.
 */

export interface SubjectConfig {
  id: string;
  name: string;
  code: string;
  coefficient: number;
  color: string;
  bgLight: string;
  teacher?: string;
  defaultGrade?: number;
}

export interface AppReleaseInfo {
  version: string;
  releaseDate: string;
  apkSize: string;
  minAndroidVersion: string;
  apkDownloadUrl: string; // Lien direct vers l'APK
  isApkAvailable: boolean;
  webAppUrl: string; // URL de la version Web
  isWebAppAvailable: boolean;
  iosVersion: string;
  isIosAvailable: boolean;
  iosAppStoreUrl: string;
  iosStatusText: string;
  changelog: {
    version: string;
    date: string;
    highlights: string[];
  }[];
}

export const APP_CONFIG = {
  appName: "Terminale D",
  tagline: "Terminale D — Ensemble vers l'avenir",
  shortDescription: "Toutes les informations essentielles de ta vie scolaire réunies dans une seule application.",
  fullDescription: "Conçue spécialement pour les élèves de Terminale D, cette application réunit le calcul précis des moyennes avec les coefficients officiels, l'agenda intelligent des devoirs et interrogations, l'emploi du temps et les annonces de classe pour réussir ton année et préparer le Baccalauréat en toute sérénité.",
  
  // Couleurs de la charte
  colors: {
    sky: "#38BDF8",
    royal: "#2563EB",
    navy: "#0B1F5B",
    navyDark: "#07143D",
    white: "#FFFFFF",
    lightBg: "#F8FAFC",
  },

  // Informations de distribution
  release: {
    version: "v1.2.0",
    releaseDate: "15 Octobre 2026",
    apkSize: "20.3 Mo",
    minAndroidVersion: "Android 7.0 (Nougat) ou version ultérieure",
    // Lien direct vers le fichier APK réel
    apkDownloadUrl: "/Terminal-D.apk",
    isApkAvailable: true,
    webAppUrl: "#webapp-demo",
    isWebAppAvailable: true,
    iosVersion: "v1.2.0",
    isIosAvailable: true,
    iosAppStoreUrl: "https://terminal-d-jra3.vercel.app/",
    iosStatusText: "Disponible pour iPhone & iPad",
    changelog: [
      {
        version: "v1.2.0",
        date: "Octobre 2026",
        highlights: [
          "Mise à jour des coefficients officiels de Terminale D",
          "Calcul prévisionnel des mentions au Baccalauréat",
          "Rappels automatiques 24h avant chaque devoir sur table",
          "Gestion optimisée de l'emploi du temps hors-connexion",
        ],
      },
      {
        version: "v1.1.0",
        date: "Septembre 2026",
        highlights: [
          "Ajout du carnet d'interrogations et compositions",
          "Calcul automatique de la moyenne par période (Trimestre & Semestre)",
          "Interface adaptée aux écrans haute résolution",
        ],
      },
      {
        version: "v1.0.0",
        date: "Rentrée 2026",
        highlights: [
          "Lancement initial pour la promotion Terminale D",
          "Gestion des devoirs et emplois du temps",
        ],
      },
    ],
  } as AppReleaseInfo,

  // Matières et coefficients officiels de Terminale D
  subjects: [
    {
      id: "svt",
      name: "Sciences de la Vie et de la Terre",
      code: "SVT",
      coefficient: 4,
      color: "#059669",
      bgLight: "#ECFDF5",
      defaultGrade: 15.5,
    },
    {
      id: "maths",
      name: "Mathématiques",
      code: "MATHS",
      coefficient: 4,
      color: "#2563EB",
      bgLight: "#EFF6FF",
      defaultGrade: 14.0,
    },
    {
      id: "pc",
      name: "Physique - Chimie",
      code: "PC",
      coefficient: 4,
      color: "#7C3AED",
      bgLight: "#F5F3FF",
      defaultGrade: 15.0,
    },
    {
      id: "fr",
      name: "Français",
      code: "FRANÇAIS",
      coefficient: 2,
      color: "#D97706",
      bgLight: "#FFFBEB",
      defaultGrade: 13.5,
    },
    {
      id: "philo",
      name: "Philosophie",
      code: "PHILO",
      coefficient: 2,
      color: "#DC2626",
      bgLight: "#FEF2F2",
      defaultGrade: 13.0,
    },
    {
      id: "anglais",
      name: "Anglais",
      code: "ANGLAIS",
      coefficient: 2,
      color: "#0284C7",
      bgLight: "#F0F9FF",
      defaultGrade: 16.0,
    },
    {
      id: "hg",
      name: "Histoire - Géographie",
      code: "HIST-GÉO",
      coefficient: 2,
      color: "#4F46E5",
      bgLight: "#EEF2FF",
      defaultGrade: 14.5,
    },
    {
      id: "eps",
      name: "Éducation Physique et Sportive",
      code: "EPS",
      coefficient: 1,
      color: "#16A34A",
      bgLight: "#F0FDF4",
      defaultGrade: 16.5,
    },
    {
      id: "lv2",
      name: "Langue Vivante 2 / Option",
      code: "LV2",
      coefficient: 1,
      color: "#9333EA",
      bgLight: "#FAF5FF",
      defaultGrade: 14.0,
    },
  ] as SubjectConfig[],

  // Caractéristiques de confiance & sécurité
  securityFeatures: [
    {
      title: "Confidentialité totale des notes",
      description: "Les notes et évaluations saisies restent strictement privées. Aucun camarade ne peut consulter tes résultats sans ton autorisation expresse.",
    },
    {
      title: "Fonctionnement hors-ligne",
      description: "Accède à ton emploi du temps, tes moyennes et tes devoirs même en l'absence de réseau internet dans la cour ou en classe.",
    },
    {
      title: "Sauvegarde locale & sécurisée",
      description: "Les calculs sont effectués en local sur ton appareil avec une structure conçue pour préserver l'intégrité de tes données.",
    },
    {
      title: "Aucune publicité intrusive",
      description: "L'application est 100% pensée pour l'étude et la concentration, sans bannières publicitaires ni distractions.",
    },
  ],
};
