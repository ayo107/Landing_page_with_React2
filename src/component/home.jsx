import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
//include the Navbar

//create your first component
const Home = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron />
    </div>
  );
};

export default Home;
