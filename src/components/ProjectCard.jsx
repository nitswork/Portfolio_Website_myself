const ProjectCard = ({ project }) => {
  return (
    <div
      className="
        bg-neutral-900 text-white
        rounded-2xl overflow-hidden
        shadow-lg
        transition-transform duration-300
        hover:-translate-y-3 hover:shadow-2xl
        cursor-grab active:cursor-grabbing
      "
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="
            w-full h-64 object-cover
            transition-transform duration-500
            hover:scale-110
          "
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

        <p className="text-gray-400 text-sm mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="text-xs bg-neutral-800 px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="text-blue-400 font-medium hover:underline"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
