import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projectsData = [
    {
      id: 1,
      title: "React Portfolio Website",
      description: "Responsive portfolio website using React.js and Tailwind CSS",
      image: "images/portfolio.jpg",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/Thet-Htar-Kant-Kaw/react-portfolio.git",
      previewUrl: "/",
    },
    {
      id: 2,
      title: "Book Library Website",
      description: "React book library website using the data obtained by webscraping from pdfdrive.com",
      image: "images/book-library.jpg",
      tag: ["All", "Web"],
      gitUrl: "https://gorgeous-palmier-b3ddc7.netlify.app/",
      previewUrl: "https://gorgeous-palmier-b3ddc7.netlify.app/",
    },
    {
      id: 3,
      title: "Redux Shop Website",
      description: "Shop website using Redux and API",
      image: "images/book-library.jpg",
      tag: ["All", "Web"],
      gitUrl: "https://graceful-lebkuchen-374c97.netlify.app/",
      previewUrl: "https://graceful-lebkuchen-374c97.netlify.app/",
    },
  ];

const ProjectsSection = () => {
    const ref= useRef(null)
    const isInView = useInView(ref, { once: true });

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
      };

    return (
        <section id="projects">
            <h2 className="text-4xl text-white text-center font-bold mb-16">
                My Projects
            </h2>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {projectsData.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                ) )}
            </ul>
        </section>
    )
}

export default ProjectsSection;