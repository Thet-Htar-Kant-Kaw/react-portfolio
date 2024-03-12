import React, { useState } from "react";
import { Link } from "react-router-dom";

const EmailSection = () => {
    return (
        <section
          id="contact"
          className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4"
        >
          <div className="z-10">
            <h5 className="text-xl font-bold text-white my-2">
              Let&apos;s Connect
            </h5>
            <p className="text-[#ADB7BE] mb-4 max-w-md">
              I&apos;m currently looking for new opportunities, my inbox is always
              open. Whether you have a question or just want to say hi, I&apos;ll
              try my best to get back to you!
            </p>
            <div className="socials flex flex-row gap-2">
              <Link href="github.com">
                <img src="github-icon.svg" alt="Github Icon" />
              </Link>
              <Link href="linkedin.com">
                <img src="linkedin-icon.svg" alt="Linkedin Icon" />
              </Link>
            </div>
          </div>
          <div>
            {/* {emailSubmitted ? (
              <p className="text-green-500 text-sm mt-2">
                Email sent successfully!
              </p>
            ) : ( */}
              <form className="flex flex-col">
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="text-white block mb-2 text-sm font-medium"
                  >
                    Your email
                  </label>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    required
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="jacob@google.com"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="text-white block text-sm mb-2 font-medium"
                  >
                    Subject
                  </label>
                  <input
                    name="subject"
                    type="text"
                    id="subject"
                    required
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Just saying hi"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="text-white block text-sm mb-2 font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Let's talk about..."
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-violet-500 hover:to-fuchsia-500 text-white"
                  >
                  Send Message
                </button>
              </form>
            {/* )} */}
          </div>
        </section>
      );
}

export default EmailSection;