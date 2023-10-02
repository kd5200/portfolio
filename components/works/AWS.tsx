import React from "react";
import { animate, motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const AWS = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        AWS certified{" "}
        <span className="text-textGreen tracking-wide">@Credly</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        March 2023 - March 2026
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I earned this certification by having a comprehensive understanding of
          application life-cycle management and understanding the main cloud
          computing services, best practices, & how AWS services cooperate with
          each other.
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
          Some of the technologies / services I became proficient in while
          working with AWS are Python · JavaScript · S3 · Route53 · CloudFront ·
          RDS · ECS · ECR · EC2 · Lambda · CodePipeline · Glue and more..{" "}
        </li>
      </ul>
    </motion.div>
  );
};

export default AWS;
