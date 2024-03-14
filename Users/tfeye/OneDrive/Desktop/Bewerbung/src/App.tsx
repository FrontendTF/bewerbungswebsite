import { useState } from "react";
import "./index.css";
import Pageheader from "./components/Pageheader";
import { Homepage } from "./components/Homepage";
import { AboutMe } from "./components/AboutMe";
import { Motivation } from "./components/Motivation";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Pageheader />
      <Homepage />
      <AboutMe />
      <Motivation />
      <Footer />
    </>
  );
}

export default App;
