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
          title="Healthcare Consulting"
          des="This website was created by myself and my business partner for a client in the healthcare industry"
          listItem={["Next.js", "Tailwind.css", "Javascript"]}
          link="https://www.kandghealthcareconsultingservices.com/"
        />
        <Archivecard
          title="Python to-do app"
          des="First project I've built for a software developer interview. One of my first ever projects"
          listItem={["Flask", "Python", "Javascript", "HTML"]}
          link="https://github.com/kd5200/python-todo-app"
        />
        <Archivecard
          title="First Mind Tattoos"
          des="This website was built in colaboration with my partner for a client tatoo shop in Jacksonville, FL"
          listItem={["Next.js", "Typescript", "Javascript"]}
          link="https://firstmindcustom.com/"
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
