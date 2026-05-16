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

const Home = () => {
  const { t } = useLanguage();

  return (
    <div>
      <AppShell hero>
        {/* Services Section */}
        <AppSection title={t('home.whatCanIDo')}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((item, index) => (
              <div
                key={item.id}
                className="service-card p-6 rounded-2xl card-hover animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                  <Image src={item.icon} alt={t(item.key)} width={32} height={32} />
                </div>
                <h3 className="text-lg font-semibold text-light mb-2">
                  {t(item.key)}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {t(item.desc)}
                </p>
              </div>
            ))}
          </div>
        </AppSection>

        {/* Skills Section */}
        <AppSection title={t('home.skillsTechnology')}>
          <div className="flex flex-wrap gap-3 justify-center">
            {USER.skills.map((item, index) => (
              <div
                key={item.id}
                className="skill-badge px-4 py-2 rounded-full flex items-center gap-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium text-light">{item.name}</span>
              </div>
            ))}
          </div>
        </AppSection>

        {/* Projects Section */}
        <AppSection title={t('home.projectsCompleted')}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {USER.project.contents
              .filter((item) => item.top)
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
          <div className="text-center mt-10">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full btn-gradient text-white font-medium"
            >
              {t('home.showAllProjects')}
              <i className="fas fa-arrow-right" />
            </Link>
          </div>
        </AppSection>
      </AppShell>
    </div>
  );
};

export default Home;