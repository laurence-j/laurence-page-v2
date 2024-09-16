"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Silver Fern Farms Multilingual Corporate Website",
    description: "A corporate website offering multilingual support to cater to a global audience. Explore the company’s values, products, and recipes in multiple languages.",
    image: "/images/projects/1.png",
    tag: ["All", "Public"],
    previewUrl: "https://www.silverfernfarms.com/",
  },
  {
    id: 2,
    title: "Silver Fern Farms Careers Website",
    description: "A dedicated platform for job seekers to explore career opportunities at Silver Fern Farms. Find job listings, company culture insights, and application resources.",
    image: "/images/projects/2.png",
    tag: ["All", "Public"],
    previewUrl: "https://careers.silverfernfarms.com/",
  },
  {
    id: 3,
    title: "Silver Fern Farms Coop Website",
    description: "An informative website for cooperative members, providing resources, news, and updates about the cooperative’s activities and benefits.",
    image: "/images/projects/3.png",
    tag: ["All", "Public"],
    previewUrl: "https://www.silverfernfarms.coop/",
  },
  {
    id: 4,
    title: "My Silver Fern Farms Customer Portal - AEM REACT SPA",
    description: "A secure customer portal built with AEM and React, offering personalized services and account management for Silver Fern Farms customers.",
    image: "/images/projects/4.png",
    tag: ["All", "Private"],
    previewUrl: "https://my.silverfernfarms.com/",
  },
  {
    id: 5,
    title: "Silver Fern Farms Middle East Region Arabic Website",
    description: "A region-specific website tailored for the Middle East, featuring content in Arabic to better serve local customers and partners.",
    image: "/images/projects/5.png",
    tag: ["All", "Public"],
    previewUrl: "https://silverfernfarms.com/me/ar/",
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <motion.section 
      id="projects"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12 orbitron">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Public"
          isSelected={tag === "Public"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Private"
          isSelected={tag === "Private"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.2 }}
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
        ))}
      </ul>
    </motion.section>
  );
};

export default ProjectsSection;