import React from "react";
import About from "./About";
import CardFlip from "./projects/CardFlip";
import MyChatFace from "./projects/MyChatFace";
import MyChatBack from "./projects/MyChatBack";
import WhalesFace from "./projects/WhalesFace";
import WhalesBack from "./projects/WhalesBack";
import Tooltip from "../Tooltip";

const Projects = () => {
  
  
  return (
    <div className="bg-amber-200 min-h-screen">
      <div className="ml-10 mr-10 mt-6 h-full max-w-full flex flex-grow flex-col ">
        {/* Projects title */}
        <span className="text-2xl w-full mb-6 font-bold flex justify-between ">
          <span >Relevant projects</span> 
          <Tooltip ></Tooltip>
        </span>
        <span className="font-thin mb-4">Click on the cards to see more! </span>
        <CardFlip backId={"chat-card-back"} faceId={"chat-card-face"}>
          <MyChatFace></MyChatFace>
          <MyChatBack></MyChatBack>
        </CardFlip>
        <CardFlip backId={"whales-card-back"} faceId={"whales-card-face"}>
          <WhalesFace></WhalesFace>
          <WhalesBack></WhalesBack>

        </CardFlip>
      </div>
    </div>
  );
};

export default Projects;
