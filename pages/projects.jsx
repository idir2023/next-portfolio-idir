import AppProject from '../components/atomics/AppProject';
import AppSection from '../components/molecules/AppSection';
import AppHeader from '../components/organisms/AppHeader';
import AppShell from '../components/templates/AppShell';
import USER from '../data/user.json';
import { useLanguage } from '../context/LanguageContext';

const Project = () => {
  const { t } = useLanguage();

  return (
    <AppShell
      title={`Idir Lahcen | ${t('projects.title')}`}
      description={t('projects.description')}
      keyword="project, projects, portfolio project, web development project, skill"
    >
      <AppHeader
        title={t('projects.title')}
        description={t('projects.description')}
      />
      <AppSection title={t('projects.personal')}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {USER.project.contents.map((item, index) => (
            <div
              key={item.id}
              className="project-card rounded-2xl overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AppProject project={item} />
            </div>
          ))}
        </div>
      </AppSection>
    </AppShell>
  );
};

export default Project;