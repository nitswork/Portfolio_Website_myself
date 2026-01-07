// const Projects = () => {
//   return (
//     <section id="projects" className="min-h-screen flex items-center justify-center">
//       <h1 className="text-5xl font-bold">Projects</h1>
//     </section>
//   )
// }

// export default Projects
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";

// import projects from "../data/projectsData";
// import ProjectCard from "../components/ProjectCard";

// const Projects = () => {
//   return (
//     <section id="projects" className="min-h-screen flex items-center justify-center">
//       <div className="max-w-5xl mx-auto w-full px-4">
//         <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

//         <Swiper
//           modules={[Navigation]}
//           spaceBetween={30}
//           slidesPerView={2}
//           grabCursor={true}
//           navigation
//           breakpoints={{
//             640: {
//               slidesPerView: 2,
//             },
//             1024: {
//               slidesPerView: 2,
//             },
//           }}
//         >
//           {projects.map((project, index) => (
//             <SwiperSlide key={index}>
//               <ProjectCard project={project} />
//             </SwiperSlide>
//           ))}
//         </Swiper>


//       </div>
//     </section>
//   );
// };

// export default Projects;
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"

import projects from "../data/projectsData"
import ProjectCard from "../components/ProjectCard"

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="max-w-4xl mx-auto w-full px-4">
        <h2 className="text-3xl font-bold text-center mb-6">
          Projects
        </h2>

        {/* optional subtitle space */}
        <p className="text-center text-gray-600 mb-10">
          Selected academic & personal projects
        </p>

        <Swiper
          modules={[Navigation]}
          slidesPerView={1}      // 🔑 only one card
          spaceBetween={40}
          navigation
          grabCursor
          className="pb-12"
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
  )
}

export default Projects
