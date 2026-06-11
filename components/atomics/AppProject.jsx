import Image from 'next/image';
import { useLanguage } from '../../context/LanguageContext';

const AppProject = ({ project }) => {
  const { t } = useLanguage();

  return (
    <div className="p-5">
      <div className="relative h-52 rounded-xl overflow-hidden mb-5 group">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover project-image"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-8 group-hover:translate-y-0">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full btn-gradient text-white text-sm font-semibold shadow-lg shadow-primary/30"
          >
            <i className="fas fa-external-link-alt" />
            {t('common.viewProject')}
          </a>
        </div>
        <span className={`absolute top-3 ${project.category === 'Professional Project' ? 'right-3' : 'right-3'} px-3 py-1 rounded-full text-xs font-medium ${
          project.category === 'Professional Project'
            ? 'bg-accent/20 text-accent border border-accent/30'
            : 'bg-primary/20 text-primary border border-primary/30'
        }`}>
          {project.category === 'Professional Project' ? t('projects.professional') : t('projects.personal')}
        </span>
      </div>
      <div>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-semibold text-light hover:text-primary transition-colors"
        >
          {project.name}
        </a>
        <div className="flex flex-wrap gap-2 mt-3">
          {project.stack.split(',').map((tech, i) => (
            <span key={i} className="px-2.5 py-1 rounded-md text-xs font-medium bg-surface/50 text-muted border border-white/5">
              {tech.trim()}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppProject;
