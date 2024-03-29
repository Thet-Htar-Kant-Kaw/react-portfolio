import React from "react";
import { Link } from "react-router-dom";
// import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline"

const ProjectCard = ({imgUrl, description, title, gitUrl, previewUrl}) => {
    return(
        <div>
            <div
                className="h-52 md:h-72 rounded-t-xl relative group"
                style={{background: `url(${imgUrl})`, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}
            >
                <div className="overlay items-center justify-center w-full h-full bg-[#181818] hidden group-hover:flex bg-opacity-0 group-hover:bg-opacity-80">
                   <Link
                    href={gitUrl}
                    className="relative rounded-full border-2 mr-2 border-[#ADB7BE] hover:border-white group/link"
                   >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={1.5} 
                            stroke="currentColor" 
                            className="w-10 h-10 text-[#ADB7BE] group-hover/link:text-white"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                        </svg> 
                   </Link>
                   <Link
                    href={previewUrl}
                    className="relative rounded-full border-2 border-[#ADB7BE] hover:border-white group/link"
                   >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" viewBox="0 0 24 24" 
                            strokeWidth={1.5} 
                            stroke="currentColor" 
                            className="w-10 h-10 text-[#ADB7BE] group-hover/link:text-white"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                   </Link>
                   
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