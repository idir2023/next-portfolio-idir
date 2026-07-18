import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import USER from '../data/user.json';
import AppSection from '../components/molecules/AppSection';
import AppProject from '../components/atomics/AppProject';
import AppShell from '../components/templates/AppShell';
import { useLanguage } from '../context/LanguageContext';

const servicesIcons = [
  '/images/service-website.svg',
  '/images/service-webapps.svg',
  '/images/service-rwd.svg',
  '/images/service-performance.svg',
  '/images/service-performance.svg',
  '/images/service-webapps.svg',
];

const skillKeyMap = {
  'PHP': 'skills.php',
  'Laravel': 'skills.laravel',
  'MySQL': 'skills.mysql',
  'JavaScript': 'skills.javascript',
  'React JS': 'skills.react',
  'Next JS': 'skills.next',
  'TailwindCss': 'skills.tailwind',
  'Bootstrap 5': 'skills.bootstrap',
  'jQuery': 'skills.jquery',
  'Docker': 'skills.docker',
  'Git': 'skills.git',
  'Github': 'skills.github',
  'Composer': 'skills.composer',
  'Linux': 'skills.linux',
  'API': 'skills.api',
  'Firebase': 'skills.firebase',
  'HTML 5': 'skills.html',
  'CSS 3': 'skills.css',
  'Node JS': 'skills.nodejs',
  'MongoDB': 'skills.mongodb',
  'Vite JS': 'skills.vite',
  'Java': 'skills.java',
  'Visual Studio Code': 'skills.vscode',
  'C++': 'skills.cpp',
  'Sql': 'skills.sql',
};

