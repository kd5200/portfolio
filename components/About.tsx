import React from "react";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            I am an ex-collegiate athlete that attended Pennsylvania State
            University and Florida Atlantic University. As mentioned above, I am
            a self-taught programmer and my first language conceived was python,
            which led to the journey of learning javascript and typescript.
            Forbye, I am skilled in digital marketing, cloud computing, &
            digital analysis.
          </p>
          <p>
            The compassion I once had for the game of football has transitioned
            to the world of software development & technology entirely. My
            knowledge/skills of software has transcended compared to the start
            of my quest. My goal currently, is to work amongst an exceptional
            team with whom I can collaborate with & assimilate more knowledge,
            skills, techniques, and even technical perception from.
          </p>
          <p>
            Here are a few programming languages/frameworks I have recently
            worked with:
          </p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex item-center gap-2">
              <span className="text-textPink">
                <AiFillThunderbolt />
              </span>
              Javascript (ES5+)
            </li>
            <li className="flex item-center gap-2">
              <span className="text-textPink">
                <AiFillThunderbolt />
              </span>
              Next.js
            </li>
            <li className="flex item-center gap-2">
              <span className="text-textPink">
                <AiFillThunderbolt />
              </span>
              Nest.js
            </li>
            <li className="flex item-center gap-2">
              <span className="text-textPink">
                <AiFillThunderbolt />
              </span>
              Vue.js
            </li>
            <li className="flex item-center gap-2">
              <span className="text-textPink">
                <AiFillThunderbolt />
              </span>
              React.js
            </li>
            <li className="flex item-center gap-2">
              <span className="text-textPink">
                <AiFillThunderbolt />
              </span>
              Typescript
            </li>
            <li className="flex item-center gap-2">
              <span className="text-textPink">
                <AiFillThunderbolt />
              </span>
              MongoDB
            </li>
            <li className="flex item-center gap-2">
              <span className="text-textPink">
                <AiFillThunderbolt />
              </span>
              Tailwindcss
            </li>
            <li className="flex item-center gap-2">
              <span className="text-textPink">
                <AiFillThunderbolt />
              </span>
              PostgresDB
            </li>
            <li className="flex item-center gap-2">
              <span className="text-textPink">
                <AiFillThunderbolt />
              </span>
              Docker
            </li>
            <li className="flex item-center gap-2">
              <span className="text-textPink">
                <AiFillThunderbolt />
              </span>
              AWS (certified)
            </li>
            <li className="flex item-center gap-2">
              <span className="text-textPink">
                <AiFillThunderbolt />
              </span>
              Firebase
            </li>
            <li className="flex item-center gap-2">
              <span className="text-textPink">
                <AiFillThunderbolt />
              </span>
              Python 3
            </li>
            <li className="flex item-center gap-2">
              <span className="text-textPink">
                <AiFillThunderbolt />
              </span>
              Flask
            </li>
            <li className="flex item-center gap-2">
              <span className="text-textPink">
                <AiFillThunderbolt />
              </span>
              Django
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <img
                className="rounded-lg h-full object-cover"
                src="/assets/images/headshot.png"
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
