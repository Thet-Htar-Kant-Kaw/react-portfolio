import React from "react";
// import { Link } from "react-router-dom";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline"

const ProjectCard = ({imgUrl, description, title, gitUrl, previewUrl}) => {
    return(
        <div>
            <div
                className="h-52 md:h-72 rounded-t-xl relative group"
                style={{background: `url(${imgUrl})`, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}
            >
                <div className="overlay items-center justify-center w-full h-full bg-[#181818] hidden group-hover:flex bg-opacity-0 group-hover:bg-opacity-80">
                   <a
                    href={gitUrl}
                    target="_blank"
                    className="relative rounded-full border-2 mr-2 border-[#ADB7BE] hover:border-white group/link"
                   >
                        <CodeBracketIcon 
                            className="w-10 h-10 text-[#ADB7BE] group-hover/link:text-white"
                        />
                   </a>
                   <a
                    href={previewUrl}
                    target="_blank"
                    className="relative rounded-full border-2 border-[#ADB7BE] hover:border-white group/link"
                   >
                        <EyeIcon 
                            className="w-10 h-10 text-[#ADB7BE] group-hover/link:text-white"
                        />
                   </a>
                   
                </div>
            </div>
            <div className="mt-3 py-6 px-4 text-white">
                <h5 className="text-xl font-semibold mb-2">{title}</h5>
                <p className="text-base text-[#ADB7BE]">{description}</p>
            </div>
        </div>
    )
}

export default ProjectCard;