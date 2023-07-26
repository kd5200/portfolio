import React from "react";
import { animate, motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const PR = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Google ads manager{" "}
        <span className="text-textGreen tracking-wide">@PR-Business</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Dec 2021 - Aug 2022
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Launch & manage Google Ads Campaigns
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Optimize Google Ad Campaigns.{" "}
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Integrate internal analytics dashboard as well as google analytics
          dashboard to each customers campaigns.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Communicate With Clients about changes they want made to their
          campaigns.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Handle Ad Budget Optimization{" "}
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Configure google tag manager container/triggers to help clients keep
          track of how customers interact with their website.{" "}
        </li>
      </ul>
    </motion.div>
  );
};

export default PR;
