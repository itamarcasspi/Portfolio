import React from "react";
import About from "./About";
import Projects from "./Projects";
import "../../index.css";
import Experience from "./Experience";
import Footer from "./Footer";


const Scroller = () => {
  return (
    <div className="absolute end-0 w-2/3">
      <div className="scroll-watcher"></div>
      <div className="grid mt-14">
        <About ></About>
        <Projects></Projects>
        <Experience></Experience>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Scroller;
