import AppHeader from '../components/organisms/AppHeader';
import AppShell from '../components/templates/AppShell';
import { useLanguage } from '../context/LanguageContext';

const aboutSections = [
  { key: 'myHistory', icon: 'fa-user' },
  { key: 'whatAmIDoing', icon: 'fa-code' },
  { key: 'whatNext', icon: 'fa-bullseye' },
  { key: 'dreamsAndWishes', icon: 'fa-rocket' },
];

const About = () => {
  const { t } = useLanguage();

  return (
    <AppShell
      title={`Idir Lahcen | ${t('about.title')}`}
      description={t('about.description')}
      keyword="about me, about, me, history"
    >
      <AppHeader title={t('about.title')} description={t('about.description')} />
      <div className="grid gap-6">
        {aboutSections.map((section, index) => (
          <div
            key={section.key}
            className="glass rounded-2xl p-8 animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h3 className="text-xl font-semibold text-light mb-4 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <i className={`fas ${section.icon} text-white text-sm`} />
              </span>
              {t(`about.${section.key}`)}
            </h3>
            <p className="text-muted leading-relaxed">
              {t(`about.${section.key}Desc`)}
            </p>
          </div>
        ))}
      </div>
    </AppShell>
  );
};

export default About;