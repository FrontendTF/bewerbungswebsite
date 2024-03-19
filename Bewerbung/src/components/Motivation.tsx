import React from "react";
import signature from "../assets/signature.png";

export const Motivation = () => {
  return (
    <section>
      <div
        className="w-10/12 mx-auto text-center py-10 flex flex-col items-center justify-center scroll-m-20"
        id="motivation"
      >
        <h3 className="H2 uppercase">Motivationsschreiben</h3>
        <br />
        <span className="text-6xl text-violet-700 flex ">―</span>
        <br />

        <p className="text-lg text-gray-800">
          Sehr geehrte Damen und Herren,
          <br />
          <br />
          mit großem Interesse habe ich von der offenen Position in Ihrem
          Unternehmen als Frontend Entwickler erfahren und möchte mich hiermit
          als passionierter Webentwickler bei Ihnen bewerben. Während meiner
          Ausbildung in der CSAW (Coding School am Wörthersee) konnte ich
          fundierte Kenntnisse in der Webentwicklung erwerben. Diese möchte ich
          nun in der Praxis anwenden und weiter vertiefen. Das Programmieren und
          die Umsetzung von digitalen Lösungen sind für mich nicht nur eine
          Berufung, sondern auch eine Passion. Jeder Code, den ich schreibe, ist
          für mich wie das Lösen eines Rätsels – und ich genieße jeden Moment
          dieses Prozesses. Doch nicht nur die Arbeit am Computer fasziniert
          mich. Als sportlicher Mensch schätze ich auch die Bedeutung von
          Disziplin, Ausdauer und Teamarbeit. Ich bin überzeugt, dass diese
          Eigenschaften mir in der Webentwicklung ebenso zugutekommen wie auf
          dem Sportplatz. In kritischen Situationen bewahre ich stets den
          Überblick und arbeite zielstrebig an Lösungen. Ich bin ehrgeizig und
          stets bereit, Neues zu lernen. In Ihrem Unternehmen sehe ich die
          perfekte Gelegenheit, meine Fähigkeiten weiter auszubauen und mich den
          Herausforderungen der digitalen Welt zu stellen. Mit meiner
          Begeisterung für das Coden und meinem Drang, stets das Beste aus mir
          herauszuholen, würde ich mich freuen, eine wertvolle Ergänzung für Ihr
          Team zu sein. Ich freue mich über die Gelegenheit, mich Ihnen in einem
          persönlichen Gespräch vorzustellen zu dürfen.
          <br />
          <br />
          Mit freundlichen Grüßen,
          <br />
          <br />
          <div className="flex justify-center">
            <img src={signature} alt="signature" />
          </div>
        </p>
      </div>
    </section>
  );
};
