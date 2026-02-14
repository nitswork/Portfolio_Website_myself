const ProjectCard = ({ project }) => {
  return (
    <div
      className="
        w-[460px]
        px-10 py-12
        rounded-2xl
        text-center
        bg-gradient-to-b from-[#020617] via-[#020617] to-[#020617]
        border border-white/10
        shadow-xl
      "
    >
      {/* TITLE */}

      <h3
        className="text-3xl font-bold mb-3 text-white"
        style={{ fontFamily: "Times New Roman, serif" }}
      >
        {project.title}
      </h3>

      <img
        src={project.image}
        alt={project.title}
        className="w-full h-56 object-cover rounded-lg mb-6"
      />


      {/* SUBTITLE */}
      <p
        className="text-lg italic text-gray-400 mb-8"
        style={{ fontFamily: "Times New Roman, serif" }}
      >
        {project.subtitle}
      </p>

      {/* GITHUB LINK */}
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg text-blue-400 hover:text-blue-300 underline underline-offset-8 transition"
      >
        GitHub
      </a>
    </div>
  );
};

export default ProjectCard;
