import AppSection from '../components/molecules/AppSection';
import AppHeader from '../components/organisms/AppHeader';
import AppShell from '../components/templates/AppShell';
import USER from '../data/user.json';
import { useLanguage } from '../context/LanguageContext';

const aboutTitles = {
  en: {
    myHistory: 'My History',
    whatAmIDoing: 'What am I Doing',
    whatNext: 'What Next',
    dreamsAndWishes: 'Dreams and Wishes',
  },
  fr: {
    myHistory: 'Mon Histoire',
    whatAmIDoing: 'Ce que je fais',
    whatNext: 'Ce que je vise',
    dreamsAndWishes: 'Rêves et Souhaits',
  },
  ar: {
    myHistory: 'تاريخي',
    whatAmIDoing: 'ما أفعله حالياً',
    whatNext: 'هدفي المستقبلي',
    dreamsAndWishes: 'الأحلام والأماني',
  },
};

const About = () => {
  const { t, language } = useLanguage();

  const getTitle = (id) => {
    const titles = aboutTitles[language];
    const contentItem = USER.about.contents.find(item => item.id === id);
    if (contentItem) {
      return titles[contentItem.name] || contentItem.name;
    }
    return contentItem?.name || '';
  };

  return (
    <AppShell
      title={`Idir Lahcen | ${t('about.title')}`}
      description={t('about.description')}
      keyword="about me, about, me, history"
    >
      <AppHeader title={t('about.title')} description={t('about.description')} />
      {USER.about.contents.map((item) => (
        <AppSection key={item.id} title={getTitle(item.id)}>
          <p className="text-gray text-xs md:text-base leading-5 md:leading-8 text-center max-w-2xl lg:mx-auto">
            {item.description}
          </p>
        </AppSection>
      ))}
    </AppShell>
  );
};

export default About;