const CircularProgress = ({ level, size = 70, strokeWidth = 5, color }) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef(null);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const targetOffset = circumference - (level / 100) * circumference;
          setTimeout(() => setOffset(targetOffset), 200);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level, circumference]);

  return (
    <div ref={ref} className="circular-progress group">
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={`url(#grad-${level})`}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="progress-ring"
        />
        <defs>
          <linearGradient id={`grad-${level}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="100%" stopColor={color || '#8B5CF6'} />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-sm font-bold text-light group-hover:text-primary transition-colors">{level}%</span>
      </div>
    </div>
  );
};

const SkillBar = ({ name, level, years, delay, color }) => {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), 300);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div ref={ref} className="animate-fade-in group" style={{ animationDelay: `${delay}s` }}>
      <div className="flex items-center gap-3 mb-2">
        <CircularProgress level={level} size={44} strokeWidth={4} color={color} />
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-center mb-0.5">
            <span className="text-sm font-medium text-light/90 group-hover:text-primary transition-colors truncate">{name}</span>
            <span className="text-[10px] text-muted/50 ml-2 whitespace-nowrap">{years}y exp</span>
          </div>
          <div className="h-1.5 bg-surface/60 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-1000 ease-out ${color || 'bg-gradient-to-r from-primary via-secondary to-accent'}`}
              style={{ width: `${width}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const WorkflowStep = ({ step, index, total }) => {
  const { t } = useLanguage();
  return (
    <div className="relative group" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="flex items-start gap-4">
        <div className="flex flex-col items-center">
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-xs shadow-lg transition-all duration-500 ${
            index === 0
              ? 'bg-gradient-to-br from-primary to-secondary shadow-primary/30'
              : index === total - 1
              ? 'bg-gradient-to-br from-accent to-pink-500 shadow-accent/30'
              : 'bg-surface border border-white/10 group-hover:border-primary/40 group-hover:shadow-primary/20 group-hover:shadow-lg'
          }`}>
            {step}
          </div>
          {index < total - 1 && (
            <div className="w-px h-full min-h-[2rem] bg-gradient-to-b from-primary/20 to-transparent mt-1.5" />
          )}
        </div>
        <div className="flex-1 pb-5">
          <h4 className="text-sm font-semibold text-light group-hover:text-primary transition-colors">{t(`workflow.${index}.title`)}</h4>
          <p className="text-xs text-muted/60 mt-0.5 leading-relaxed">{t(`workflow.${index}.desc`)}</p>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(0);
  const devExp = USER.developer_experience;

  return (
    <div>
      <AppShell hero>
        <AppSection
          id="services"
          title={t('home.whatCanIDo')}
          subtitle={t('home.servicesSubtitle')}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
            {USER.services.slice(0, 6).map((item, index) => (
              <div
                key={item.id}
                className="service-card p-8 rounded-2xl animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-5 shadow-lg shadow-primary/10">
                  <Image src={servicesIcons[index]} alt={t(`services.${index}.name`)} width={34} height={34} />
                </div>
                <h3 className="text-xl font-semibold text-light mb-3">
                  {t(`services.${index}.name`)}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-5">
                  {t(`services.${index}.desc`)}
                </p>
                <ul className="space-y-2.5">
                  {item.features.slice(0, 4).map((feature, fi) => (
                    <li key={fi} className="flex items-center gap-2 text-xs text-muted">
                      <i className="fas fa-check-circle text-primary text-xs flex-shrink-0" />
                      <span>{t(`services.${index}.features.${fi}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full btn-gradient text-white font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40"
            >
              {t('home.getStarted')}
              <i className="fas fa-arrow-right text-xs" />
            </Link>
          </div>
        </AppSection>

        <AppSection
          id="experience"
          title={t('home.developerExperience')}
          subtitle={t('home.experienceSubtitle')}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 reveal">
            <div className="lg:col-span-3">
              <div className="flex flex-wrap gap-2 mb-8">
                {devExp.expertise.map((cat, index) => (
                  <button
                    key={cat.category}
                    onClick={() => setActiveCategory(index)}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                      activeCategory === index
                        ? `bg-gradient-to-r ${cat.color} text-white shadow-lg`
                        : 'bg-surface/30 border border-white/10 text-muted hover:text-light hover:border-primary/30'
                    }`}
                  >
                    <i className={`${cat.icon} text-xs`} />
                    {t(`experience.${cat.category.replace(/[ &]/g, '')}`)}
                  </button>
                ))}
              </div>
              <div className="glass-premium rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-sm font-semibold text-light/80 uppercase tracking-wider">
                    {t(`experience.${devExp.expertise[activeCategory].category.replace(/[ &]/g, '')}`)}
                  </h4>
                  <span className="text-xs text-muted">{devExp.expertise[activeCategory].skills.length} skills</span>
                </div>
                <div className="space-y-5">
                  {devExp.expertise[activeCategory].skills.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      years={skill.years}
                      delay={i * 0.1}
                      color={`bg-gradient-to-r ${devExp.expertise[activeCategory].color}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="glass-premium rounded-2xl p-6 h-full">
                <h4 className="text-sm font-semibold text-light/80 uppercase tracking-wider mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  {t('home.myWorkflow')}
                </h4>
                <div className="space-y-0">
                  {devExp.workflow.map((step, i) => (
                    <WorkflowStep key={step.step} {...step} index={i} total={devExp.workflow.length} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AppSection>

        <AppSection
          id="faq"
          title={t('faq.title')}
          subtitle={t('faq.description')}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 reveal">
            {USER.faq.slice(0, 6).map((item, index) => (
              <div
                key={item.id}
                className="glass-premium rounded-2xl p-5 group hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">
                    {String(item.id).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-light mb-1.5 group-hover:text-primary transition-colors">{t(`faq_items.${index}.question`)}</h3>
                    <p className="text-xs text-muted/70 leading-relaxed">{t(`faq_items.${index}.answer`)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AppSection>

        <AppSection
          id="testimonials"
          title={t('home.testimonials')}
          subtitle={t('home.testimonialsSubtitle')}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 reveal">
            {USER.testimonials.map((item, index) => (
              <div
                key={item.id}
                className="glass-premium rounded-2xl p-6 animate-slide-up relative overflow-hidden group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <i className="fas fa-quote-right absolute top-4 right-4 text-3xl text-primary/10 group-hover:text-primary/20 transition-all" />
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star text-accent text-xs" />
                  ))}
                </div>
                <p className="text-muted text-sm leading-relaxed mb-5 italic">
                  &ldquo;{t(`testimonials.${index}.text`)}&rdquo;
                </p>
                <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-light">{item.name}</h4>
                    <p className="text-[11px] text-muted">{t(`testimonials.${index}.role`)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AppSection>

        <AppSection
          id="skills"
          title={t('home.skillsTechnology')}
          subtitle={t('home.skillsSubtitle')}
        >
          <div className="flex flex-wrap gap-3 justify-center reveal">
            {USER.skills.map((item, index) => {
              const translateKey = skillKeyMap[item.name];
              const translatedName = translateKey ? t(translateKey) : item.name;
              return (
                <div
                  key={item.id}
                  className="skill-badge px-5 py-3 rounded-xl flex items-center gap-2.5 animate-scale-in"
                  style={{ animationDelay: `${index * 0.04}s` }}
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={22}
                    height={22}
                    className="w-5.5 h-5.5"
                  />
                  <span className="text-sm font-medium text-light">{translatedName}</span>
                </div>
              );
            })}
          </div>
        </AppSection>

        <AppSection
          id="projects"
          title={t('home.projectsCompleted')}
          subtitle={t('home.projectsSubtitle')}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
            {USER.project.contents
              .filter((item) => item.top)
              .slice(0, 6)
              .map((item, index) => (
                <div
                  key={item.id}
                  className="project-card rounded-2xl overflow-hidden animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <AppProject project={item} />
                </div>
              ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full btn-outline text-light font-semibold shadow-lg"
            >
              {t('home.showAllProjects')}
              <i className="fas fa-arrow-right text-xs" />
            </Link>
          </div>
        </AppSection>
      </AppShell>
    </div>
  );
};

export default Home;
