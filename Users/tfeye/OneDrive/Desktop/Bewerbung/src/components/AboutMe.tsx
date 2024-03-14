import React from "react";

export const AboutMe = () => {
  return (
    <main className="bg-slate-50 scroll-m-20" id="aboutme">
      <div className="flex flex-col w-11/12 mx-auto py-3 md:py-10 gap-10 md:gap-20">
        <div className="flex flex-col justify-center items-center p-5">
          <h2 className="H2 uppercase">About me</h2>
          <span className="text-6xl text-violet-700 flex items-center">―</span>
          <p className="sm:text-2xl text-center">
            Hier sehen sie mehr Informationen über mich, was ich mache sowie
            meine Skills im Bereich Coding
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          <div className="flex flex-col md:w-1/2 p-5 gap-10 ">
            <h3 className="H3">Get to know me!</h3>
            <p className="text-lg text-gray-700">
              Ich bin Thomas, ein 24 Jähriger,
              <strong> Junior Frontend Web Developer</strong>. Meine Passion ist
              es, das Front End von Websites und Web-Applikationen zu
              entwickeln, um ganzheitlich erfolgreiche Projekte zu realisieren.
              Meine Ausbildung als Frontend-Entwickler habe ich an der Coding
              School erfolgreich abgeschlossen, und nun bin ich motiviert, den
              nächsten Schritt in der Berufswelt zu wagen. In meiner Freizeit
              zieht es mich oft ins Fitnessstudio oder ins Schwimmbad, wo ich
              aktiv im Schwimmverein bin. Aber auch vor dem PC verbringe ich
              gerne Zeit und vertiefe mein Wissen. Zusätzlich zu meiner
              Weiterentwicklung besuche ich derzeit Kurse zur
              Berufsreifeprüfung, in Englisch und Deutsch.
              <br />
              <br />
              Ich bin offen für einen Job, bei dem ich mein bestes geben kann
              und mich dauerhaft weiterzubilden. Wenn sie eine gute Gelegenheit
              haben, die meinen Fähigen und Erfahrungen entsprechen, zögern sie
              nicht mich zu kontaktieren.
            </p>
            <a href="#contact">
              <button className="grey-button w-72">Contact</button>
            </a>
          </div>

          <div className="flex flex-col md:w-1/2 p-5 gap-5">
            <h3 className="H3">My Skills</h3>
            <div className="flex flex-wrap gap-5">
              <p className="skillstyle">HTML</p>
              <p className="skillstyle">CSS</p>
              <p className="skillstyle">JavaScript</p>
              <p className="skillstyle">Typescript</p>
              <p className="skillstyle">React</p>
              <p className="skillstyle">Tailwind</p>
              <p className="skillstyle">GIT</p>
              <p className="skillstyle">Responsive Design</p>
              <p className="skillstyle">NPM</p>
              <p className="skillstyle">REST</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
