const ProjectCard = ({ project }) => {
  return (
    <div className="relative w-[520px] h-[340px] rounded-3xl overflow-hidden shadow-2xl">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{ backgroundImage: `url(${project.image})` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 h-full px-10 flex flex-col items-center justify-center text-center text-white">

        <h3
          className="text-4xl font-bold mb-1"
          style={{ fontFamily: "Times New Roman, serif" }}
        >
          {project.title}
        </h3>

        <p
          className="text-sm uppercase tracking-wide opacity-70 mb-4"
          style={{ fontFamily: "Times New Roman, serif" }}
        >
          {project.subtitle}
        </p>

        <p className="text-sm max-w-md text-gray-200 leading-relaxed mb-4">
          {project.description}
        </p>

        <p className="text-xs text-gray-300 mb-6">
          {project.tech}
        </p>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-cyan-300 hover:text-cyan-200 transition"
        >
          View on GitHub →
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
