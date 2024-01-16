/* eslint-disable react/no-unescaped-entities */
import React from "react";
import SectionTitle from "./SectionTitle";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section id="projects" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some Things I have Built" titleNo="03" />
      <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
        {/* Project 1 */}
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full flex flex-col items-center justify-center gap-28 mt-10"
            href="https://chatgpt-clone-black.vercel.app/"
            target="_blank"
          >
            <div>
              <img
                className="w-full h-full object-contain"
                src="/assets/images/healthcare.png"
                alt="gptimg"
              />
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:ml-16 z-10">
            <p className="font-titleFont text-textGreen text-sm tracking-wide">
              Featured Project
            </p>
            <h3 className="text-2xl font-bold">K&G Healthcare Services</h3>
            <p className="border-2 border-pink-500 bg-gray-700 text-sm md:text-base p-2 md:p-6 xl:-ml-32 rounded-md">
              This project was built for a client who wanted to have a new
              website built for her healthcare services business. Most of this
              project was built using{" "}
              <span className="text-textGreen">Next.js</span>. This static web
              app is hosted on <span className="text-textGreen">AWS</span> and
              the only integration used is{" "}
              <span className="text-textGreen">zapier</span> leveraging their
              webhooks.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Next.js</li>
              <li>Javascript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Tailwind.css</li>
              <li>Zapier</li>
              <li>AWS</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/majorlinkx-io"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://www.kandghealthcareconsultingservices.com/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* Project 2 */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full flex flex-col items-center justify-center gap-28 mt-10"
            href="https://hmicalendar.com/"
            target="_blank"
          >
            <div>
              <img
                className="w-full h-full object-contain"
                src="/assets/images/calendar.png"
                alt="calimg"
              />
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10">
            <p className="font-titleFont text-textGreen text-sm tracking-wide">
              Featured Project
            </p>
            <h3 className="text-2xl font-bold">Team OOO Calendar</h3>
            <p className="border-2 border-pink-500 bg-gray-700 text-sm md:text-base p-2 md:p-6 xl:-mr-16 rounded-md">
              I created this calendar app for my team members/coworkers to use.
              I took on this project so that my team would no longer have to
              worry about having to use a google calendar spread sheet and
              repeatedly update the spread sheet formula when a new calendar
              year starts. This vue calendar is a simple and customizable
              calendar component built with{" "}
              <span className="text-textGreen">Vue.js</span>. It allows my team
              to view, create, and manage events and coordinate our time off
              efficiently. Lastly, I used{" "}
              <span className="text-textGreen">
                google firebase for hosting and database services
              </span>{" "}
              to keep things quick and simple.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Vue.js</li>
              <li>Javascript</li>
              <li>Google Firebase</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/kd5200/Vue-calendar"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://hmicalendar.com/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* Project 3 */}
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full flex flex-col items-center justify-center gap-28 mt-10"
            href="https://dalle-clone-2.vercel.app/"
            target="_blank"
          >
            <div>
              <img
                className="w-full h-full object-contain"
                src="/assets/images/Dalle.png"
                alt="dalleimg"
              />
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:ml-16 z-10">
            <p className="font-titleFont text-textGreen text-sm tracking-wide">
              Featured Project
            </p>
            <h3 className="text-2xl font-bold">DALL·E clone</h3>
            <p className="border-2 border-pink-500 bg-gray-700 text-sm md:text-base p-2 md:p-6 xl:-ml-32 rounded-md">
              This project is a DALL·E clone using{" "}
              <span className="text-textGreen">
                OpenAI's API as well and MongoDB
              </span>{" "}
              to store the AI generated images & posts.{" "}
              <span className="text-textGreen">DALL·E</span> is a natural
              extension of GPT-3 that parses text prompts and then responds not
              with words but in pictures.Simpily it is an AI system that can
              create realistic images and art from a description in{" "}
              <span className="text-textGreen">natural language</span>. (
              <span className="text-yellow-200">Notice</span>: I am using
              renders' free-tier for server-side deployment so there may be a
              delay in functioning for this project.)
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Vite</li>
              <li>Javascript/HTML/CSS</li>
              <li>OpenAI</li>
              <li>MongoDB</li>
              <li>Cloudinary</li>
              <li>Vercel/render</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/kd5200/Dalle-clone"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://dalle-clone-2.vercel.app/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
