import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  return (
    <div id="home">
      <h1 style={{ color: "firebrick" }}>
        Your Name is a Web Developer from {name}, {city}
      </h1>
    </div>
  );
}

export default Home;
