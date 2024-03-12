import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
    return(
        <section className="lg:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-8 text-center sm:text-left justify-self-start"
                >
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                    <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                        Hello, I&apos;m{" "}
                    </span>
                    <br></br>
                    <TypeAnimation
                        sequence={[
                            "Thet Htar",
                            1000,
                            "Web Developer",
                            1000,                
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                    </h1>
                    <p className="text-[#ADB7BE] sm:text-lg mb-6 lg:text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                    voluptuous.
                    </p>

                    <div>
                        <Link
                        href="/#contact"
                        className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-violet-500 hover:to-fuchsia-500 text-white"
                        >
                        Hire Me
                        </Link>
                        <Link
                        href="/"
                        className="px-5 py-2 inline-block w-full border-4 border-fuchsia-500 sm:w-fit rounded-full 
                        hover:bg-slate-800 text-white mt-3"
                        >
                            Download CV                       
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-4 place-self-center mt-4 lg:mt-0"
                >
                    <img 
                            src="images/hero-image.png" 
                            alt="hero image"
                            // className="rounded-full w-[300px] h-[300px] lg:w-[450px] lg:h-[450px]"
                    />
                </motion.div>
            </div>            
        </section>
    )
}

export default HeroSection;