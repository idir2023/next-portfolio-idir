import Image from 'next/image';
import { useLanguage } from '../../context/LanguageContext';
import { useState } from 'react';

const techColors = {
  React: 'from-sky-400 to-blue-600',
  Next: 'from-gray-700 to-gray-900',
  JavaScript: 'from-yellow-400 to-yellow-600',
  JS: 'from-yellow-400 to-yellow-600',
  Laravel: 'from-red-400 to-red-600',
  PHP: 'from-indigo-400 to-indigo-600',
  Tailwind: 'from-cyan-400 to-teal-500',
  Bootstrap: 'from-purple-400 to-purple-600',
  JQuery: 'from-blue-400 to-blue-600',
  CSS: 'from-blue-400 to-cyan-500',
  HTML: 'from-orange-400 to-orange-600',
  Vue: 'from-emerald-400 to-emerald-600',
  Node: 'from-green-400 to-green-600',
  MongoDB: 'from-green-500 to-emerald-600',
  Supabase: 'from-emerald-400 to-green-600',
  Firebase: 'from-yellow-400 to-orange-500',
  API: 'from-violet-400 to-purple-600',
  Vite: 'from-purple-400 to-pink-500',
};

const getTechColor = (tech) => {
  const trimmed = tech.trim();
  for (const [key, value] of Object.entries(techColors)) {
    if (trimmed.toLowerCase().includes(key.toLowerCase())) return value;
  }
  return 'from-primary to-secondary';
};

const AppProject = ({ project }) => {
  const { t } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  const techList = project.stack.split(',').map((t) => t.trim());

  return (
    <div
      className="p-5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-52 rounded-xl overflow-hidden mb-5 group">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className={`object-cover transition-all duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-60'}`} />

        <div className={`absolute inset-0 flex flex-col items-center justify-center gap-3 transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full btn-gradient text-white text-sm font-semibold shadow-lg shadow-primary/40 hover:shadow-primary/60"
          >
            <i className="fas fa-external-link-alt" />
            {t('common.viewProject')}
          </a>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-xs font-medium hover:bg-white/20 transition-all"
          >
            <i className="fab fa-github" />
            Source Code
          </a>
        </div>

        <span className={`absolute top-3 right-3 px-3 py-1.5 rounded-full text-[11px] font-semibold backdrop-blur-sm transition-all duration-300 ${
          project.category === 'Professional Project'
            ? 'bg-accent/20 text-accent border border-accent/30'
            : 'bg-primary/20 text-primary border border-primary/30'
        } ${isHovered ? 'scale-105' : ''}`}>
          {project.category === 'Professional Project' ? t('projects.professional') : t('projects.personal')}
        </span>

        <div className={`absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5 transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {techList.slice(0, 4).map((tech, i) => (
            <span key={i} className={`px-2 py-0.5 rounded-md text-[10px] font-semibold bg-gradient-to-r ${getTechColor(tech)} text-white shadow-lg`}>
              {tech}
            </span>
          ))}
          {techList.length > 4 && (
            <span className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-white/10 text-white/70">
              +{techList.length - 4}
            </span>
          )}
        </div>
      </div>

      <div>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-semibold text-light hover:text-primary transition-colors flex items-center gap-2 group/title"
        >
          {project.name}
          <i className="fas fa-external-link-alt text-[10px] text-muted opacity-0 -translate-x-2 group-hover/title:opacity-100 group-hover/title:translate-x-0 transition-all" />
        </a>

        {project.description && (
          <p className="text-muted/70 text-xs mt-2 leading-relaxed line-clamp-2">
            {project.description}
          </p>
        )}

        <div className="flex flex-wrap gap-1.5 mt-3">
          {techList.slice(0, 3).map((tech, i) => (
            <span key={i} className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-surface/50 text-muted border border-white/5 hover:border-primary/30 hover:text-primary transition-all">
              {tech}
            </span>
          ))}
          {techList.length > 3 && (
            <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-surface/50 text-muted/50">
              +{techList.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppProject;
