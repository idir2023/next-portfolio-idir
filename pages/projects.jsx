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
  const [searchQuery, setSearchQuery] = useState('');

  const filters = [
    { key: 'all', label: t('projects.all'), icon: 'fa-th-large' },
    { key: 'Personal Project', label: t('projects.personal'), icon: 'fa-user' },
    { key: 'Professional Project', label: t('projects.professional'), icon: 'fa-briefcase' },
  ];

  const filteredProjects = USER.project.contents.filter((p) => {
    const matchesCategory = activeFilter === 'all' || p.category === activeFilter;
    const matchesSearch = searchQuery === '' ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.stack.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const personalCount = USER.project.contents.filter((p) => p.category === 'Personal Project').length;
  const professionalCount = USER.project.contents.filter((p) => p.category === 'Professional Project').length;

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
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeFilter === filter.key
                    ? 'btn-gradient text-white shadow-lg shadow-primary/20'
                    : 'bg-surface/30 border border-white/10 text-muted hover:text-light hover:border-primary/30'
                }`}
              >
                <i className={`fas ${filter.icon} text-xs`} />
                {filter.label}
                {filter.key === 'all' && (
                  <span className="px-1.5 py-0.5 rounded-md text-[10px] bg-white/10">
                    {USER.project.contents.length}
                  </span>
                )}
                {filter.key === 'Personal Project' && (
                  <span className="px-1.5 py-0.5 rounded-md text-[10px] bg-white/10">
                    {personalCount}
                  </span>
                )}
                {filter.key === 'Professional Project' && (
                  <span className="px-1.5 py-0.5 rounded-md text-[10px] bg-white/10">
                    {professionalCount}
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-muted text-sm" />
            <input
              type="text"
              placeholder={t('projects.search')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-full bg-surface/30 border border-white/10 text-sm text-light placeholder-muted/50 focus:outline-none focus:border-primary/40 focus:bg-surface/50 transition-all"
            />
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-20 h-20 rounded-full bg-surface/50 flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-folder-open text-3xl text-muted/40" />
            </div>
            <p className="text-muted text-lg">{t('projects.noResults')}</p>
            <button
              onClick={() => { setActiveFilter('all'); setSearchQuery(''); }}
              className="mt-4 px-5 py-2 rounded-full btn-gradient text-white text-sm font-medium"
            >
              {t('projects.clearFilters')}
            </button>
          </div>
        ) : (
          <>
            <p className="text-muted text-sm mb-6 text-center">
              {t('projects.showing')} {filteredProjects.length} {t('projects.projects')}
            </p>
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
          </>
        )}
      </AppSection>
    </AppShell>
  );
};

export default Project;
