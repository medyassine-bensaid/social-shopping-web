import VideoInput from "../components/VideoInput";

import React from "react";
import Navbar from "../components/Navbar";
import Products from "../components/Products";

import "./VideoInput.css";

const Home = () => {
  return (
    <div>
   <Navbar/>
   <Products/>
   <VideoInput width={400} height={300} />
  
    </div>
  );
};

export default Home;