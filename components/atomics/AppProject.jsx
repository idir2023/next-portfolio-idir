import Image from 'next/image';

const AppProject = ({ project }) => (
  <div className="bg-white border border-light-gray rounded-lg px-4 pt-6 text-center overflow-hidden">
    <div className="mb-3">
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        <h3 className="text-black text-base lg:text-xl font-semibold transition duration-300 hover:text-primary">
          {project.name}
        </h3>
      </a>
      <p className="text-gray text-xs">{project.stack}</p>
    </div>
    <div className="shadow-xl relative">
      <Image
        src={project.image}
        alt={project.name}
        width={400}
        height={240}
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="transition duration-300 transform translate-y-5 hover:translate-y-0 object-cover"
      />
    </div>
  </div>
);

export default AppProject;
