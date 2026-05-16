import AppHeader from '../components/organisms/AppHeader';
import AppShell from '../components/templates/AppShell';
import { useLanguage } from '../context/LanguageContext';

const Resume = () => {
  const { t } = useLanguage();

  const experienceData = t('experiences.contents');

  return (
    <AppShell
      title={`Idir Lahcen | ${t('experiences.title')}`}
      description={t('experiences.description')}
      keyword="resume, education, course, skill"
    >
      <AppHeader
        title={t('experiences.title')}
        description={t('experiences.description')}
      />
      <div className="space-y-8">
        {experienceData && experienceData.map((section, index) => (
          <div key={index} className="animate-slide-up">
            <h3 className="text-2xl font-bold text-light mb-6 flex items-center gap-3">
              <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <i className="fas fa-briefcase text-white" />
              </span>
              {section.title}
            </h3>
            <div className="space-y-4">
              {section.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex flex-wrap items-start gap-4 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                      {item.timestamp}
                    </span>
                    <div>
                      <h4 className="text-lg font-semibold text-light">{item.name}</h4>
                      <p className="text-primary text-sm">{item.info}</p>
                    </div>
                  </div>
                  <p className="text-muted text-sm mb-3">{item.description}</p>
                  {item.list && (
                    <ul className="space-y-2">
                      {item.list.map((listItem, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted text-sm">
                          <i className="fas fa-check-circle text-accent mt-1" />
                          <span>{listItem.name}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
};

export default Resume;