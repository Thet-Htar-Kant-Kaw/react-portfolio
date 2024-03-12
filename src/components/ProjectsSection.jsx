import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projectsData = [
    {
      id: 1,
      title: "React Portfolio Website",
      description: "Project 1 description",
      image: "images/portfolio.jpg",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 2,
      title: "Book Library Website",
      description: "Project 2 description",
      image: "images/book-library.jpg",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 3,
      title: "Redux Shop Website",
      description: "Project 3 description",
      image: "images/book-library.jpg",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
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