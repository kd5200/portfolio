import React, { useState } from "react";
import Archivecard from "./Archivecard";
import { motion } from "framer-motion";

const Archive = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Noteworthy Projects
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          view the archive
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <Archivecard
          title="ChatGPT clone"
          des="This was created as an experiment to replicate OpenAI's chatGPT and see how to impliment their text generation model into an application successfully"
          listItem={["OpenAI", "Vite.js", "HTML/CSS/JS", "Vercel"]}
          link="https://github.com/kd5200/OpenAI_ChatGPT_rep"
        />
        <Archivecard
          title="Python to-do app"
          des="First project I've built for a software developer interview. One of my first ever projects"
          listItem={["Flask", "Python", "Javascript", "HTML"]}
          link="https://github.com/kd5200/python-todo-app"
        />
        <Archivecard
          title="Weather App"
          des="This application was built as part of the interview process for a role I am currently interviewing for. This app is currently integrated with two 3rd party APIs (Google API & OpenWeatherAPI)"
          listItem={["Python", "Django", "React.js", "Javascript"]}
          link="https://github.com/kd5200/HMI-Project"
        />
        {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Archivecard
                title="Backroads Tourist App"
                des="Building a static tourist app using React.js"
                listItem={["Reactjs", "Javascript", "HTML", "CSS"]}
                link="https://github.com/kd5200/Backroads-tourist-app"
              />
            </motion.div>
          </>
        )}
      </div>
      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textPink hover:bg-hoverColor duration-300"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textPink hover:bg-hoverColor duration-300"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Archive;
