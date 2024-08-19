import { useState } from "react";
import Hero from "./Hero";
import Card from "./Card";
import Graphic from "./Graphic";
import English from "./English";
import Web from "./Web";
import Footer from "./Footer";
import Navbar from "./Navbar";

import "./index.css";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";








function App() {
  return (
    <>
      <div>
        <Navbar/>
        <Hero />
        <Card/>
      <Footer/>
      </div>

<Router>
  <Routes>
    <Route  />
  </Routes>
</Router>
  

      
    </>
  );
}

export default App;
