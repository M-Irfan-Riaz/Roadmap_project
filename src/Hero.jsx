import React from "react";

const Hero = () => {
  return (
    <>
      <div>
        <div className="relative w-full">
          <nav className="z-50">
            <div className="w-full bg-white">
              <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
              
           
            
            
                
              </div>
            </div>
          </nav>
          <div className="relative isolate z-0 bg-white px-6 pt-14 lg:px-8">
            <div className="relative mx-auto max-w-2xl py-24">
              <div className="absolute inset-x-0 -top-[4rem] -z-10 transform-gpu overflow-hidden blur-3xl md:-top-[10rem]">
                
           <svg>    
                  <defs>
                    <linearGradient
                      id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                      x1="1155.49"
                      x2="-78.208"
                      y1=".177"
                      y2="474.645"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#9089FC"></stop>
                      <stop offset="1" stopColor="#FF80B5"></stop>
                    </linearGradient>
                  </defs>
                  </svg>
              </div>
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                The things that does not kill us makes us stronger
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Find your way to excel in your life.Life is a journey but for enjoying your journey.You need a distination to move on.Otherwise,every  wind will be seem your distination.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-2">
                  <button
                    type="button"
                    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Contact me
                  </button>
                  <button
                    type="button"
                    className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
