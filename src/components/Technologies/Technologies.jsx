import React, { useEffect } from "react";
import { expressLogo, mongoDBLogo, nodeLogo, reactLogo, socketLogo } from "../../assets";

const Technologies = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".hide");
    hiddenElements.forEach((e1) => observer.observe(e1));

    // Clean up event listeners on component unmount
    return () => {};
  }, []);

  return (
    <div className="mt-4 flex flex-wrap w-auto  mb-8">
      <div className="flex flex-wrap space-x-6 lg:space-x-12 ">
        <img className="flex w-12 lg:w-16 flex-shrink hide logo" src={mongoDBLogo} alt="" />
        <img className="flex w-12 lg:w-16 flex-shrink hide logo" src={expressLogo} alt="" />
        <img className="flex w-12 lg:w-16 flex-shrink hide logo" src={reactLogo} alt="" />
        <img className="flex w-12 lg:w-16 flex-shrink hide logo" src={nodeLogo} alt="" />
        <img className="flex w-12 lg:w-16 flex-shrink hide logo" src={socketLogo} alt="" />


      </div>
    </div>
  );
};

export default Technologies;
