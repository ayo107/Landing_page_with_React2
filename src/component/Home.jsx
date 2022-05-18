import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
//include the Navbar

//create your first component
const Home = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Card />
    </div>
  );
};

export default Home;
