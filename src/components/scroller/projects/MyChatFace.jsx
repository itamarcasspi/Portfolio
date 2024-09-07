import React from "react";
import { Chat,GithubSVG } from "../../../assets";

const MyChatFace = () => {
  return (
    <div className="flip-card-front w-full h-auto" id="chat-card-face">
          <div 
          className="flex flex-col w-full h-auto items-center bg-white border border-gray-200  shadow lg:flex-row hover:bg-gray-100">
            <img
              className="object-cover mt-4 mb-4  w-4/5 ml-4 rounded-t-lg md:h-auto md:rounded-none md:rounded-s-lg"
              src={Chat}
              alt=""
              
            />
            <div className="ml-4 flex-col justify-between p-4 leading-normal flex-grow">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                myCHAT!
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                A real-time chat application built using the MERN (MongoDB,
                Express, React, Node.js) stack, utilizing JWT for authentication
                and Socket.io for real-time communication.
              </p>
            </div>
          </div>
        </div>
  );
};

export default MyChatFace
