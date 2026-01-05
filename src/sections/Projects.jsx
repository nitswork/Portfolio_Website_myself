// const Projects = () => {
//   return (
//     <section id="projects" className="min-h-screen flex items-center justify-center">
//       <h1 className="text-5xl font-bold">Projects</h1>
//     </section>
//   )
// }

// export default Projects
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import projects from "../data/projectsData";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center">
      <div className="max-w-5xl mx-auto w-full px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={2}
          grabCursor={true}
          navigation
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>


      </div>
    </section>
  );
};

export default Projects;
