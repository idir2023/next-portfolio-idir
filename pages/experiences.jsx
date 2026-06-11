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
        badge={t('experiences.badge')}
      />
      <div className="space-y-10">
        {experienceData && experienceData.map((section, index) => (
          <div key={index} className="relative animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20">
                <i className="fas fa-briefcase text-white text-xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-light">{section.title}</h3>
                <div className="h-[2px] w-12 bg-gradient-to-r from-primary to-accent rounded-full mt-1" />
              </div>
            </div>
            <div className="relative space-y-6">
              {section.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="relative glass-premium rounded-2xl p-7 transition-all duration-300 group"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-4 mb-4">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 text-primary text-xs font-semibold whitespace-nowrap border border-primary/20">
                      <i className="fas fa-calendar-alt text-[10px]" />
                      {item.timestamp}
                    </span>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-light group-hover:text-primary transition-colors">{item.name}</h4>
                      <p className="text-primary/70 text-sm font-medium">{item.info}</p>
                    </div>
                  </div>
                  <p className="text-muted text-sm mb-4 leading-relaxed">{item.description}</p>
                  {item.list && (
                    <ul className="space-y-2.5">
                      {item.list.map((listItem, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted text-sm">
                          <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <i className="fas fa-check text-primary text-[8px]" />
                          </span>
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
