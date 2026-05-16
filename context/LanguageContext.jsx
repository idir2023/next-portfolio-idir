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
      whatCanIDo: 'What can I do',
      skillsTechnology: 'Skills & Technology',
      projectsCompleted: "Projects I've Completed",
      showAllProjects: 'Show all my projects',
      hiIm: "Hi, I'm",
      resume: 'Resume download',
    },
    projects: {
      title: 'Projects',
      description: 'Some of the projects that I\'ve completed using various technologies.',
      personal: 'Personal Projects',
      professional: 'Professional Projects',
    },
    about: {
      title: 'About',
      description: 'Get acquainted further about me, story and biography of my life',
      myHistory: 'My History',
      whatAmIDoing: 'What am I Doing',
      whatNext: 'What Next',
      dreamsAndWishes: 'Dreams and Wishes',
    },
    experiences: {
      title: 'Experiences',
      description: 'Explore my work experiences and projects.',
      workExperience: 'My Work Experiences',
      education: 'My Education',
    },
    contact: {
      title: 'Contact',
      description: 'Chat with me through some of the contacts you can call to get acquainted.',
      connectWithMe: 'Connect With Me',
    },
    common: {
      getInTouch: 'GET IN TOUCH',
      ctaText: 'Is there anything I can help you with? My inbox and social media are always open to you, feel free to ask, I will try my best for you. Thank you for visiting.',
      sayHola: 'Say Hola..',
      designBy: 'Design & Build With',
      techStack: 'Design with ReactJS + NextJS + Tailwindcss',
      copyright: 'copyright',
      warmGreetings: 'warm greetings from Idir Lahcen',
    },
    services: {
      websiteDev: 'Website Development',
      websiteDevDesc: 'We offer complete website development services, transforming your designs into fully functional, visually appealing websites.',
      webAppDev: 'Web Application Development',
      webAppDevDesc: 'Our team specializes in developing robust, feature-rich web applications.',
      responsiveDesign: 'Responsive Design',
      responsiveDesignDesc: 'We create responsive designs that adapt flawlessly to any device.',
      performance: 'Performance Optimization',
      performanceDesc: 'We focus on enhancing the performance of websites and web applications.',
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
      whatCanIDo: 'Ce que je peux faire',
      skillsTechnology: 'Compétences & Technologies',
      projectsCompleted: 'Projets realizados',
      showAllProjects: 'Voir tous mes projets',
      hiIm: 'Bonjour, je suis',
      resume: 'Télécharger CV',
    },
    projects: {
      title: 'Projets',
      description: 'Alguns projetos que completei usando várias tecnologias.',
      personal: 'Projets Personnels',
      professional: 'Projets Professionnels',
    },
    about: {
      title: 'À propos',
      description: 'Apprenez-en plus sur moi, mon histoire et ma biographie.',
      myHistory: 'Mon Histoire',
      whatAmIDoing: 'Ce que je fais',
      whatNext: 'Ce que je vise',
      dreamsAndWishes: 'Rêves et Souhaits',
    },
    experiences: {
      title: 'Expériences',
      description: 'Explorez mes expériences professionnelles et projets.',
      workExperience: 'Mon Expérience Professionnelle',
      education: 'Mon Éducation',
    },
    contact: {
      title: 'Contact',
      description: 'Discutez avec moi via certains des contacts.',
      connectWithMe: 'Contactez-moi',
    },
    common: {
      getInTouch: 'ENTRER EN CONTACT',
      ctaText: 'Y a-t-il quelque chose qui peut vous aider? Ma boîte de réception et mes réseaux sociaux sont toujours ouverts.',
      sayHola: 'Dire Bonjour..',
      designBy: 'Conçu et développé par',
      techStack: 'Développé avec ReactJS + NextJS + Tailwindcss',
      copyright: 'droits d\'auteur',
      warmGreetings: 'salutations cordiales de Idir Lahcen',
    },
    services: {
      websiteDev: 'Développement Web',
      websiteDevDesc: 'Nous offrons des services complète de développement web, transformant vos designs en sites fonctionnels.',
      webAppDev: 'Développement d\'Applications Web',
      webAppDevDesc: 'Notre équipe spécialise dans le développement d\'applications web robustes et riches en fonctionnalités.',
      responsiveDesign: 'Design Responsive',
      responsiveDesignDesc: 'Nous créons des designs adaptatifs qui fonctionnent parfaitement sur tous les appareils.',
      performance: 'Optimisation des Performances',
      performanceDesc: 'Nous concentrons sur l\'amélioration des performances des sites et applications web.',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      projects: 'المشاريع',
      experiences: 'الخبرات',
      about: 'عني',
      contact: 'اتصل بي',
    },
    home: {
      whatCanIDo: 'ما الذي يمكنني تقديمه',
      skillsTechnology: 'المهارات والتقنيات',
      projectsCompleted: 'المشاريع المكتملة',
      showAllProjects: 'شاهد جميع مشاريعي',
      hiIm: 'أهلاً، أنا',
      resume: 'تحميل السيرة الذاتية',
    },
    projects: {
      title: 'المشاريع',
      description: 'بعض المشاريع المكتملة باستخدام تقنيات مختلفة.',
      personal: 'المشاريع الشخصية',
      professional: 'المشاريع المهنية',
    },
    about: {
      title: 'عنّي',
      description: 'تعرّف أكثر على قصتي وسيرتي الذاتية.',
      myHistory: 'تاريخي',
      whatAmIDoing: 'ما أفعله حالياً',
      whatNext: 'هدفي المستقبلي',
      dreamsAndWishes: 'الأحلام والأماني',
    },
    experiences: {
      title: 'الخبرات',
      description: 'استكشف خبراتي ومشاريعي.',
      workExperience: 'خبراتي العملية',
      education: 'تعليمي',
    },
    contact: {
      title: 'اتصل بي',
      description: 'تواصل معي عبر وسائل التواصل الاجتماعي.',
      contactWithMe: 'تواصل معي',
    },
    common: {
      getInTouch: 'تواصل معي',
      ctaText: 'هل هناك شيء يمكنني مساعدتك فيه؟صندوق الو البريد ووسائل التواصل الاجتماعي مفتوحة دائماً.',
      sayHola: 'قل مرحباً..',
      designBy: 'تصميم وبناء بـ',
      techStack: 'مصمم بـ ReactJS + NextJS + Tailwindcss',
      copyright: 'حقوق النشر',
      warmGreetings: 'تحيات حارة من إيدير لحسن',
    },
    services: {
      websiteDev: 'تطوير المواقع',
      websiteDevDesc: 'نقدم خدمات تطوير مواقع كاملة،حويل تصاميمك إلى مواقع وظيفية وجذابة.',
      webAppDev: 'تطوير تطبيقات الويب',
      webAppDevDesc: 'فريقنا متخصص في تطوير تطبيقات ويب قوية وغنية بالميزات.',
      responsiveDesign: 'التصميم المتجاوب',
      responsiveDesignDesc: 'نصمم تصاميم متجاوبة تعمل بشكل مثالي على جميع الأجهزة.',
      performance: 'تحسين الأداء',
      performanceDesc: 'نركّز على تحسين أداء المواقع والتطبيقات.',
    },
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('portfolio-language');
    if (savedLang && ['en', 'fr', 'ar'].includes(savedLang)) {
      setLanguage(savedLang);
    }
  }, []);

  const changeLanguage = (lang) => {
    if (['en', 'fr', 'ar'].includes(lang)) {
      setLanguage(lang);
      localStorage.setItem('portfolio-language', lang);
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
      <div dir={isRTL ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);