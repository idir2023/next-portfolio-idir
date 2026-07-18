import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      experiences: 'Experiences',
      services: 'Services',
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
     },
     about_items: {
       '0': { name: 'My Background', desc: "Hello, I'm Lahcen Idir, a 26-year-old full-stack web developer from Casablanca, Morocco. I specialize in PHP and Laravel development, with strong experience building REST APIs, SaaS platforms, ERP systems, and custom web applications. I currently work as a Laravel Developer at Mandi Tech Info, where I maintain and extend stock management systems and build new features for clients across Morocco." },
       '1': { name: 'My Expertise', desc: "I focus on backend engineering with PHP and Laravel, following SOLID principles and clean architecture. I design optimized MySQL databases, build secure RESTful APIs, implement role-based access control, and develop multi-tenant SaaS applications. On the frontend, I work with React, Next.js, Tailwind CSS, and Bootstrap to build responsive interfaces. I also use Docker for containerization, Git for version control, and Linux for server management." },
       '2': { name: 'My Goals', desc: "My goal is to become a world-class backend engineer and Laravel architect. I am continuously deepening my knowledge of advanced Laravel concepts, design patterns, test-driven development, and system architecture. I aim to work on large-scale applications that serve thousands of users and contribute to open-source projects in the Laravel ecosystem." },
       '3': { name: 'Beyond Code', desc: "When I'm not coding, I enjoy exploring new technologies, reading about software architecture, and sharing knowledge with the developer community. I believe in writing clean, readable code and building software that makes a real difference for businesses and users. I'm fluent in Arabic, French, and English." },
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
      '0': {
        name: 'Laravel Development',
        desc: 'Custom Laravel application development including MVC architecture, Eloquent ORM, Artisan commands, queues, events, and caching.',
        features: ['Custom MVC Architecture', 'Eloquent ORM & Migrations', 'Artisan CLI Development', 'Queues & Job Scheduling', 'Event Broadcasting & Caching'],
      },
      '1': {
        name: 'PHP Development',
        desc: 'Professional PHP development with clean, secure, and maintainable code following PSR standards and best practices.',
        features: ['PSR Standards Compliance', 'OOP & MVC Architecture', 'Secure Input Validation', 'Session & Cookie Management', 'PDO & Database Abstraction'],
      },
      '2': {
        name: 'REST API Development',
        desc: 'Secure and well-documented RESTful APIs with JWT/OAuth authentication, versioning, and rate limiting.',
        features: ['JWT & OAuth2 Authentication', 'API Versioning Strategy', 'Request Validation & Rate Limiting', 'Swagger/OpenAPI Documentation', 'Postman Collection'],
      },
      '3': {
        name: 'SaaS & ERP Development',
        desc: 'End-to-end SaaS platform and ERP system development with multi-tenancy, billing, and reporting modules.',
        features: ['Multi-Tenancy Architecture', 'Subscription & Billing', 'Role-Based Access Control', 'Reporting & Analytics', 'Third-Party Integrations'],
      },
      '4': {
        name: 'Database Design',
        desc: 'Optimized database architecture with proper indexing, normalization, relationships, and query optimization for high performance.',
        features: ['ERD & Schema Design', 'MySQL Query Optimization', 'Indexing Strategies', 'Data Migration Planning', 'Backup & Recovery Setup'],
      },
      '5': {
        name: 'POS & Dashboard Systems',
        desc: 'Real-time point-of-sale systems and admin dashboards with live updates, inventory management, and detailed analytics.',
        features: ['Real-Time Inventory Tracking', 'Sales & Payment Processing', 'Role-Based Dashboards', 'PDF/Excel Reporting', 'Barcode & QR Code Support'],
      },
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
     faq_items: {
       '0': { question: 'What is your main area of expertise?', answer: 'I specialize in backend development with PHP and Laravel. I build REST APIs, SaaS platforms, ERP systems, custom dashboards, and database architectures. I also work with frontend technologies like React and Tailwind CSS for full-stack projects.' },
       '1': { question: 'What technologies do you use?', answer: 'My primary stack is PHP/Laravel for backend, MySQL for databases, and Bootstrap/Tailwind CSS for frontend. I also work with React, Next.js, jQuery, Docker, Git, and Linux servers.' },
       '2': { question: 'What kind of projects have you worked on?', answer: 'I have built SaaS platforms (DivinDeep, Clinic SaaS), ERP systems, e-commerce platforms, law firm management systems, laundry service management (Afrilavage), task management tools, and more. My projects serve real clients in production.' },
       '3': { question: 'Do you have experience with REST APIs?', answer: 'Yes, I have extensive experience designing and building RESTful APIs with Laravel. I implement JWT authentication, API versioning, rate limiting, request validation, and comprehensive documentation using OpenAPI/Swagger standards.' },
       '4': { question: 'What is your development workflow?', answer: 'I follow a structured workflow: requirements analysis, database design, backend development, frontend integration, testing, and deployment. I use Git for version control, Docker for environment consistency, and follow clean architecture and SOLID principles.' },
       '5': { question: 'Do you work with databases?', answer: 'Yes, I design and optimize MySQL databases as a core part of my work. I create ERDs, write efficient queries, implement indexing strategies, and design normalized schemas with proper relationships for performance and data integrity.' },
     },
     testimonials: {
       '0': { text: 'Idir delivered our SaaS platform ahead of schedule. His Laravel expertise is outstanding — clean code, solid database design, and excellent API architecture. Would definitely work with him again.', role: 'Founder, DivinDeep' },
       '1': { text: 'Idir has been a valuable member of our team. He consistently delivers quality work on Laravel projects and has a strong understanding of backend architecture. His problem-solving skills are impressive.', role: 'Project Manager, Mandi Tech Info' },
       '2': { text: 'We hired Idir to build our e-commerce backend API. The result was well-structured, well-documented, and performed excellently under load. Professional communication throughout the project.', role: 'CTO, TechStart Maroc' },
       '3': { text: 'Reliable, skilled, and professional. Idir transformed our legacy PHP system into a modern Laravel application with proper MVC architecture. Performance improved dramatically.', role: 'CEO, WebSolutions Agency' },
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
     workflow: {
       '0': { title: 'Requirements Analysis', desc: 'Understanding business needs, defining scope, and planning architecture' },
       '1': { title: 'Database Design', desc: 'ERD modeling, migrations, relationships, and query optimization' },
       '2': { title: 'Backend Development', desc: 'Building REST APIs, business logic, authentication, and middleware' },
       '3': { title: 'Frontend Integration', desc: 'Connecting UI with APIs, state management, and responsive design' },
       '4': { title: 'Testing & QA', desc: 'Unit testing, integration testing, bug fixing, and performance tuning' },
       '5': { title: 'Deployment & Support', desc: 'Server setup, CI/CD, monitoring, and ongoing maintenance' },
     },
   },
   fr: {
    nav: {
      home: 'Accueil',
      projects: 'Projets',
      experiences: 'Expériences',
      services: 'Services',
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
     },
     about_items: {
       '0': { name: 'Mon Parcours', desc: "Bonjour, je suis Lahcen Idir, 26 ans, développeur web full-stack de Casablanca, Maroc. Je suis spécialisé en PHP et Laravel, avec une solide expérience dans la création d'APIs REST, de plateformes SaaS, de systèmes ERP et d'applications web sur mesure. Je travaille actuellement comme développeur Laravel chez Mandi Tech Info." },
       '1': { name: 'Mon Expertise', desc: "Je me concentre sur l'ingénierie backend avec PHP et Laravel, en suivant les principes SOLID et une architecture propre. Je conçois des bases de données MySQL optimisées, construis des APIs REST sécurisées, implémente le contrôle d'accès basé sur les rôles et développe des applications SaaS multi-tenant. Côté frontend, je travaille avec React, Next.js, Tailwind CSS et Bootstrap. J'utilise aussi Docker, Git et Linux." },
       '2': { name: 'Mes Objectifs', desc: "Mon objectif est de devenir un ingénieur backend et un architecte Laravel de classe mondiale. J'approfondis continuellement mes connaissances des concepts avancés de Laravel, des design patterns, du développement piloté par les tests et de l'architecture système. Je vise à travailler sur des applications à grande échelle." },
       '3': { name: 'Au-delà du Code', desc: "Quand je ne code pas, j'aime explorer les nouvelles technologies, lire sur l'architecture logicielle et partager mes connaissances avec la communauté des développeurs. Je crois en l'écriture d'un code propre et lisible. Je parle arabe, français et anglais." },
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
      '0': {
        name: 'Développement Laravel',
        desc: 'Développement d\'applications Laravel sur mesure incluant architecture MVC, Eloquent ORM, commandes Artisan, files d\'attente, événements et caching.',
        features: ['Architecture MVC personnalisée', 'Eloquent ORM & Migrations', 'Développement Artisan CLI', 'Files d\'attente & Planification', 'Diffusion d\'événements & Caching'],
      },
      '1': {
        name: 'Développement PHP',
        desc: 'Développement PHP professionnel avec un code propre, sécurisé et maintenable suivant les normes PSR et les bonnes pratiques.',
        features: ['Conformité aux normes PSR', 'Architecture OOP & MVC', 'Validation sécurisée des entrées', 'Gestion des sessions & Cookies', 'PDO & Abstraction de base de données'],
      },
      '2': {
        name: 'Développement API REST',
        desc: 'APIs RESTful sécurisées et bien documentées avec authentification JWT/OAuth, versioning et limitation de débit.',
        features: ['Authentification JWT & OAuth2', 'Stratégie de versioning API', 'Validation des requêtes & Rate Limiting', 'Documentation Swagger/OpenAPI', 'Collection Postman'],
      },
      '3': {
        name: 'Développement SaaS & ERP',
        desc: 'Développement de plateformes SaaS et systèmes ERP de bout en bout avec multi-locataire, facturation et modules de reporting.',
        features: ['Architecture multi-locataire', 'Abonnement & Facturation', 'Contrôle d\'accès basé sur les rôles', 'Reporting & Analytique', 'Intégrations tierces'],
      },
      '4': {
        name: 'Conception de Bases de Données',
        desc: 'Architecture de base de données optimisée avec indexation, normalisation, relations et optimisation des requêtes pour de hautes performances.',
        features: ['Conception ERD & Schéma', 'Optimisation des requêtes MySQL', 'Stratégies d\'indexation', 'Planification de migration de données', 'Configuration de sauvegarde & Restauration'],
      },
      '5': {
        name: 'Systèmes POS & Tableaux de Bord',
        desc: 'Systèmes de point de vente en temps réel et tableaux de bord d\'administration avec mises à jour en direct, gestion des stocks et analyses détaillées.',
        features: ['Suivi des stocks en temps réel', 'Traitement des ventes & Paiements', 'Tableaux de bord basés sur les rôles', 'Rapports PDF/Excel', 'Support codes-barres & QR'],
      },
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
     faq_items: {
       '0': { question: 'Quel est votre domaine d\'expertise principal ?', answer: 'Je suis spécialisé dans le développement backend avec PHP et Laravel. Je construis des APIs REST, des plateformes SaaS, des systèmes ERP, des tableaux de bord personnalisés et des architectures de bases de données.' },
       '1': { question: 'Quelles technologies utilisez-vous ?', answer: 'Ma stack principale est PHP/Laravel pour le backend, MySQL pour les bases de données, et Bootstrap/Tailwind CSS pour le frontend. Je travaille aussi avec React, Next.js, jQuery, Docker, Git et les serveurs Linux.' },
       '2': { question: 'Quels types de projets avez-vous réalisés ?', answer: 'J\'ai construit des plateformes SaaS (DivinDeep, Clinic SaaS), des systèmes ERP, des plateformes e-commerce, des systèmes de gestion de cabinet d\'avocats, de gestion de blanchisserie (Afrilavage), des outils de gestion de tâches, et plus encore.' },
       '3': { question: 'Avez-vous de l\'expérience avec les APIs REST ?', answer: 'Oui, j\'ai une vaste expérience dans la conception et la construction d\'APIs RESTful avec Laravel. J\'implémente l\'authentification JWT, le versionnage d\'API, la limitation de débit, la validation des requêtes et une documentation complète avec OpenAPI/Swagger.' },
       '4': { question: 'Quel est votre processus de développement ?', answer: 'Je suis un processus structuré : analyse des besoins, conception de la base de données, développement backend, intégration frontend, tests et déploiement. J\'utilise Git, Docker, et je suis les principes d\'architecture propre et SOLID.' },
       '5': { question: 'Travaillez-vous avec les bases de données ?', answer: 'Oui, je conçois et optimise les bases de données MySQL. Je crée des ERDs, écris des requêtes efficaces, implémente des stratégies d\'indexation et conçois des schémas normalisés pour la performance et l\'intégrité des données.' },
     },
     testimonials: {
       '0': { text: 'Idir a livré notre plateforme SaaS en avance. Son expertise Laravel est exceptionnelle — code propre, conception de base de données solide et architecture API excellente. Je travaillerais volontiers avec lui à nouveau.', role: 'Fondateur, DivinDeep' },
       '1': { text: 'Idir est un membre précieux de notre équipe. Il livre constamment un travail de qualité sur les projets Laravel et a une solide compréhension de l\'architecture backend. Ses compétences en résolution de problèmes sont impressionnantes.', role: 'Chef de Projet, Mandi Tech Info' },
       '2': { text: 'Nous avons engagé Idir pour construire notre API backend e-commerce. Le résultat était bien structuré, bien documenté et performant sous charge. Communication professionnelle tout au long du projet.', role: 'CTO, TechStart Maroc' },
       '3': { text: 'Fiable, compétent et professionnel. Idir a transformé notre ancien système PHP en une application Laravel moderne avec une architecture MVC appropriée. Les performances se sont considérablement améliorées.', role: 'PDG, WebSolutions Agency' },
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
     workflow: {
       '0': { title: 'Analyse des besoins', desc: 'Compréhension des besoins métier, définition du périmètre et planification de l\'architecture' },
       '1': { title: 'Conception de la base de données', desc: 'Modélisation ERD, migrations, relations et optimisation des requêtes' },
       '2': { title: 'Développement Backend', desc: 'Construction d\'APIs REST, logique métier, authentification et middleware' },
       '3': { title: 'Intégration Frontend', desc: 'Connexion de l\'interface avec les APIs, gestion d\'état et design responsive' },
       '4': { title: 'Tests & QA', desc: 'Tests unitaires, tests d\'intégration, correction de bugs et optimisation des performances' },
       '5': { title: 'Déploiement & Support', desc: 'Configuration serveur, CI/CD, monitoring et maintenance continue' },
     },
   },
   ar: {
    nav: {
      home: 'الرئيسية',
      projects: 'المشاريع',
      experiences: 'الخبرات',
      services: 'خدماتي',
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
     },
     about_items: {
       '0': { name: 'مسيرتي', desc: 'أهلاً، أنا لحسن إيدير، 26 سنة، مطور ويب متكامل من الدار البيضاء، المغرب. أتخصص في PHP و Laravel، ولدي خبرة قوية في بناء REST APIs، منصات SaaS، أنظمة ERP، وتطبيقات ويب مخصصة. أعمل حالياً كمطور Laravel في Mandi Tech Info حيث أقوم بصيانة وتطوير أنظمة إدارة المخزون.' },
       '1': { name: 'خبراتي', desc: 'أركز على هندسة الواجهة الخلفية باستخدام PHP و Laravel، متبعاً مبادئ SOLID والهندسة النظيفة. أصمم قواعد بيانات MySQL محسّنة، أبني APIs REST آمنة، أطبق التحكم في الوصول بالأدوار، وأطور تطبيقات SaaS متعددة المستأجرين. في الواجهة الأمامية، أعمل مع React و Next.js و Tailwind CSS و Bootstrap. كما أستخدم Docker و Git و Linux.' },
       '2': { name: 'أهدافي', desc: 'هدفي هو أن أصبح مهندس واجهة خلفية ومعمار Laravel من الطراز العالمي. أعمل بعمق على تعزيز معرفتي بمفاهيم Laravel المتقدمة، أنماط التصميم، التطوير المبني على الاختبارات، وهندسة النظم. أطمح للعمل على تطبيقات واسعة النطاق تخدم آلاف المستخدمين.' },
       '3': { name: 'ما وراء البرمجة', desc: 'عندما لا أبرمج، أستمتع باستكشاف التقنيات الجديدة، القراءة عن هندسة البرمجيات، ومشاركة المعرفة مع مجتمع المطورين. أؤمن بكتابة كود نظيف وقابل للقراءة وبناء برامج تُحدث فرقاً حقيقياً. أتحدث العربية والفرنسية والإنجليزية.' },
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
      '0': {
        name: 'تطوير Laravel',
        desc: 'تطوير تطبيقات Laravel مخصصة تشمل بنية MVC، Eloquent ORM، أوامر Artisan، قوائم الانتظار، الأحداث، والتخزين المؤقت.',
        features: ['بنية MVC مخصصة', 'Eloquent ORM والترحيلات', 'تطوير Artisan CLI', 'قوائم الانتظار وجدولة المهام', 'بث الأحداث والتخزين المؤقت'],
      },
      '1': {
        name: 'تطوير PHP',
        desc: 'تطوير PHP احترافي بكود نظيف وآمن وقابل للصيانة وفقاً لمعايير PSR وأفضل الممارسات.',
        features: ['الامتثال لمعايير PSR', 'بنية OOP و MVC', 'التحقق الآمن من المدخلات', 'إدارة الجلسات وملفات تعريف الارتباط', 'PDO وتجريد قاعدة البيانات'],
      },
      '2': {
        name: 'تطوير REST API',
        desc: 'واجهات برمجة تطبيقات RESTful آمنة وموثقة جيداً مع مصادقة JWT/OAuth، وإدارة الإصدارات، وتحديد المعدل.',
        features: ['مصادقة JWT و OAuth2', 'استراتيجية إدارة إصدارات API', 'التحقق من الطلبات وتحديد المعدل', 'توثيق Swagger/OpenAPI', 'مجموعة Postman'],
      },
      '3': {
        name: 'تطوير SaaS و ERP',
        desc: 'تطوير منصات SaaS وأنظمة ERP شاملة مع تعدد المستأجرين، الفوترة، ووحدات التقارير.',
        features: ['بنية متعددة المستأجرين', 'الاشتراكات والفواتير', 'التحكم في الوصول بالأدوار', 'التقارير والتحليلات', 'تكاملات الطرف الثالث'],
      },
      '4': {
        name: 'تصميم قواعد البيانات',
        desc: 'بنية قاعدة بيانات محسنة مع فهرسة مناسبة، تطبيع، علاقات، وتحسين استعلامات للأداء العالي.',
        features: ['تصميم ERD والمخطط', 'تحسين استعلامات MySQL', 'استراتيجيات الفهرسة', 'تخطيط ترحيل البيانات', 'إعداد النسخ الاحتياطي والاستعادة'],
      },
      '5': {
        name: 'أنظمة نقاط البيع ولوحات التحكم',
        desc: 'أنظمة نقاط بيع فورية ولوحات تحكم إدارية مع تحديثات حية، إدارة المخزون، وتحليلات مفصلة.',
        features: ['تتبع المخزون الفوري', 'معالجة المبيعات والمدفوعات', 'لوحات تحكم حسب الأدوار', 'تقارير PDF/Excel', 'دعم الباركود ورموز QR'],
      },
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
     faq_items: {
       '0': { question: 'ما هو مجال خبرتك الرئيسي؟', answer: 'أنا متخصص في تطوير الواجهة الخلفية باستخدام PHP و Laravel. أبني REST APIs، منصات SaaS، أنظمة ERP، لوحات تحكم مخصصة، وهياكل قواعد البيانات.' },
       '1': { question: 'ما هي التقنيات التي تستخدمها؟', answer: 'مجموعتي الأساسية هي PHP/Laravel للواجهة الخلفية، MySQL لقواعد البيانات، و Bootstrap/Tailwind CSS للواجهة الأمامية. أعمل أيضاً مع React و Next.js و jQuery و Docker و Git وخوادم Linux.' },
       '2': { question: 'ما أنواع المشاريع التي عملت عليها؟', answer: 'قمت ببناء منصات SaaS (DivinDeep، Clinic SaaS)، أنظمة ERP، منصات تجارة إلكترونية، أنظمة إدارة مكاتب المحاماة، إدارة خدمات الغسيل (Afrilavage)، أدوات إدارة المهام، والمزيد. مشاريعي تخدم عملاء حقيقيين في الإنتاج.' },
       '3': { question: 'هل لديك خبرة مع REST APIs؟', answer: 'نعم، لدي خبرة واسعة في تصميم وبناء APIs RESTful باستخدام Laravel. أطبق مصادقة JWT، إدارة إصدارات API، تحديد المعدل، التحقق من الطلبات، وتوثيق شامل باستخدام معايير OpenAPI/Swagger.' },
       '4': { question: 'ما هو سير عملك في التطوير؟', answer: 'أتبع سير عمل منظم: تحليل المتطلبات، تصميم قاعدة البيانات، تطوير الواجهة الخلفية، تكامل الواجهة الأمامية، الاختبار، والنشر. أستخدم Git للتحكم في الإصدارات و Docker لتناسق البيئة.' },
       '5': { question: 'هل تعمل مع قواعد البيانات؟', answer: 'نعم، أصمم وأحسّن قواعد بيانات MySQL كجزء أساسي من عملي. أنشئ ERDs، وأكتب استعلامات فعالة، وأطبق استراتيجيات الفهرسة، وأصمم مخططات طبيعية بالأداء وسلامة البيانات.' },
     },
     testimonials: {
       '0': { text: 'سلمنا Idir منصة SaaS قبل الموعد المحدد. خبرته في Laravel استثنائية — كود نظيف، تصميم قاعدة بيانات متين، وهندسة API ممتازة. سأعمل معه بالتأكيد مرة أخرى.', role: 'مؤسس، DivinDeep' },
       '1': { text: 'Idir عضو قيم في فريقنا. يسلم باستمرار عملاً عالي الجودة في مشاريع Laravel ولديه فهم قوي لهندسة الواجهة الخلفية. مهاراته في حل المشكلات مثيرة للإعجاب.', role: 'مدير مشروع، Mandi Tech Info' },
       '2': { text: 'وظفنا Idir لبناء API الواجهة الخلفية للتجارة الإلكترونية. كانت النتيجة جيدة التنظيم، موثقة بشكل جيد، وأداء ممتاز تحت الضغط. تواصل احترافي طوال المشروع.', role: 'المدير التقني، TechStart Maroc' },
       '3': { text: 'موثوق، ماهر، ومحترف. حول Idir نظام PHP القديم لدينا إلى تطبيق Laravel حديث مع بنية MVC مناسبة. تحسن الأداء بشكل كبير.', role: 'الرئيس التنفيذي، WebSolutions Agency' },
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
    workflow: {
      '0': { title: 'تحليل المتطلبات', desc: 'فهم احتياجات العمل، تحديد النطاق، وتخطيط البنية' },
      '1': { title: 'تصميم قاعدة البيانات', desc: 'نمذجة ERD، الترحيلات، العلاقات، وتحسين الاستعلامات' },
      '2': { title: 'تطوير الواجهة الخلفية', desc: 'بناء REST APIs، منطق الأعمال، المصادقة، والوسائط' },
      '3': { title: 'تكامل الواجهة الأمامية', desc: 'ربط واجهة المستخدم بـ APIs، إدارة الحالة، والتصميم المتجاوب' },
      '4': { title: 'الاختبار وضمان الجودة', desc: 'الاختبارات الوحدوية، اختبارات التكامل، إصلاح الأخطاء، وضبط الأداء' },
      '5': { title: 'النشر والدعم', desc: 'إعداد الخادم، CI/CD، المراقبة، والصيانة المستمرة' },
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
