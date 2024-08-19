import React from "react";
import img1 from "../imagesf/img1.jpg";
import English from "../imagesf/English.png";
import Web from "./Web";
import Graphic from "../imagesf/graphic_design.jpg";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";













const Card = () => {

  return (
    <>
      <div id="hello" className=" mb-3  flex  flex-wrap">
        <div
          id="hello"
          className="bg-white  border p-2 w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4"
        >
          <div className="min-h-[245px]">
            <img src={img1} className="w-full rounded-lg" />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-xl font-bold">Web development</h3>
            <p className="mt-3 text-sm text-gray-800 leading-relaxed">
              Web development is most popular field among the programmers and it
              is very famous and promise to the good career
            </p>
            <button 
              type="button"
              className="mt-6 px-5 py-2.5 w-full rounded-lg text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700"
            >
              View
            </button>
          </div>
        </div>

        <div
          id="hello"
          className="bg-white  border p-2 w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4"
        >
          <div className="min-h-[245px]">
            <img src={Graphic} className="w-full rounded-lg" />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-xl font-bold">Graphic designing</h3>
            <p className="mt-3 text-sm text-gray-800 leading-relaxed">
              Web development is most popular field among the programmers and it
              is very famous and promise to the good career
            </p>
            <button 
              type="button"
              className="mt-6 px-5 py-2.5 w-full rounded-lg text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700"
            >
              View
            </button>
          </div>
        </div>

        <div
          id="hello"
          className="bg-white  border p-2 w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4"
        >
          <div className="min-h-[245px]">
            <img src={English} className="w-full rounded-lg" />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-xl font-bold">English Learning</h3>
            <p className="mt-3 text-sm text-gray-800 leading-relaxed">
              Web development is most popular field among the programmers and it
              is very famous and promise to the good career
            </p>
            <button  onClick={()=>{
              return console.log("and I ");
            }}
              type="button"
              className="mt-6 px-5 py-2.5 w-full rounded-lg text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700"
            >
              View
            </button>
          </div>
        </div>
      </div>


    </>
  );
};

export default Card;

