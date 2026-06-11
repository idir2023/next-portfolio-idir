import { useState } from 'react';
import AppProject from '../components/atomics/AppProject';
import AppSection from '../components/molecules/AppSection';
import AppHeader from '../components/organisms/AppHeader';
import AppShell from '../components/templates/AppShell';
import USER from '../data/user.json';
import { useLanguage } from '../context/LanguageContext';

const Project = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { key: 'all', label: t('projects.all') },
    { key: 'Personal Project', label: t('projects.personal') },
    { key: 'Professional Project', label: t('projects.professional') },
  ];

  const filteredProjects = activeFilter === 'all'
    ? USER.project.contents
    : USER.project.contents.filter((p) => p.category === activeFilter);

  return (
    <AppShell
      title={`Idir Lahcen | ${t('projects.title')}`}
      description={t('projects.description')}
      keyword="project, projects, portfolio project, web development project, skill"
    >
      <AppHeader
        title={t('projects.title')}
        description={t('projects.description')}
        badge={t('projects.badge')}
      />
      <AppSection title={t('projects.personal')}>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'btn-gradient text-white shadow-lg shadow-primary/20'
                  : 'bg-surface/30 border border-white/10 text-muted hover:text-light hover:border-primary/30'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((item, index) => (
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
