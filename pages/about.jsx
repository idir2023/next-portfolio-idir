import AppHeader from '../components/organisms/AppHeader';
import AppShell from '../components/templates/AppShell';
import USER from '../data/user.json';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t, language } = useLanguage();

  const titleMap = {
    en: {
      'My History': t('about.myHistory'),
      'What am i Doing': t('about.whatAmIDoing'),
      'What Next': t('about.whatNext'),
      'Dreams and Wishes': t('about.dreamsAndWishes'),
    },
    fr: {
      'My History': t('about.myHistory'),
      'What am i Doing': t('about.whatAmIDoing'),
      'What Next': t('about.whatNext'),
      'Dreams and Wishes': t('about.dreamsAndWishes'),
    },
    ar: {
      'My History': t('about.myHistory'),
      'What am i Doing': t('about.whatAmIDoing'),
      'What Next': t('about.whatNext'),
      'Dreams and Wishes': t('about.dreamsAndWishes'),
    },
  };

  return (
    <AppShell
      title={`Idir Lahcen | ${t('about.title')}`}
      description={t('about.description')}
      keyword="about me, about, me, history"
    >
      <AppHeader title={t('about.title')} description={t('about.description')} />
      <div className="grid gap-6">
        {USER.about.contents.map((item, index) => (
          <div
            key={item.id}
            className="glass rounded-2xl p-8 animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h3 className="text-xl font-semibold text-light mb-4 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <i className="fas fa-certificate text-white text-sm" />
              </span>
              {titleMap[language][item.name] || item.name}
            </h3>
            <p className="text-muted leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </AppShell>
  );
};

export default About;