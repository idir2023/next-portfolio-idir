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
      status: 'Software Engineer',
      description: 'I am passionate and interested in the ever-growing field of Web Front-End development. I enjoy transforming designs into functional user interfaces using the latest tools and frameworks.',
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
      myHistoryDesc: "Hello, my name is Lahcen Idir. I'm from Morocco and I'm 23 years old. I'm a web developer specializing in PHP Laravel. Currently, I'm working as an intern for Mandi Tech Info, a company based in Morocco, where I've been for 8 months. Before my time there, I've worked on various web projects such as hospital management systems, invoicing platforms, and online recruitment portals.",
      whatAmIDoing: 'What I Do',
      whatAmIDoingDesc: "I am currently focusing on learning front-end frameworks such as React and Next.js, alongside honing my backend skills, with a particular emphasis on mastering user-friendly technologies like Node.js and Express.js.",
      whatNext: 'My Goals',
      whatNextDesc: "My goal now is to master Front-End and Back-End technology. So that I can build a solution to an existing problem easily.",
      dreamsAndWishes: 'My Dreams',
      dreamsAndWishesDesc: "I aspire to join prestigious companies such as Google or Microsoft, targeting roles in software development engineering or front-end development.",
    },
    experiences: {
      title: 'Experiences',
      description: 'My work experience.',
      workExperience: 'Experience',
      education: 'Education',
      contents: [
        {
          title: 'My Work Experiences',
          items: [
            {
              timestamp: '01 Jan 2023 - 01 Sep 2024',
              name: 'Fiverr',
              info: 'Freelance Web Developer',
              description: 'Started freelancing as a remote back-end & front-end developer, enabling businesses to leverage their online presence.',
              list: [
                { name: 'Crafting engaging user interfaces with NextJS, SCSS, and React for dynamic interactivity.' }
              ]
            },
            {
              timestamp: '01 Apr 2023 - 01 Jun 2023',
              name: 'Project Fin d\'étude',
              info: 'Full Stack Web Developer',
              description: 'Developed a hospital management system with multiple functionalities using PHP, JavaScript, HTML, and CSS.',
              list: [
                { name: 'Crafting engaging user interfaces with HTML, CSS, and Bootstrap for dynamic interactivity.' },
                { name: 'Developing front-end responsive applications and implementing PHP for efficient server-side processing.' }
              ]
            },
            {
              timestamp: '01 Oct 2023 - 15 Jun 2024',
              name: 'Mandi Tech Info',
              info: 'Software Engineer',
              description: 'Resolved errors, added new tasks to the stock management system using Laravel and jQuery.',
              list: [
                { name: 'Collaborated with internal and outsourced partners on software development.' }
              ]
            },
            {
              timestamp: '01 Feb 2023 - 01 May 2023',
              name: 'FST',
              info: 'Software Engineer',
              description: 'Built an online recruitment system with web technologies like PHP, JavaScript, HTML, and CSS.',
              list: [
                { name: 'Evaluated and provided feedback on AI-generated writing, ensuring accuracy and adherence to guidelines.' },
                { name: 'Demonstrated strong written English skills by crafting high-quality original responses to prompts.' }
              ]
            }
          ]
        }
      ]
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
      viewWork: 'View Work',
      viewProject: 'View Project',
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
    skills: {
      html: 'HTML 5',
      css: 'CSS 3',
      javascript: 'JavaScript',
      tailwind: 'Tailwind CSS',
      laravel: 'Laravel',
      bootstrap: 'Bootstrap 5',
      react: 'React JS',
      next: 'Next JS',
      firebase: 'Firebase',
      git: 'Git',
      github: 'GitHub',
      sql: 'SQL',
      vite: 'Vite JS',
      java: 'Java',
      vscode: 'Visual Studio Code',
      linux: 'Linux',
      cpp: 'C++',
      nodejs: 'Node JS',
      mongodb: 'MongoDB',
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
      status: 'Ingénieur Logiciel',
      description: 'Je suis passionné par le développement web Front-End. J\'aime transformer des designs en interfaces fonctionnelles avec les derniers outils et frameworks.',
    },
    projects: {
      title: 'Projets',
      description: 'Quelques projets que j\'ai réalisés.',
      personal: 'Projets Perso',
      professional: 'Projets Pro',
    },
    about: {
      title: 'À propos',
      description: 'En savoir plus sur moi.',
      myHistory: 'Mon Parcours',
      myHistoryDesc: "Je m'appelle Lahcen Idir. Je viens du Maroc et j'ai 23 ans. Je suis développeur web spécialisé en PHP Laravel. Actuellement, je travaille en tant que stagiaire chez Mandi Tech Info, une entreprise au Maroc, depuis 8 mois.",
      whatAmIDoing: 'Ce que je fais',
      whatAmIDoingDesc: "Je me concentre actuellement sur l'apprentissage des frameworks front-end comme React et Next.js, tout en perfectionnant mes compétences back-end.",
      whatNext: 'Objectifs',
      whatNextDesc: "Mon objectif est de maîtriser les technologies Front-End et Back-End pour construire facilement des solutions aux problèmes existants.",
      dreamsAndWishes: 'Rêves',
      dreamsAndWishesDesc: "J'aspire à rejoindre des entreprises prestigieuses comme Google ou Microsoft, en ciblant des postes en développement front-end.",
    },
    experiences: {
      title: 'Expériences',
      description: 'Mon parcours professionnel.',
      workExperience: 'Expériences',
      education: 'Formation',
      contents: [
        {
          title: 'Mes Expériences Professionnelles',
          items: [
            {
              timestamp: '01 Jan 2023 - 01 Sep 2024',
              name: 'Fiverr',
              info: 'Développeur Web Freelance',
              description: 'Travail en tant que développeur web back-end et front-end à distance.',
              list: [
                { name: 'Création d\'interfaces utilisateur engageantes avec NextJS, SCSS et React.' }
              ]
            },
            {
              timestamp: '01 Avr 2023 - 01 Jun 2023',
              name: 'Projet de Fin d\'étude',
              info: 'Développeur Web Full Stack',
              description: 'Développement d\'un système de gestion hospitalière avec PHP, JavaScript, HTML et CSS.',
              list: [
                { name: 'Création d\'interfaces utilisateur avec HTML, CSS et Bootstrap.' },
                { name: 'Développement d\'applications front-end responsives et implémentation PHP.' }
              ]
            },
            {
              timestamp: '01 Oct 2023 - 15 Jun 2024',
              name: 'Mandi Tech Info',
              info: 'Ingénieur Logiciel',
              description: 'Résolution d\'erreurs et ajout de nouvelles tâches au système de gestion de stock.',
              list: [
                { name: 'Collaboration avec les partenaires internes et externes.' }
              ]
            },
            {
              timestamp: '01 Fév 2023 - 01 Mai 2023',
              name: 'FST',
              info: 'Ingénieur Logiciel',
              description: 'Création d\'un système de recrutement en ligne avec PHP, JavaScript, HTML et CSS.',
              list: [
                { name: 'Évaluation et retour sur les écrits générés par l\'IA.' },
                { name: 'Rédaction de réponses originales de haute qualité.' }
              ]
            }
          ]
        }
      ]
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
      viewWork: 'Voir mes projets',
      viewProject: 'Voir le projet',
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
    skills: {
      html: 'HTML 5',
      css: 'CSS 3',
      javascript: 'JavaScript',
      tailwind: 'Tailwind CSS',
      laravel: 'Laravel',
      bootstrap: 'Bootstrap 5',
      react: 'React JS',
      next: 'Next JS',
      firebase: 'Firebase',
      git: 'Git',
      github: 'GitHub',
      sql: 'SQL',
      vite: 'Vite JS',
      java: 'Java',
      vscode: 'Visual Studio Code',
      linux: 'Linux',
      cpp: 'C++',
      nodejs: 'Node JS',
      mongodb: 'MongoDB',
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
      status: 'مهندس برمجيات',
      description: 'أنا شغوف بمجال تطوير الواجهات الأمامية للويب. أستمتع بتحويل التصاميم إلى واجهات مستخدم وظيفية باستخدام أحدث الأدوات والأطر البرمجية.',
    },
    projects: {
      title: 'المشاريع',
      description: 'بعض مشاييعي المكتملة.',
      personal: 'مشاريع شخصية',
      professional: 'مشاريع مهنية',
    },
    about: {
      title: 'عني',
      description: 'اعرف المزيد عني.',
      myHistory: 'قصتي',
      myHistoryDesc: 'اسمي لحسن إيدير. عمري 23 سنة من المغرب. مطور ويب متخصص في PHP Laravel. حالياً أعمل كمتدرب في شركة Mandi Tech Info في المغرب منذ 8 أشهر.',
      whatAmIDoing: 'ما أفعله',
      whatAmIDoingDesc: 'أركز حالياً على تعلم أطر العمل الأمامية مثل React و Next.js، إلى جانب صقل مهاراتي في تطوير الواجهة الخلفية.',
      whatNext: 'أهدافي',
      whatNextDesc: 'هدفي هو إتقان تقنيات الواجهة الأمامية والخلفية لبناء حلول للمشاكل بسهولة.',
      dreamsAndWishes: 'أحلامي',
      dreamsAndWishesDesc: 'أسعى للانضمام إلى شركات مرموقة مثل Google أو Microsoft في مجال تطوير البرمجيات.',
    },
    experiences: {
      title: 'الخبرات',
      description: 'مساري المهني.',
      workExperience: 'الخبرات',
      education: 'التعليم',
      contents: [
        {
          title: 'خبراتي العملية',
          items: [
            {
              timestamp: '01 يناير 2023 - 01 سبتمبر 2024',
              name: 'Fiverr',
              info: 'مطور ويب مستقل',
              description: 'عملت كمطور ويب عن بُعد للواجهة الأمامية والخلفية.',
              list: [
                { name: 'صناعة واجهات مستخدم جذابة باستخدام NextJS و SCSS و React.' }
              ]
            },
            {
              timestamp: '01 أبريل 2023 - 01 يونيو 2023',
              name: 'مشروع نهاية الدراسة',
              info: 'مطور ويب كامل',
              description: 'طورت نظام إدارة المستشفى باستخدام PHP و JavaScript و HTML و CSS.',
              list: [
                { name: 'صناعة واجهات مستخدم باستخدام HTML و CSS و Bootstrap.' },
                { name: 'تطوير تطبيقات ويب متوافقة مع جميع الشاشات.' }
              ]
            },
            {
              timestamp: '01 أكتوبر 2023 - 15 يونيو 2024',
              name: 'Mandi Tech Info',
              info: 'مهندس برمجيات',
              description: 'إصلاح الأخطاء وإضافة مهام جديدة لنظام إدارة المخزون.',
              list: [
                { name: 'التعاون مع الشركاء الداخليين والخارجيين.' }
              ]
            },
            {
              timestamp: '01 فبراير 2023 - 01 مايو 2023',
              name: 'كلية العلوم والتقنية',
              info: 'مهندس برمجيات',
              description: 'صممت نظام توظيف إلكتروني باستخدام PHP و JavaScript و HTML و CSS.',
              list: [
                { name: 'تقييم وإعطاء ملاحظات على الكتابات المولدة بالذكاء الاصطناعي.' }
              ]
            }
          ]
        }
      ]
    },
    contact: {
      title: 'اتصال',
      description: 'لا تتردد في التواصل معي.',
      connectWithMe: 'تواصل معي',
    },
    common: {
      getInTouch: 'تواصل معي',
      ctaText: 'لديك سؤال؟ تواصل معي.',
      sayHola: 'مرحباً',
      viewWork: 'عرض أعمالي',
      viewProject: 'عرض المشروع',
      designBy: 'صممه',
      techStack: 'ReactJS + NextJS + Tailwindcss',
      copyright: '©',
      warmGreetings: 'لحسن إيدير',
    },
    services: {
      websiteDev: 'المواقع',
      websiteDevDesc: 'تطوير المواقع الإلكترونية.',
      webAppDev: 'التطبيقات',
      webAppDevDesc: 'تطوير تطبيقات الويب.',
      responsiveDesign: 'متجاوب',
      responsiveDesignDesc: 'تصميم متجاوب لكل الأجهزة.',
      performance: 'الأداء',
      performanceDesc: 'تحسين الأداء.',
    },
    skills: {
      html: 'HTML 5',
      css: 'CSS 3',
      javascript: 'JavaScript',
      tailwind: 'Tailwind CSS',
      laravel: 'Laravel',
      bootstrap: 'Bootstrap 5',
      react: 'React JS',
      next: 'Next JS',
      firebase: 'Firebase',
      git: 'Git',
      github: 'GitHub',
      sql: 'SQL',
      vite: 'Vite JS',
      java: 'Java',
      vscode: 'Visual Studio Code',
      linux: 'Linux',
      cpp: 'C++',
      nodejs: 'Node JS',
      mongodb: 'MongoDB',
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