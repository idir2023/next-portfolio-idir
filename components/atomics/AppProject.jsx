import Image from 'next/image';

const AppProject = ({ project }) => (
  <div className="p-4">
    <div className="relative h-48 rounded-xl overflow-hidden mb-4 group">
      <Image
        src={project.image}
        alt={project.name}
        fill
        className="object-cover project-image"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white text-sm font-medium"
        >
          <i className="fas fa-external-link-alt" />
          View Project
        </a>
      </div>
    </div>
    <div className="text-center">
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg font-semibold text-light hover:text-primary transition-colors"
      >
        {project.name}
      </a>
      <p className="text-muted text-sm mt-1">{project.stack}</p>
      <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium bg-surface text-light/70">
        {project.category}
      </span>
    </div>
  </div>
);

export default AppProject;