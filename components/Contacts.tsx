import React from "react";

const Contacts = () => {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <p className="font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide">
        04. What Next?
      </p>
      <h2 className="font-titleFont text-5xl font-semibold">Get in Contact</h2>
      <p>
        I am currently open to new opportunities that involve more of a
        technical role performing software development within any industry.
        Please email me regarding my availability so that both parties can
        communicate at a convenient time. Thanks for visiting my page!
      </p>
      <a href="mailto:daviskareem92@gmail.com">
        <button className="w-40 h-14 border border-textPink mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300">
          Say Hello
        </button>
      </a>
    </section>
  );
};

export default Contacts;
