import React from "react";
import { animate, motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Majorlinkx = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Software Engineer{" "}
        <span className="text-textGreen tracking-wide">@Majorlinkx</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Feb 2022 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Collaborate with senior engineers to handle smaller tasks within
          application development projects.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Provide tagging on clients Websites/applications to record user
          interaction.
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Assist senior developers on web applications infrastructure.{" "}
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Integrate 3rd party software with clients web apps.{" "}
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Troubleshoot software issues.{" "}
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Conduct client facing meetings updating our progress on projects and
          working through questions they may have.{" "}
        </li>
      </ul>
    </motion.div>
  );
};

export default Majorlinkx;
