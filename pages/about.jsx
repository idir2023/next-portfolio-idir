import AppHeader from '../components/organisms/AppHeader';
import AppShell from '../components/templates/AppShell';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const aboutSections = [
    { key: 'myHistory', icon: 'fa-user', gradient: 'from-primary to-secondary' },
    { key: 'whatAmIDoing', icon: 'fa-code', gradient: 'from-secondary to-accent' },
    { key: 'whatNext', icon: 'fa-bullseye', gradient: 'from-accent to-pink-500' },
    { key: 'dreamsAndWishes', icon: 'fa-rocket', gradient: 'from-primary to-accent' },
  ];

  return (
    <AppShell
      title={`Idir Lahcen | ${t('about.title')}`}
      description={t('about.description')}
      keyword="about me, about, me, history"
    >
      <AppHeader
        title={t('about.title')}
        description={t('about.description')}
        badge={t('about.badge')}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {aboutSections.map((section, index) => (
          <div
            key={section.key}
            className="glass-premium rounded-2xl p-8 animate-slide-up overflow-hidden relative group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={`absolute top-0 left-0 w-1 h-0 bg-gradient-to-b ${section.gradient} group-hover:h-full transition-all duration-500`} />
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-light mb-5 flex items-center gap-3">
                <span className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.gradient} flex items-center justify-center shadow-lg`}>
                  <i className={`fas ${section.icon} text-white text-base`} />
                </span>
                {t(`about.${section.key}`)}
              </h3>
              <p className="text-muted leading-relaxed text-sm md:text-base">
                {t(`about.${section.key}Desc`)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
};

export default About;
