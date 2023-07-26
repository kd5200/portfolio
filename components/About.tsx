import React from "react";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import Image from "next/image";
import { profileimg } from "@/public/assets";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            I am a self-taught programmer, ex-college football player, and an
            individual who enjoys the process of software development and
            problem solving within building apps. I have a passion for learning
            and have been able to apply my knowledge to various projects. I am
            resilient in my pursuit of knowledge and currently have experience
            as a programmatic campaign manager within the digital marketing
            industry. My experience has allowed me to develop an understanding
            of how to create effective campaigns that drive results. I am
            constantly looking for ways to improve my skillset and stay
            up-to-date with the latest technologies. I enjoy the challenge of
            finding solutions to complex problems and strive to create
            innovative applications that can make a difference in people's
            lives.
          </p>
          <p>Here are a few technologies I have recently worked with:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex item-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Javascript (ES5+)
            </li>
            <li className="flex item-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Next.js
            </li>
            <li className="flex item-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Nest.js
            </li>
            <li className="flex item-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Typescript
            </li>
            <li className="flex item-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Vue.js
            </li>
            <li className="flex item-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              React.js
            </li>
            <li className="flex item-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Typescript
            </li>
            <li className="flex item-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              MongoDB
            </li>
            <li className="flex item-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Tailwindcss
            </li>
            <li className="flex item-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              PostgresDB
            </li>
            <li className="flex item-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Docker
            </li>
            <li className="flex item-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              AWS (certified)
            </li>
            <li className="flex item-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Firebase
            </li>
            <li className="flex item-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Python 3
            </li>
            <li className="flex item-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Flask
            </li>
            <li className="flex item-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Django
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={profileimg}
                alt="profileimg"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;