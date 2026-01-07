const ProjectCard = ({ project }) => {
  return (
    <div className="
      w-[420px] h-[320px]
      bg-white
      rounded-2xl
      shadow-lg
      border
      p-6
      flex flex-col
      justify-between
      transition-transform duration-300
      hover:scale-105
    ">
      {/* Title */}
      <h3 className="text-xl font-semibold mb-2">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4">
        {project.description}
      </p>

      {/* Tech stack */}
      <p className="text-xs text-gray-500 mb-4">
        <span className="font-semibold">Tech:</span> {project.tech}
      </p>

      {/* Link */}
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 text-sm font-semibold hover:underline"
      >
        View on GitHub →
      </a>
    </div>
  )
}

export default ProjectCard
