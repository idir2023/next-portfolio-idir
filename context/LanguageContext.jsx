import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      experiences: 'Experiences',
      blog: 'Blog',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      available: 'Available for work',
      need: 'PHP/Laravel Full-Stack Developer',
      solution: 'Building Secure, Scalable & Modern Web Applications',
      tagline: 'Backend Specialist | Laravel Expert | REST API & SaaS Developer',
      description: 'I specialize in PHP Laravel development — building robust REST APIs, multi-tenant SaaS platforms, ERP systems, and custom web applications. Clean architecture, secure code, optimized databases.',
      getQuote: 'Hire Me',
      viewWork: 'View Projects',
      downloadCv: 'Download CV',
      contactMe: 'Contact Me',
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
      servicesSubtitle: 'Professional PHP/Laravel development services for your business.',
      developerExperience: 'Technical Expertise',
      experienceSubtitle: 'My proficiency across backend, frontend, and devops tools.',
      myWorkflow: 'My Workflow',
      testimonials: 'What Clients Say',
      testimonialsSubtitle: 'Feedback from clients and partners I have worked with.',
      skillsTechnology: 'Skills & Technologies',
      skillsSubtitle: 'Technologies I use daily to build production-ready applications.',
      projectsCompleted: 'Featured Projects',
      projectsSubtitle: 'Recent professional and personal projects I am proud of.',
      showAllProjects: 'View All Projects',
      getStarted: 'Get Started',
      hiIm: "Hi, I'm",
      resume: 'Resume',
      status: 'PHP/Laravel Full-Stack Developer',
      description: 'Backend-focused developer from Morocco. I build secure, scalable web applications with PHP, Laravel, and modern technologies.',
    },
    experience: {
      Backend: 'Backend',
      Frontend: 'Frontend',
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
      description: 'Learn about my journey as a PHP/Laravel developer from Morocco.',
      badge: 'About Me',
      myHistory: 'My Background',
      myHistoryDesc: "Hello, I'm Lahcen Idir, a 26-year-old full-stack web developer from Casablanca, Morocco. I specialize in PHP and Laravel development, building REST APIs, SaaS platforms, ERP systems, and custom web applications. I currently work as a Laravel Developer at Mandi Tech Info.",
      whatAmIDoing: 'My Expertise',
      whatAmIDoingDesc: "I focus on backend engineering with PHP and Laravel — SOLID principles, clean architecture, optimized MySQL databases, secure REST APIs, role-based access control, and multi-tenant SaaS applications. I also work with React, Next.js, and Tailwind CSS for full-stack projects.",
      whatNext: 'My Goals',
      whatNextDesc: "My goal is to become a world-class Laravel architect and backend engineer. I am deepening my knowledge of advanced Laravel concepts, design patterns, TDD, and distributed systems to build applications that serve thousands of users.",
      dreamsAndWishes: 'Beyond Code',
      dreamsAndWishesDesc: "When not coding, I explore new technologies, read about software architecture, and share knowledge with the dev community. I believe in writing clean, maintainable code that solves real problems. Fluent in Arabic, French, and English.",
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
    notfound: {
      title: '404 - Page Not Found',
      description: 'Oops! The page you are looking for does not exist.',
      message: 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.',
      backHome: 'Back to Home',
    },
    contact: {
      title: 'Contact',
      description: 'Let\'s start a conversation. Reach out and I\'ll get back to you.',
      badge: 'Let\'s Connect',
      connectWithMe: 'Contact Me',
      subtitle: 'Choose your preferred way to connect with me.',
      getInTouch: 'Get in touch',
      formTitle: 'Send a Message',
      formSubtitle: 'Fill out the form below and I will get back to you within 24 hours.',
      formName: 'Your Name',
      formEmail: 'Your Email',
      formSubject: 'Subject',
      formMessage: 'Your Message',
      formSend: 'Send Message',
      formSuccess: 'Message sent successfully!',
      formError: 'Something went wrong. Please try again.',
      formSending: 'Sending...',
      formPlaceholderName: 'John Doe',
      formPlaceholderEmail: 'john@example.com',
      formPlaceholderSubject: 'Project Inquiry',
      formPlaceholderMessage: 'Tell me about your project...',
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
       php: 'PHP',
       laravel: 'Laravel',
       mysql: 'MySQL',
       javascript: 'JavaScript',
       react: 'React JS',
       next: 'Next JS',
       tailwind: 'Tailwind CSS',
       bootstrap: 'Bootstrap 5',
       jquery: 'jQuery',
       docker: 'Docker',
       git: 'Git',
       github: 'GitHub',
       composer: 'Composer',
       linux: 'Linux',
       api: 'REST API',
       firebase: 'Firebase',
       html: 'HTML 5',
       css: 'CSS 3',
       nodejs: 'Node JS',
       mongodb: 'MongoDB',
       vite: 'Vite JS',
       java: 'Java',
       vscode: 'Visual Studio Code',
       cpp: 'C++',
       sql: 'SQL',
     },
     faq: {
       title: 'FAQ',
       description: 'Frequently asked questions about my work and services.',
       badge: 'FAQ',
     },
     blog: {
       title: 'Blog',
       description: 'Technical articles about Laravel, PHP, web development, and more.',
       badge: 'Articles',
       readMore: 'Read More',
       readTime: 'min read',
       by: 'By',
       categories: 'Categories',
       relatedPosts: 'Related Posts',
       noPosts: 'No articles found.',
     },
     services_page: {
       title: 'Services',
       description: 'Professional web development services tailored to your needs.',
       badge: 'What I Offer',
       cta: 'Get a Quote',
       features: "What's Included",
     },
   },
   fr: {
    nav: {
      home: 'Accueil',
      projects: 'Projets',
      experiences: 'Expériences',
      blog: 'Blog',
      about: 'À propos',
      contact: 'Contact',
    },
    hero: {
      available: 'Disponible',
      need: 'Développeur PHP/Laravel Full-Stack — Applications Web Sécurisées, Scalables et Modernes',
      solution: 'Solution Digitale',
      tagline: 'Spécialiste Backend | Expert Laravel | Développeur API REST & SaaS',
      description: 'Je suis spécialisé en développement PHP Laravel — APIs REST, plateformes SaaS multi-tenant, systèmes ERP et applications web sur mesure. Architecture propre, code sécurisé, bases de données optimisées.',
      getQuote: 'Demander un Devis',
      viewWork: 'Voir mes Projets',
      downloadCv: 'Télécharger CV',
      contactMe: 'Contactez-moi',
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
      servicesSubtitle: 'Services professionnels de développement PHP/Laravel pour votre entreprise.',
      developerExperience: 'Expertise Technique',
      experienceSubtitle: 'Ma maîtrise des outils backend, frontend et DevOps.',
      myWorkflow: 'Mon Processus',
      testimonials: 'Ce que disent les clients',
      testimonialsSubtitle: 'Les retours des clients et partenaires avec qui j\'ai travaillé.',
      skillsTechnology: 'Compétences',
      skillsSubtitle: 'Technologies que j\'utilise au quotidien pour des applications prêtes pour la production.',
      projectsCompleted: 'Projets Récents',
      projectsSubtitle: 'Projets professionnels et personnels dont je suis fier.',
      showAllProjects: 'Voir tous les Projets',
      getStarted: 'Commencer',
      hiIm: 'Bonjour, je suis',
      resume: 'CV',
      status: 'Développeur PHP/Laravel Full-Stack',
      description: 'Développeur backend du Maroc. Je crée des applications web sécurisées et évolutives avec PHP, Laravel et les technologies modernes.',
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
      description: 'Découvrez mon parcours de développeur PHP/Laravel du Maroc.',
      badge: 'À Propos',
      myHistory: 'Mon Parcours',
      myHistoryDesc: "Je m'appelle Lahcen Idir, 26 ans, développeur full-stack de Casablanca, Maroc. Je suis spécialisé en PHP et Laravel — création d'APIs REST, plateformes SaaS, systèmes ERP et applications web. Je travaille actuellement comme développeur Laravel chez Mandi Tech Info.",
      whatAmIDoing: 'Mon Expertise',
      whatAmIDoingDesc: "Je me concentre sur l'ingénierie backend avec PHP et Laravel — principes SOLID, architecture propre, bases de données MySQL optimisées, APIs REST sécurisées et applications SaaS multi-tenant. Je travaille aussi avec React, Next.js et Tailwind CSS.",
      whatNext: 'Mes Objectifs',
      whatNextDesc: "Mon objectif est de devenir un architecte Laravel de classe mondiale. J'approfondis mes connaissances en Laravel avancé, design patterns, TDD et systèmes distribués.",
      dreamsAndWishes: 'Au-delà du Code',
      dreamsAndWishesDesc: "En dehors du code, j'explore les nouvelles technologies, lis sur l'architecture logicielle et partage mes connaissances. Je crois en un code propre et maintenable qui résout de vrais problèmes. Parlant arabe, français et anglais.",
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
    notfound: {
      title: '404 - Page Non Trouvée',
      description: 'Oups! La page que vous cherchez n\'existe pas.',
      message: 'La page que vous cherchez a peut-être été supprimée, renommée ou est temporairement indisponible.',
      backHome: 'Retour à l\'accueil',
    },
    contact: {
      title: 'Contact',
      description: 'Commençons une conversation. Contactez-moi et je vous répondrai.',
      badge: 'Contactez-moi',
      connectWithMe: 'Me contacter',
      subtitle: 'Choisissez votre moyen préféré pour me contacter.',
      getInTouch: 'Entrer en contact',
      formTitle: 'Envoyer un Message',
      formSubtitle: 'Remplissez le formulaire ci-dessous et je vous répondrai sous 24 heures.',
      formName: 'Votre Nom',
      formEmail: 'Votre Email',
      formSubject: 'Sujet',
      formMessage: 'Votre Message',
      formSend: 'Envoyer',
      formSuccess: 'Message envoyé avec succès!',
      formError: 'Une erreur est survenue. Veuillez réessayer.',
      formSending: 'Envoi en cours...',
      formPlaceholderName: 'Jean Dupont',
      formPlaceholderEmail: 'jean@example.com',
      formPlaceholderSubject: 'Demande de projet',
      formPlaceholderMessage: 'Parlez-moi de votre projet...',
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
       php: 'PHP',
       laravel: 'Laravel',
       mysql: 'MySQL',
       javascript: 'JavaScript',
       react: 'React JS',
       next: 'Next JS',
       tailwind: 'Tailwind CSS',
       bootstrap: 'Bootstrap 5',
       jquery: 'jQuery',
       docker: 'Docker',
       git: 'Git',
       github: 'GitHub',
       composer: 'Composer',
       linux: 'Linux',
       api: 'API REST',
       firebase: 'Firebase',
       html: 'HTML 5',
       css: 'CSS 3',
       nodejs: 'Node JS',
       mongodb: 'MongoDB',
       vite: 'Vite JS',
       java: 'Java',
       vscode: 'Visual Studio Code',
       cpp: 'C++',
       sql: 'SQL',
     },
     faq: {
       title: 'FAQ',
       description: 'Questions fréquentes sur mon travail et mes services.',
       badge: 'FAQ',
     },
     blog: {
       title: 'Blog',
       description: 'Articles techniques sur Laravel, PHP, le développement web et plus.',
       badge: 'Articles',
       readMore: 'Lire plus',
       readTime: 'min de lecture',
       by: 'Par',
       categories: 'Catégories',
       relatedPosts: 'Articles similaires',
       noPosts: 'Aucun article trouvé.',
     },
     services_page: {
       title: 'Services',
       description: 'Services professionnels de développement web adaptés à vos besoins.',
       badge: 'Ce que je propose',
       cta: 'Demander un devis',
       features: 'Ce qui est inclus',
     },
   },
   ar: {
    nav: {
      home: 'الرئيسية',
      projects: 'المشاريع',
      experiences: 'الخبرات',
      blog: 'المدونة',
      about: 'عني',
      contact: 'اتصال',
    },
    hero: {
      available: 'متاح للعمل',
      need: 'مطور PHP/Laravel متكامل — أبني تطبيقات ويب آمنة وقابلة للتطوير',
      solution: 'حل رقمي',
      tagline: 'متخصص في الواجهة الخلفية | خبير Laravel | مطور API REST و SaaS',
      description: 'أنا متخصص في تطوير PHP Laravel — بناء REST APIs، منصات SaaS متعددة المستأجرين، أنظمة ERP، وتطبيقات ويب مخصصة. هندسة نظيفة، كود آمن، قواعد بيانات محسّنة.',
      getQuote: 'اطلب عرض سعر',
      viewWork: 'شاهد أعمالي',
      downloadCv: 'تحميل السيرة الذاتية',
      contactMe: 'اتصل بي',
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
      servicesSubtitle: 'خدمات تطوير PHP/Laravel احترافية لأعمالك.',
      developerExperience: 'خبراتي التقنية',
      experienceSubtitle: 'إتقاني لأدوات الواجهة الخلفية والأمامية و DevOps.',
      myWorkflow: 'سير العمل',
      testimonials: 'ماذا يقول العملاء',
      testimonialsSubtitle: 'آراء العملاء والشركاء الذين عملت معهم.',
      skillsTechnology: 'المهارات والتقنيات',
      skillsSubtitle: 'التقنيات التي أستخدمها يومياً لبناء تطبيقات جاهزة للإنتاج.',
      projectsCompleted: 'مشاريعي المميزة',
      projectsSubtitle: 'مشاريع احترافية وشخصية أفتخر بها.',
      showAllProjects: 'عرض كل المشاريع',
      getStarted: 'ابدأ الآن',
      hiIm: 'أهلاً، أنا',
      resume: 'السيرة الذاتية',
      status: 'مطور PHP/Laravel متكامل',
      description: 'مطور واجهة خلفية من المغرب. أبني تطبيقات ويب آمنة وقابلة للتطوير باستخدام PHP و Laravel والتقنيات الحديثة.',
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
      description: 'اكتشف مسيرتي كمطور PHP/Laravel من المغرب.',
      badge: 'عنواني',
      myHistory: 'مسيرتي',
      myHistoryDesc: 'أهلاً، أنا لحسن إيدير، 26 سنة، مطور ويب متكامل من الدار البيضاء، المغرب. أتخصص في PHP و Laravel — بناء REST APIs، منصات SaaS، أنظمة ERP، وتطبيقات ويب مخصصة. أعمل حالياً كمطور Laravel في Mandi Tech Info.',
      whatAmIDoing: 'خبراتي',
      whatAmIDoingDesc: 'أركز على هندسة الواجهة الخلفية باستخدام PHP و Laravel — مبادئ SOLID، هندسة نظيفة، قواعد بيانات MySQL محسّنة، APIs REST آمنة، وتطبيقات SaaS متعددة المستأجرين. أعمل أيضاً مع React و Next.js و Tailwind CSS.',
      whatNext: 'أهدافي',
      whatNextDesc: 'هدفي هو أن أصبح مهندس Laravel معماري من الطراز العالمي. أعمل على تعميق معرفتي بمفاهيم Laravel المتقدمة، أنماط التصميم، التطوير المبني على الاختبارات، والأنظمة الموزعة.',
      dreamsAndWishes: 'ما وراء البرمجة',
      dreamsAndWishesDesc: 'خارج البرمجة، أستكشف التقنيات الجديدة، أقرأ عن هندسة البرمجيات، وأشارك المعرفة مع المجتمع. أؤمن بكتابة كود نظيف وقابل للصيانة يحل مشاكل حقيقية. أتحدث العربية والفرنسية والإنجليزية.',
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
    notfound: {
      title: '404 - الصفحة غير موجودة',
      description: 'عذراً! الصفحة التي تبحث عنها غير موجودة.',
      message: 'ربما تم حذف الصفحة التي تبحث عنها، أو تغيير اسمها، أو أنها غير متاحة مؤقتاً.',
      backHome: 'العودة للرئيسية',
    },
    contact: {
      title: 'اتصال',
      description: 'دعنا نبدأ محادثة. تواصل معي وسأرد عليك.',
      badge: 'تواصل معي',
      connectWithMe: 'تواصل معي',
      subtitle: 'اختر طريقتك المفضلة للتواصل معي.',
      getInTouch: 'تواصل',
      formTitle: 'أرسل رسالة',
      formSubtitle: 'املأ النموذج أدناه وسأرد عليك خلال 24 ساعة.',
      formName: 'اسمك',
      formEmail: 'بريدك الإلكتروني',
      formSubject: 'الموضوع',
      formMessage: 'رسالتك',
      formSend: 'إرسال الرسالة',
      formSuccess: 'تم إرسال الرسالة بنجاح!',
      formError: 'حدث خطأ ما. حاول مرة أخرى.',
      formSending: 'جارٍ الإرسال...',
      formPlaceholderName: 'محمد أحمد',
      formPlaceholderEmail: 'mohamed@example.com',
      formPlaceholderSubject: 'استفسار عن مشروع',
      formPlaceholderMessage: 'حدثني عن مشروعك...',
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
      php: 'PHP',
      laravel: 'Laravel',
      mysql: 'MySQL',
      javascript: 'JavaScript',
      react: 'React JS',
      next: 'Next JS',
      tailwind: 'Tailwind CSS',
      bootstrap: 'Bootstrap 5',
      jquery: 'jQuery',
      docker: 'Docker',
      git: 'Git',
      github: 'GitHub',
      composer: 'Composer',
      linux: 'Linux',
      api: 'API REST',
      firebase: 'Firebase',
      html: 'HTML 5',
      css: 'CSS 3',
      nodejs: 'Node JS',
      mongodb: 'MongoDB',
      vite: 'Vite JS',
      java: 'Java',
      vscode: 'Visual Studio Code',
      cpp: 'C++',
      sql: 'SQL',
    },
    faq: {
      title: 'الأسئلة الشائعة',
      description: 'أسئلة متكررة حول أعمالي وخدماتي.',
      badge: 'الأسئلة الشائعة',
    },
    blog: {
      title: 'المدونة',
      description: 'مقالات تقنية حول Laravel و PHP وتطوير الويب.',
      badge: 'المقالات',
      readMore: 'اقرأ المزيد',
      readTime: 'دقيقة قراءة',
      by: 'بواسطة',
      categories: 'التصنيفات',
      relatedPosts: 'مقالات ذات صلة',
      noPosts: 'لم يتم العثور على مقالات.',
    },
    services_page: {
      title: 'الخدمات',
      description: 'خدمات تطوير ويب احترافية تناسب احتياجاتك.',
      badge: 'ما أقدمه',
      cta: 'اطلب عرض سعر',
      features: 'ما هو مشمول',
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
