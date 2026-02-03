import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "./Project.css";

import "swiper/css";
import "swiper/css/navigation";

import projects from "../data/projectsData";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="projects min-h-screen flex items-center justify-center"
    >
      <div className="w-full max-w-2xl text-center">

        {/* Title */}
        <h2 className="projects-title mb-16">
          / projects
        </h2>

        {/* Slider */}
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          navigation
          grabCursor
          className="flex justify-center"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center">
                <ProjectCard project={project} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Projects;
