import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li>JavaScript</li>
          <li>React</li>
          <li>Redux</li>
          <li>Node.js</li>
          <li>Tailwind</li>
          <li>CSS</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>Yangon Technological University</li>
        </ul>
      ),
    },
    {
      title: "Certifications",
      id: "certifications",
      content: (
        <ul className="list-disc pl-2">
          <li>Frontend development</li>
        </ul>
      ),
    },
  ];

  const AboutSection = () => {
    const [tab, setTab] = useState("skills")
    const [isPending, startTransition] = useTransition()

    const handleTabChange= (id) => {
        startTransition(() => {
            setTab(id)
        })
    }

    return(
        <section className="text-white" id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 xl:px-16 sm:py-16">
                <img className="py-4" src="images/about-image.png" alt="about image" />
                <div className="mt-4 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">
                    I am a frontend web developer with a passion for creating
                    interactive and responsive web applications. I have experience
                    working with JavaScript, React, Redux, Node.js, Tailwind, CSS, and Git. I am always
                    looking to expand my knowledge and skill set. I am a team player and
                    I am excited to work with others to create amazing applications.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                    <TabButton
                    selectTab={() => handleTabChange("skills")}
                    active={tab === "skills"}
                    >
                    Skills
                    </TabButton>
                    <TabButton
                    selectTab={() => handleTabChange("education")}
                    active={tab === "education"}
                    >
                    Education
                    </TabButton>
                    <TabButton
                    selectTab={() => handleTabChange("certifications")}
                    active={tab === "certifications"}
                    >
                    Certifications
                    </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    )
  }

  export default AboutSection;