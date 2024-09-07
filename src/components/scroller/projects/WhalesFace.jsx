import React from "react";
import { FlyingWhaleTeaser } from "../../../assets";

const WhalesFace = () => {
  return (
    <div
      className="flip-card-front rotateY-180 w-full h-full"
      id="whales-card-face"
    >
      <div className="flex flex-col w-full h-auto items-center bg-white border border-gray-200 rounded-lg shadow lg:flex-row hover:bg-gray-100">
        <img
          className="object-cover mt-4 mb-4 max-w-xs w-11/12 ml-4 rounded-t-lg md:h-auto md:rounded-none md:rounded-s-lg"
          src={FlyingWhaleTeaser}
          alt=""
        />
        <div className="ml-4 flex flex-col justify-between p-4 leading-normal flex-grow">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            FlyingWhales
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            A real-time action strategic game that revolves around controlling
            multiple characters at the same time. Developed in{" "}
            <span className="font-semibold">Unity</span> with{" "}
            <span className="font-semibold">C#</span> and complete with fully
            original sprites and graphics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhalesFace;
