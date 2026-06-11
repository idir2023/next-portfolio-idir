import Link from 'next/link';
import Image from 'next/image';
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

const Home = () => {
  const { t } = useLanguage();

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
