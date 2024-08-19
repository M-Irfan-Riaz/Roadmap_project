import React from "react";
import logo from '../imagesf/log1.svg'
const Footer = () => {
  return (
    <>
      <div>
        <footer className="bg-gray-900 p-10 w-full mb-1  flex h-full font-[sans-serif] tracking-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:flex lg:items-center">
            
                <img className="w-52 h-52 mb-12 "
                  src={logo}
                  alt="logo"

                />
   
            </div>

          

            <div >
              <h4 className="text-lg font-semibold mb-6 text-white">Contact Us</h4>
              <ul className="space-y-4 font-semibold">
                <li>
                  <div
                    className="text-gray-300 hover:text-white text-sm"
                  >
                    Email
                  </div>
                </li>
                <li>
                  <div
                    className="text-gray-300 hover:text-white text-sm"
                  >
                    Phone
                  </div>
                </li>
                <li>
                  <div
                    className="text-gray-300 hover:text-white text-sm"
                  >
                    Address
                  </div>
                </li>
              </ul>
            </div>

            <div className="font-semibold">
              <h4 className="text-lg font-semibold mb-6 text-white">Information</h4>
              <ul className="space-y-4">
                <li>
                  <div
                    className="text-gray-300 hover:text-white text-sm"
                  >
                    About Us
                  </div>
                </li>
                <li>
                  <div
                    className="text-gray-300 hover:text-white text-sm"
                  >
                    Terms &amp; Conditions
                  </div>
                </li>
                <li>
                <div  className="text-gray-300 hover:text-white text-sm"
               >
               
                    Privacy Policy
                    </div>
                </li>
              </ul>
            </div>
          </div>

          <p className= " text-gray-300 ml-80 text-sm mt-10">
            
            
            © 2024 Roadmap All Rights Reserved.
          </p>
        </footer>
      </div>
    </>
  );
};

export default Footer;
