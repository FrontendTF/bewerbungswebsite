import React from "react";
import github from "../assets/icone-github-violet.png";

export const Homepage = () => {
  return (
    <section>
      <div className="h-[550px] sm:h-[700px] md:h-[800px] bg-homebg bg-cover bg-center flex flex-col items-center justify-center gap-10 sm:gap-20 pt-10">
        <h1 className="H1">Hey, ich bin Thomas Feyerl</h1>
        <p className="text-xl sm:text-2xl font-mySans text-center px-5">
          Ein Frontend orientierter Webentwickler, der das Frontend von Websiten
          und <br /> Webanwendungen erstellt, um zum Erfolg des Gesamtprojektes
          zu führen.
        </p>
        <a href="#aboutme">
          <button className="grey-button">See more</button>
        </a>
        <a
          href="https://github.com/FrontendTF/schoolprojects"
          target="_blank"
          className="absolute  left-0 iconhover hover:bg-black hidden lg:flex"
        >
          <img src={github} alt="githublink" title="GIT HUB" />
        </a>
      </div>
    </section>
  );
};
