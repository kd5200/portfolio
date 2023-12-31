import React from "react";
import { animate, motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Horizonmedia = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Programmatic Campaign Manager{" "}
        <span className="text-textGreen tracking-wide">@HorizonMedia</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Aug 2022 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Launch and Optimize Programmatic campaigns within the our agencies ad
          server.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Provide reports on potential data center fraudulent activity.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Generate tracking tags to track Interactivity with ads that are
          running within our ad server.{" "}
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Troubleshoot issues within campaigns and floodlights.{" "}
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Communicate with 3rd party companies who we collaborate with for
          weekly status reports and troubleshooting tracking pixels or report
          metrics descrepencies.{" "}
        </li>
      </ul>
    </motion.div>
  );
};

export default Horizonmedia;
