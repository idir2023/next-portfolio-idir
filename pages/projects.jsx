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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
          {USER.project.contents.map((item) => (
            <AppProject key={item.id} project={item} />
          ))}
        </div>
      </AppSection>
    </AppShell>
  );
};

export default Project;
