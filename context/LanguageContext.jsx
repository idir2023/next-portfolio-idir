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
      myHistoryDesc: "Hello, my name is Lahcen Idir. I'm from Morocco and I'm 23 years old. I'm a web developer specializing in PHP Laravel. Currently, I'm working as an intern for Mandi Tech Info, a company based in Morocco, where I've been for 8 months. Before my time there, I've worked on various web projects such as hospital management systems, invoicing platforms, and online recruitment portals.",
      whatAmIDoing: 'What I Do',
      whatAmIDoingDesc: "I am currently focusing on learning front-end frameworks such as React and Next.js, alongside honing my backend skills, with a particular emphasis on mastering user-friendly technologies like Node.js and Express.js. Keeping pace with the latest technological advancements, I am dedicated to continuously expanding my knowledge and applying emerging concepts. Concurrently, I am actively crafting my portfolio through the development of personal projects, ensuring practical application of my evolving skill set.",
      whatNext: 'My Goals',
      whatNextDesc: "My goal now is to master Front-End and Back-End technology. So that I can build a solution to an existing problem easily. Even though it is not easy and it takes a long time, I believe I can achieve it if I practice and learn continuously.",
      dreamsAndWishes: 'My Dreams',
      dreamsAndWishesDesc: "I aspire to join prestigious companies such as Google or Microsoft, targeting roles in software development engineering or front-end development. I am committed to diligently pursuing these opportunities, continuously enhancing my skills and knowledge until I achieve my goals. My ultimate aim is to become an inspiration to others and serve as a mentor, guiding individuals toward creating a brighter future.",
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
      myHistoryDesc: "Je m'appelle Lahcen Idir. Je viens du Maroc et j'ai 23 ans. Je suis développeur web spécialisé en PHP Laravel. Actuellement, je travaille en tant que stagiaire chez Mandi Tech Info, une entreprise au Maroc, depuis 8 mois. Avant cela, j'ai travaillé sur divers projets web comme des systèmes de gestion hospitalière, des plateformes de facturation et des portails de recrutement en ligne.",
      whatAmIDoing: 'Ce que je fais',
      whatAmIDoingDesc: "Je me concentre actuellement sur l'apprentissage des frameworks front-end comme React et Next.js, tout en perfectionnant mes compétences back-end, avec un accent particulier sur la maîtrise de technologies conviviales comme Node.js et Express.js. Je suis déterminé à continuously élargir mes connaissances et appliquer les nouveaux concepts. Parallèlement, je développe activement mon portfolio à travers des projets personnels.",
      whatNext: 'Objectifs',
      whatNextDesc: "Mon objectif est de maîtriser les technologies Front-End et Back-End. Afin de pouvoir construire facilement des solutions aux problèmes existants. Bien que ce ne soit pas facile et prenne du temps, je crois pouvoir y arriver si je pratique et apprends continuellement.",
      dreamsAndWishes: 'Rêves',
      dreamsAndWishesDesc: "J'aspire à rejoindre des entreprises prestigieuses comme Google ou Microsoft, en ciblant des postes en ingénierie de développement logiciel ou en développement front-end. Je suis déterminé à poursuivre ces opportunités, à améliorer continuellement mes compétences jusqu'à atteindre mes objectifs. Mon ultime ambition est de devenir une inspiration pour les autres et de servir de mentor.",
    },
    experiences: {
      title: 'Expériences',
      description: 'Mon parcours professionnel.',
      workExperience: 'Expériences Professionnelles',
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
                { name: 'Évaluation et retour sur les écrits générés par l\'IA.' }
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
      myHistoryDesc: 'اسمي لحسن إيدير. عمري 23 سنة من المغرب. مطور ويب متخصص في PHP Laravel. حالياً أعمل كمتدرب في شركة Mandi Tech Info في المغرب منذ 8 أشهر. قبل ذلك، عملت على مشاريع ويب مختلفة مثل أنظمة إدارة المستشفيات ومنصات الفواتير.',
      whatAmIDoing: 'ما أفعله',
      whatAmIDoingDesc: 'أركز حالياً على تعلم أطر العمل الأمامية مثل React و Next.js، إلى جانب صقل مهاراتي الخلفية، مع التركيز بشكل خاص على إتقان تقنيات سهلة الاستخدام مثل Node.js و Express.js. أسعى باستمرار لتوسيع معارفي وتطبيق المفاهيم الجديدة. كما أطور نشطاً محفظتي من خلال المشاريع الشخصية.',
      whatNext: 'أهدافي',
      whatNextDesc: 'هدفي هو إتقان تقنيات الواجهة الأمامية والخلفية.，以便能够轻松构建现有问题的解决方案. على الرغم من أنه ليس سهلاً ويستغرق وقتاً طويلاً، أعتقد أنني يمكنني تحقيقه إذا تدربت وتعلمت باستمرار.',
      dreamsAndWishes: 'أحلامي',
      dreamsAndWishesDesc: 'أسعى للانضمام إلى شركات مرموقة مثل Google أو Microsoft،Targeting أدوار في هندسة تطوير البرمجيات أو تطوير الواجهة الأمامية. أنا ملزم بهذه الفرصة، وأعمل باستمرار على تعزيز مهاراتي ومعرفتي حتى أ дости أهدافي. هدفي النهائي هو أن أصبح مصدر إلهام للآخرين وأعمل كمعلم.',
    },
    experiences: {
      title: 'Experiences',
      description: 'My work experience.',
      workExperience: 'My Work Experiences',
      education: 'Education',
      contents: [
        {
          title: 'My Work Experiences',
          items: [
            {
              timestamp: '01 Jan 2023 - 01 Sep 2024',
              name: 'Fiverr',
              info: 'Freelance Web Developer',
              description: 'Started freelancing as a remote back-end & front-end developer.',
              list: [
                { name: 'Crafting engaging user interfaces with NextJS, SCSS, and React.' }
              ]
            },
            {
              timestamp: '01 Apr 2023 - 01 Jun 2023',
              name: 'Project Fin d\'étude',
              info: 'Full Stack Web Developer',
              description: 'Developed a hospital management system with multiple functionalities.',
              list: [
                { name: 'Crafting engaging user interfaces with HTML, CSS, and Bootstrap.' },
                { name: 'Developing front-end responsive applications and implementing PHP.' }
              ]
            },
            {
              timestamp: '01 Oct 2023 - 15 Jun 2024',
              name: 'Mandi Tech Info',
              info: 'Software Engineer',
              description: 'Resolved errors, added new tasks to the stock management system.',
              list: [
                { name: 'Collaborated with internal and outsourced partners on software development.' }
              ]
            },
            {
              timestamp: '01 Feb 2023 - 01 May 2023',
              name: 'FST',
              info: 'Software Engineer',
              description: 'Built an online recruitment system with web technologies.',
              list: [
                { name: 'Evaluated and provided feedback on AI-generated writing.' }
              ]
            }
          ]
        }
      ]
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