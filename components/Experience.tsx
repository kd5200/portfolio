import React from "react";
import SectionTitle from "./SectionTitle";
import Horizonmedia from "./works/Horizonmedia";
import { useState } from "react";
import PR from "./works/PRbusiness";
import AWS from "./works/AWS";

const Experience = () => {
  const [workHmi, setWorkHmi] = useState(true);
  const [workAWS, setWorkAWS] = useState(false);
  const [workPR, setWorkPR] = useState(false);

  const handleHmi = () => {
    setWorkHmi(true);
    setWorkPR(false);
    setWorkAWS(false);
  };

  const handlePR = () => {
    setWorkHmi(false);
    setWorkPR(true);
    setWorkAWS(false);
  };

  const handleAWS = () => {
    setWorkHmi(false);
    setWorkPR(false);
    setWorkAWS(true);
  };

  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Experience" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleHmi}
            className={`${
              workHmi
                ? "border-1-textGreen text-textPink"
                : "border-1-hoverColor text-textDark"
            } border-1-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Horizon Media
          </li>
          <li
            onClick={handleAWS}
            className={`${
              workAWS
                ? "border-1-textGreen text-textPink"
                : "border-1-hoverColor text-textDark"
            } border-1-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            AWS
          </li>
          <li
            onClick={handlePR}
            className={`${
              workPR
                ? "border-1-textGreen text-textPink"
                : "border-1-hoverColor text-textDark"
            } border-1-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            PR Business
          </li>
        </ul>
        {workHmi && <Horizonmedia />}
        {workAWS && <AWS />}
        {workPR && <PR />}
      </div>
    </section>
  );
};

export default Experience;
