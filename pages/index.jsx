import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import USER from '../data/user.json';
import AppSection from '../components/molecules/AppSection';
import AppProject from '../components/atomics/AppProject';
import AppShell from '../components/templates/AppShell';
import { useLanguage } from '../context/LanguageContext';

const services = [
  { id: 2, key: 'services.websiteDev', desc: 'services.websiteDevDesc', icon: '/images/service-website.svg' },
  { id: 3, key: 'services.webAppDev', desc: 'services.webAppDevDesc', icon: '/images/service-webapps.svg' },
  { id: 4, key: 'services.responsiveDesign', desc: 'services.responsiveDesignDesc', icon: '/images/service-rwd.svg' },
  { id: 5, key: 'services.performance', desc: 'services.performanceDesc', icon: '/images/service-performance.svg' },
];

const serviceFeatures = [
  { id: 1, key: 'services.featureModern' },
  { id: 2, key: 'services.featureFast' },
  { id: 3, key: 'services.featureSecure' },
  { id: 4, key: 'services.featureSupport' },
];

const skillKeyMap = {
  'HTML 5': 'skills.html',
  'CSS 3': 'skills.css',
  'Javascript': 'skills.javascript',
  'TailwindCss': 'skills.tailwind',
  'Laravel': 'skills.laravel',
  'Bootstrap 5': 'skills.bootstrap',
  'React JS': 'skills.react',
  'Next JS': 'skills.next',
  'Firebase': 'skills.firebase',
  'Git': 'skills.git',
  'Github': 'skills.github',
  'Sql': 'skills.sql',
  'Vite JS': 'skills.vite',
  'Java': 'skills.java',
  'Visual Studio Code': 'skills.vscode',
  'Linux': 'skills.linux',
  'C++': 'skills.cpp',
  'Node JS': 'skills.nodejs',
  'MongoDB': 'skills.mongodb',
};

const SkillBar = ({ name, level, years, delay }) => {
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
    <div ref={ref} className="animate-fade-in" style={{ animationDelay: `${delay}s` }}>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-light/90">{name}</span>
        <span className="text-xs text-muted">{level}%</span>
      </div>
      <div className="h-2 bg-surface/60 rounded-full overflow-hidden border border-white/5">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
      <span className="text-[10px] text-muted/60 mt-0.5 block">{years}+ {years === 1 ? 'year' : 'years'} exp.</span>
    </div>
  );
};

const WorkflowStep = ({ step, title, description, index }) => (
  <div className="relative group animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
    <div className="flex items-start gap-4">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
          {step}
        </div>
        {index < USER.developer_experience.workflow.length - 1 && (
          <div className="w-0.5 h-full min-h-[3rem] bg-gradient-to-b from-primary/40 to-transparent mt-2" />
        )}
      </div>
      <div className="flex-1 pb-8">
        <h4 className="text-base font-semibold text-light group-hover:text-primary transition-colors">{title}</h4>
        <p className="text-sm text-muted mt-1 leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((item, index) => (
              <div
                key={item.id}
                className="service-card p-8 rounded-2xl animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-5 shadow-lg shadow-primary/10">
                  <Image src={item.icon} alt={t(item.key)} width={34} height={34} />
                </div>
                <h3 className="text-xl font-semibold text-light mb-3">
                  {t(item.key)}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-5">
                  {t(item.desc)}
                </p>
                <ul className="space-y-2">
                  {serviceFeatures.map((feature) => (
                    <li key={feature.id} className="flex items-center gap-2 text-xs text-muted">
                      <i className="fas fa-check-circle text-primary text-xs" />
                      <span>{t(feature.key)}</span>
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
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <div className="flex flex-wrap gap-2 mb-8">
                {devExp.expertise.map((cat, index) => (
                  <button
                    key={cat.category}
                    onClick={() => setActiveCategory(index)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeCategory === index
                        ? 'btn-gradient text-white shadow-lg shadow-primary/20'
                        : 'bg-surface/30 border border-white/10 text-muted hover:text-light'
                    }`}
                  >
                    <i className={`${cat.icon} mr-1.5 text-xs`} />
                    {t(`experience.${cat.category.replace(/[ &]/g, '')}`)}
                  </button>
                ))}
              </div>
              <div className="space-y-4">
                {devExp.expertise[activeCategory].skills.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    years={skill.years}
                    delay={i * 0.1}
                  />
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="glass-premium rounded-2xl p-6 h-full">
                <h4 className="text-base font-semibold text-light mb-5 flex items-center gap-2">
                  <i className="fas fa-cogs text-primary text-sm" />
                  {t('home.myWorkflow')}
                </h4>
                <div className="space-y-0">
                  {devExp.workflow.map((step, i) => (
                    <WorkflowStep key={step.step} {...step} index={i} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AppSection>

        <AppSection
          id="testimonials"
          title={t('home.testimonials')}
          subtitle={t('home.testimonialsSubtitle')}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
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
                  &ldquo;{item.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-light">{item.name}</h4>
                    <p className="text-[11px] text-muted">{item.role}</p>
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
          <div className="flex flex-wrap gap-3 justify-center">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
