import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      experiences: 'Experiences',
      about: 'About',
      contact: 'Contact',
    },
    home: {
      whatCanIDo: 'What I Do',
      skillsTechnology: 'Skills',
      projectsCompleted: 'My Projects',
      showAllProjects: 'View All',
      hiIm: "Hi, I'm",
      resume: 'Resume',
    },
    projects: {
      title: 'Projects',
      description: 'Some projects I have completed.',
      personal: 'Personal Projects',
      professional: 'Professional Projects',
    },
    about: {
      title: 'About',
      description: 'Learn more about me.',
      myHistory: 'My Story',
      whatAmIDoing: 'What I Do',
      whatNext: 'My Goals',
      dreamsAndWishes: 'My Dreams',
    },
    experiences: {
      title: 'Experiences',
      description: 'My work experience.',
      workExperience: 'Experience',
      education: 'Education',
    },
    contact: {
      title: 'Contact',
      description: 'Feel free to reach out.',
      connectWithMe: 'Contact Me',
    },
    common: {
      getInTouch: 'Get In Touch',
      ctaText: 'Have a question? Feel free to ask.',
      sayHola: 'Say Hi',
      designBy: 'Created by',
      techStack: 'ReactJS + NextJS + Tailwindcss',
      copyright: '©',
      warmGreetings: 'Idir Lahcen',
    },
    services: {
      websiteDev: 'Web Development',
      websiteDevDesc: 'Complete website development services.',
      webAppDev: 'Web Apps',
      webAppDevDesc: 'Robust web application development.',
      responsiveDesign: 'Responsive Design',
      responsiveDesignDesc: 'Adaptive design for all devices.',
      performance: 'Performance',
      performanceDesc: 'Performance optimization.',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      projects: 'Projets',
      experiences: 'Expériences',
      about: 'À propos',
      contact: 'Contact',
    },
    home: {
      whatCanIDo: 'Ce que je fais',
      skillsTechnology: 'Compétences',
      projectsCompleted: 'Mes Projets',
      showAllProjects: 'Voir tout',
      hiIm: 'Bonjour, je suis',
      resume: 'CV',
    },
    projects: {
      title: 'Projets',
      description: 'Quelques projets réalisés.',
      personal: 'Projets Perso',
      professional: 'Projets Pro',
    },
    about: {
      title: 'À propos',
      description: 'En savoir plus sur moi.',
      myHistory: 'Mon Parcours',
      whatAmIDoing: 'Ce que je fais',
      whatNext: 'Objectifs',
      dreamsAndWishes: 'Rêves',
    },
    experiences: {
      title: 'Expériences',
      description: 'Mon parcours professionnel.',
      workExperience: 'Expériences',
      education: 'Formation',
    },
    contact: {
      title: 'Contact',
      description: 'N\'hésitez pas à me contacter.',
      connectWithMe: 'Me contacter',
    },
    common: {
      getInTouch: 'Contact',
      ctaText: 'Vous avez une question? Écrivez-moi.',
      sayHola: 'Dire bonjour',
      designBy: 'Créé par',
      techStack: 'ReactJS + NextJS + Tailwindcss',
      copyright: '©',
      warmGreetings: 'Idir Lahcen',
    },
    services: {
      websiteDev: 'Web',
      websiteDevDesc: 'Création de sites web.',
      webAppDev: 'Apps Web',
      webAppDevDesc: 'Développement d\'apps web.',
      responsiveDesign: 'Responsive',
      responsiveDesignDesc: 'Design adaptatif.',
      performance: 'Performance',
      performanceDesc: 'Optimisation.',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      projects: 'المشاريع',
      experiences: 'الخبرات',
      about: 'عني',
      contact: 'اتصال',
    },
    home: {
      whatCanIDo: 'ماذا أفعل',
      skillsTechnology: 'المهارات',
      projectsCompleted: 'مشاريعي',
      showAllProjects: 'عرض الكل',
      hiIm: 'أهلاً، أنا',
      resume: 'السيرة',
    },
    projects: {
      title: 'المشاريع',
      description: 'بعض مشايعي.',
      personal: 'شخصي',
      professional: 'مهني',
    },
    about: {
      title: 'عني',
      description: 'اعرف المزيد عني.',
      myHistory: 'قصتي',
      whatAmIDoing: 'ما أفعله',
      whatNext: 'أهدافي',
      dreamsAndWishes: 'أحلامي',
    },
    experiences: {
      title: 'الخبرات',
      description: 'مساري المهني.',
      workExperience: 'الخبرات',
      education: 'التعليم',
    },
    contact: {
      title: 'اتصال',
      description: 'تواصل معي.',
      connectWithMe: 'تواصل معي',
    },
    common: {
      getInTouch: 'تواصل',
      ctaText: 'لديك سؤال؟ تواصل معي.',
      sayHola: 'مرحباً',
      designBy: 'صممه',
      techStack: 'ReactJS + NextJS + Tailwindcss',
      copyright: '©',
      warmGreetings: 'إيدير لحسن',
    },
    services: {
      websiteDev: 'المواقع',
      websiteDevDesc: 'تطوير المواقع.',
      webAppDev: 'التطبيقات',
      webAppDevDesc: 'تطبيقات الويب.',
      responsiveDesign: 'متجاوب',
      responsiveDesignDesc: 'تصميم متجاوب.',
      performance: 'الأداء',
      performanceDesc: 'تحسين الأداء.',
    },
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('portfolio-language');
      if (savedLang && ['en', 'fr', 'ar'].includes(savedLang)) {
        setLanguage(savedLang);
      }
    }
  }, []);

  const changeLanguage = (lang) => {
    if (['en', 'fr', 'ar'].includes(lang)) {
      setLanguage(lang);
      if (typeof window !== 'undefined') {
        localStorage.setItem('portfolio-language', lang);
      }
    }
  };

  const t = (key) => {
    const keys = key.split('.');
    let result = translations[language];
    for (const k of keys) {
      result = result?.[k];
    }
    return result || key;
  };

  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t, isRTL }}>
      <div dir={isRTL ? 'rtl' : 'ltr'} className={language}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);