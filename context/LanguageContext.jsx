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
    hero: {
      available: 'Available for work',
      need: 'Need a',
      solution: 'Digital Solution',
      tagline: 'Full-Stack Web Developer | React & Laravel Expert',
      description: 'I build modern, high-performance web applications and websites. Let me turn your ideas into powerful digital experiences.',
      getQuote: 'Get a Quote',
      viewWork: 'View My Work',
      follow: 'Follow me',
      availableFor: 'Open to work',
      topRated: 'Top Rated',
      statsProjects: 'Projects',
      statsExperience: 'Years Exp.',
      statsClients: 'Clients',
      statsTechnologies: 'Technologies',
    },
    home: {
      whatCanIDo: 'What I Do',
      servicesSubtitle: 'Professional web development services tailored to your business needs.',
      developerExperience: 'Developer Experience',
      experienceSubtitle: 'My expertise and proficiency across different technologies and tools.',
      myWorkflow: 'My Workflow',
      skillsTechnology: 'Skills & Technologies',
      skillsSubtitle: 'Tools and technologies I work with on a daily basis.',
      projectsCompleted: 'Featured Projects',
      projectsSubtitle: 'Some of my recent work that I am proud of.',
      showAllProjects: 'View All Projects',
      getStarted: 'Get Started',
      hiIm: "Hi, I'm",
      resume: 'Resume',
      status: 'Software Engineer',
      description: 'I am passionate and interested in the ever-growing field of Web Front-End development. I enjoy transforming designs into functional user interfaces using the latest tools and frameworks.',
    },
    experience: {
      Frontend: 'Frontend',
      Backend: 'Backend',
      ToolsWorkflow: 'Tools & Workflow',
    },
    projects: {
      title: 'Projects',
      description: 'A showcase of my work and projects.',
      badge: 'My Work',
      all: 'All',
      personal: 'Personal',
      professional: 'Professional',
      search: 'Search projects...',
      noResults: 'No projects found',
      clearFilters: 'Clear Filters',
      showing: 'Showing',
      projects: 'projects',
    },
    about: {
      title: 'About',
      description: 'Discover my story, skills, and aspirations.',
      badge: 'About Me',
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
      description: 'My professional journey and work experience.',
      badge: 'My Journey',
      workExperience: 'Experience',
      education: 'Education',
      contents: [
        {
          title: 'Work Experience',
          items: [
            {
              timestamp: 'Jan 2023 - Sep 2024',
              name: 'Fiverr',
              info: 'Freelance Web Developer',
              description: 'Started freelancing as a remote back-end & front-end developer, enabling businesses to leverage their online presence.',
              list: [
                { name: 'Crafting engaging user interfaces with NextJS, SCSS, and React for dynamic interactivity.' }
              ]
            },
            {
              timestamp: 'Apr 2023 - Jun 2023',
              name: "Project Fin d'étude",
              info: 'Full Stack Web Developer',
              description: 'Developed a hospital management system with multiple functionalities using PHP, JavaScript, HTML, and CSS.',
              list: [
                { name: 'Crafting engaging user interfaces with HTML, CSS, and Bootstrap for dynamic interactivity.' },
                { name: 'Developing front-end responsive applications and implementing PHP for efficient server-side processing.' }
              ]
            },
            {
              timestamp: 'Oct 2023 - Jun 2024',
              name: 'Mandi Tech Info',
              info: 'Software Engineer',
              description: 'Resolved errors, added new tasks to the stock management system using Laravel and jQuery.',
              list: [
                { name: 'Collaborated with internal and outsourced partners on software development.' }
              ]
            },
            {
              timestamp: 'Feb 2023 - May 2023',
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
      description: 'Let\'s start a conversation. Reach out and I\'ll get back to you.',
      badge: 'Let\'s Connect',
      connectWithMe: 'Contact Me',
      subtitle: 'Choose your preferred way to connect with me.',
      getInTouch: 'Get in touch',
    },
    common: {
      getInTouch: "Let's Work Together",
      ctaText: 'Have a project in mind? I\'d love to hear from you. Let\'s discuss how I can help bring your ideas to life.',
      ctaLabel: 'Let\'s collaborate',
      sayHola: 'Say Hi',
      viewWork: 'View My Work',
      viewProject: 'View Project',
      designBy: 'Created by',
      techStack: 'ReactJS + NextJS + Tailwindcss',
      copyright: '©',
      warmGreetings: 'Idir Lahcen',
      hireMe: 'Hire Me',
      contact: 'Contact',
    },
    footer: {
      description: 'Full-stack web developer crafting modern digital experiences with React, Laravel, and cutting-edge technologies.',
      quickLinks: 'Quick Links',
      contact: 'Contact',
      copyright: '©',
      rights: 'All rights reserved.',
      builtWith: 'Built with',
    },
    services: {
      websiteDev: 'Web Development',
      websiteDevDesc: 'Complete website development services from concept to launch.',
      webAppDev: 'Web Applications',
      webAppDevDesc: 'Robust, scalable web application development for your business.',
      responsiveDesign: 'Responsive Design',
      responsiveDesignDesc: 'Pixel-perfect designs that work flawlessly on every device.',
      performance: 'Performance',
      performanceDesc: 'Speed optimization and performance tuning for your web projects.',
      featureModern: 'Modern Design',
      featureFast: 'Fast Performance',
      featureSecure: 'Secure Code',
      featureSupport: '24/7 Support',
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
    hero: {
      available: 'Disponible',
      need: 'Vous avez besoin d\'un',
      solution: 'Solution Digitale',
      tagline: 'Développeur Web Full-Stack | Expert React & Laravel',
      description: 'Je crée des sites web et applications modernes et performants. Laissez-moi transformer vos idées en expériences numériques puissantes.',
      getQuote: 'Demander un Devis',
      viewWork: 'Voir mes Projets',
      follow: 'Suivez-moi',
      availableFor: 'Ouvert aux offres',
      topRated: 'Meilleur taux',
      statsProjects: 'Projets',
      statsExperience: 'Ans Exp.',
      statsClients: 'Clients',
      statsTechnologies: 'Technologies',
    },
    home: {
      whatCanIDo: 'Ce que je fais',
      servicesSubtitle: 'Services professionnels de développement web adaptés à vos besoins.',
      developerExperience: 'Expérience Développeur',
      experienceSubtitle: 'Mon expertise et ma maîtrise des différentes technologies et outils.',
      myWorkflow: 'Mon Processus',
      skillsTechnology: 'Compétences',
      skillsSubtitle: 'Outils et technologies que j\'utilise au quotidien.',
      projectsCompleted: 'Projets Récents',
      projectsSubtitle: 'Quelques-uns de mes travaux récents dont je suis fier.',
      showAllProjects: 'Voir tous les Projets',
      getStarted: 'Commencer',
      hiIm: 'Bonjour, je suis',
      resume: 'CV',
      status: 'Ingénieur Logiciel',
      description: 'Je suis passionné par le développement web Front-End. J\'aime transformer des designs en interfaces fonctionnelles avec les derniers outils et frameworks.',
    },
    experience: {
      Frontend: 'Frontend',
      Backend: 'Backend',
      ToolsWorkflow: 'Outils & Flux',
    },
    projects: {
      title: 'Projets',
      description: 'Une vitrine de mon travail et de mes projets.',
      badge: 'Mon Travail',
      all: 'Tous',
      personal: 'Personnel',
      professional: 'Professionnel',
      search: 'Rechercher des projets...',
      noResults: 'Aucun projet trouvé',
      clearFilters: 'Effacer les filtres',
      showing: 'Affichage de',
      projects: 'projets',
    },
    about: {
      title: 'À propos',
      description: 'Découvrez mon histoire, mes compétences et mes aspirations.',
      badge: 'À Propos',
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
      description: 'Mon parcours professionnel et mon expérience de travail.',
      badge: 'Mon Parcours',
      workExperience: 'Expériences',
      education: 'Formation',
      contents: [
        {
          title: 'Expérience Professionnelle',
          items: [
            {
              timestamp: 'Jan 2023 - Sep 2024',
              name: 'Fiverr',
              info: 'Développeur Web Freelance',
              description: 'Travail en tant que développeur web back-end et front-end à distance.',
              list: [
                { name: 'Création d\'interfaces utilisateur engageantes avec NextJS, SCSS et React.' }
              ]
            },
            {
              timestamp: 'Avr 2023 - Juin 2023',
              name: 'Projet de Fin d\'étude',
              info: 'Développeur Web Full Stack',
              description: 'Développement d\'un système de gestion hospitalière avec PHP, JavaScript, HTML et CSS.',
              list: [
                { name: 'Création d\'interfaces utilisateur avec HTML, CSS et Bootstrap.' },
                { name: 'Développement d\'applications front-end responsives et implémentation PHP.' }
              ]
            },
            {
              timestamp: 'Oct 2023 - Juin 2024',
              name: 'Mandi Tech Info',
              info: 'Ingénieur Logiciel',
              description: 'Résolution d\'erreurs et ajout de nouvelles tâches au système de gestion de stock.',
              list: [
                { name: 'Collaboration avec les partenaires internes et externes.' }
              ]
            },
            {
              timestamp: 'Fév 2023 - Mai 2023',
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
      description: 'Commençons une conversation. Contactez-moi et je vous répondrai.',
      badge: 'Contactez-moi',
      connectWithMe: 'Me contacter',
      subtitle: 'Choisissez votre moyen préféré pour me contacter.',
      getInTouch: 'Entrer en contact',
    },
    common: {
      getInTouch: 'Travaillons Ensemble',
      ctaText: 'Vous avez un projet en tête? J\'aimerais avoir de vos nouvelles. Discutons de la façon dont je peux vous aider.',
      ctaLabel: 'Collaborons',
      sayHola: 'Dire bonjour',
      viewWork: 'Voir mes projets',
      viewProject: 'Voir le projet',
      designBy: 'Créé par',
      techStack: 'ReactJS + NextJS + Tailwindcss',
      copyright: '©',
      warmGreetings: 'Idir Lahcen',
      hireMe: 'Engagez-moi',
      contact: 'Contact',
    },
    footer: {
      description: 'Développeur web full-stack créant des expériences numériques modernes avec React, Laravel et les technologies de pointe.',
      quickLinks: 'Liens Rapides',
      contact: 'Contact',
      copyright: '©',
      rights: 'Tous droits réservés.',
      builtWith: 'Construit avec',
    },
    services: {
      websiteDev: 'Web',
      websiteDevDesc: 'Création de sites web complets du concept au lancement.',
      webAppDev: 'Apps Web',
      webAppDevDesc: 'Développement d\'applications web robustes et évolutives.',
      responsiveDesign: 'Responsive',
      responsiveDesignDesc: 'Designs parfaits qui fonctionnent sur tous les appareils.',
      performance: 'Performance',
      performanceDesc: 'Optimisation de la vitesse et des performances.',
      featureModern: 'Design Moderne',
      featureFast: 'Performance Rapide',
      featureSecure: 'Code Sécurisé',
      featureSupport: 'Support 24/7',
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
    hero: {
      available: 'متاح للعمل',
      need: 'هل تبحث عن',
      solution: 'حل رقمي',
      tagline: 'مطور ويب كامل | خبير React و Laravel',
      description: 'أبني تطبيقات ومواقع ويب حديثة عالية الأداء. دعني أحول أفكارك إلى تجارب رقمية قوية.',
      getQuote: 'اطلب عرض سعر',
      viewWork: 'شاهد أعمالي',
      follow: 'تابعني',
      availableFor: 'متاح للعمل',
      topRated: 'الأفضل تقييماً',
      statsProjects: 'مشروع',
      statsExperience: 'سنوات خبرة',
      statsClients: 'عميل',
      statsTechnologies: 'تقنية',
    },
    home: {
      whatCanIDo: 'ماذا أفعل',
      servicesSubtitle: 'خدمات تطوير ويب احترافية مصممة خصيصاً لاحتياجات عملك.',
      developerExperience: 'خبراتي التقنية',
      experienceSubtitle: 'خبراتي وكفاءتي في مختلف التقنيات والأدوات.',
      myWorkflow: 'سير العمل',
      skillsTechnology: 'المهارات والتقنيات',
      skillsSubtitle: 'الأدوات والتقنيات التي أعمل بها يومياً.',
      projectsCompleted: 'مشاريعي المميزة',
      projectsSubtitle: 'بعض من أعمالي الأخيرة التي أفتخر بها.',
      showAllProjects: 'عرض كل المشاريع',
      getStarted: 'ابدأ الآن',
      hiIm: 'أهلاً، أنا',
      resume: 'السيرة الذاتية',
      status: 'مهندس برمجيات',
      description: 'أنا شغوف بمجال تطوير الواجهات الأمامية للويب. أستمتع بتحويل التصاميم إلى واجهات مستخدم وظيفية باستخدام أحدث الأدوات والأطر البرمجية.',
    },
    experience: {
      Frontend: 'الواجهة الأمامية',
      Backend: 'الواجهة الخلفية',
      ToolsWorkflow: 'الأدوات وسير العمل',
    },
    projects: {
      title: 'المشاريع',
      description: 'عرض لأعمالي ومشاريعي.',
      badge: 'أعمالي',
      all: 'الكل',
      personal: 'شخصي',
      professional: 'مهنيم',
      search: 'ابحث عن مشاريع...',
      noResults: 'لم يتم العثور على مشاريع',
      clearFilters: 'مسح الفلتر',
      showing: 'عرض',
      projects: 'مشاريع',
    },
    about: {
      title: 'عني',
      description: 'اكتشف قصتي ومهاراتي وطموحاتي.',
      badge: 'عنواني',
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
      description: 'مسيرتي المهنية وخبراتي العملية.',
      badge: 'رحلتي',
      workExperience: 'الخبرات',
      education: 'التعليم',
      contents: [
        {
          title: 'الخبرات العملية',
          items: [
            {
              timestamp: 'يناير 2023 - سبتمبر 2024',
              name: 'Fiverr',
              info: 'مطور ويب مستقل',
              description: 'عملت كمطور ويب عن بُعد للواجهة الأمامية والخلفية.',
              list: [
                { name: 'صناعة واجهات مستخدم جذابة باستخدام NextJS و SCSS و React.' }
              ]
            },
            {
              timestamp: 'أبريل 2023 - يونيو 2023',
              name: 'مشروع نهاية الدراسة',
              info: 'مطور ويب كامل',
              description: 'طورت نظام إدارة المستشفى باستخدام PHP و JavaScript و HTML و CSS.',
              list: [
                { name: 'صناعة واجهات مستخدم باستخدام HTML و CSS و Bootstrap.' },
                { name: 'تطوير تطبيقات ويب متوافقة مع جميع الشاشات.' }
              ]
            },
            {
              timestamp: 'أكتوبر 2023 - يونيو 2024',
              name: 'Mandi Tech Info',
              info: 'مهندس برمجيات',
              description: 'إصلاح الأخطاء وإضافة مهام جديدة لنظام إدارة المخزون.',
              list: [
                { name: 'التعاون مع الشركاء الداخليين والخارجيين.' }
              ]
            },
            {
              timestamp: 'فبراير 2023 - مايو 2023',
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
      description: 'دعنا نبدأ محادثة. تواصل معي وسأرد عليك.',
      badge: 'تواصل معي',
      connectWithMe: 'تواصل معي',
      subtitle: 'اختر طريقتك المفضلة للتواصل معي.',
      getInTouch: 'تواصل',
    },
    common: {
      getInTouch: 'دعنا نعمل معاً',
      ctaText: 'هل لديك مشروع في ذهنك؟ أود سماع رأيك. دعنا نناقش كيف يمكنني المساعدة في تحقيق أفكارك.',
      ctaLabel: 'دعنا نتعاون',
      sayHola: 'مرحباً',
      viewWork: 'عرض أعمالي',
      viewProject: 'عرض المشروع',
      designBy: 'صممه',
      techStack: 'ReactJS + NextJS + Tailwindcss',
      copyright: '©',
      warmGreetings: 'لحسن إيدير',
      hireMe: 'وظفني',
      contact: 'اتصال',
    },
    footer: {
      description: 'مطور ويب شامل أصنع تجارب رقمية حديثة باستخدام React و Laravel وأحدث التقنيات.',
      quickLinks: 'روابط سريعة',
      contact: 'اتصال',
      copyright: '©',
      rights: 'جميع الحقوق محفوظة.',
      builtWith: 'بُني بواسطة',
    },
    services: {
      websiteDev: 'تطوير المواقع',
      websiteDevDesc: 'خدمات تطوير مواقع شاملة من الفكرة إلى الإطلاق.',
      webAppDev: 'تطبيقات الويب',
      webAppDevDesc: 'تطوير تطبيقات ويب قوية وقابلة للتوسع لأعمالك.',
      responsiveDesign: 'تصميم متجاوب',
      responsiveDesignDesc: 'تصاميم مثالية تعمل بسلاسة على جميع الأجهزة.',
      performance: 'الأداء',
      performanceDesc: 'تحسين السرعة والأداء لمشاريعك web.',
      featureModern: 'تصميم عصري',
      featureFast: 'أداء سريع',
      featureSecure: 'كود آمن',
      featureSupport: 'دعم 24/7',
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
