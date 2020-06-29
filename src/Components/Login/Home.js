import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>HOME HERE HELLO</h1>
      <Link to="signin">
        <button>INTRODUCCION</button>
      </Link>
    </div>
  );
};

export default Home;
