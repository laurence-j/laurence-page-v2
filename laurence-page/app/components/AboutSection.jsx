"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React & Redux</li>
        <li>Javascript</li>
        <li>Java</li>
        <li>Apache HTTP</li>
        <li>HTML & SCSS</li>
        <li>SQL</li>
        <li>GraphQL</li>
        <li>AEM</li>
        <li>AJO</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li><a href="https://www.auckland.ac.nz/">Bachelor of Science: Computer Science & Information Systems, <br></br> 
            University of Auckland, New Zealand</a></li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li><a target="_blank" 
                href="https://www.credly.com/badges/d12444da-bbe8-42ff-8077-48372d1e8baa/">
                Microsoft Azure Fundamentals Certification AZ-900</a>
        </li>
        <li>Business Process Management ARIS Certificate</li>
        <li><a target="_blank" 
                href="https://www.iiba.org/business-analysis-certifications/certification-digital-badge-program-and-directory#certification-registries">
                IIBA Academic Certificate and Diploma in Business Analysis</a>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a qualified Adobe Experience Manager full stack web developer and consultant
            working within the Adobe Experience Manager CMS tech stack. I have further expertise with using latest marketing automation tools
            (Adobe Journey Optimizer) as well as in Adobe Analytics. I have a passion for creating
            interactive and responsive web applications. 
            As a quick learner I am always looking to expand my knowledge and skill set. 
            I am a team player and I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;