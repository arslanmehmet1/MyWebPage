import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../css/projects.css";
import { data } from "../assets/data";
import Card from "../components/Card";

const Projects = () => {
  console.log(data);
  return (
    <>
      <Navbar />
      <main className="main">
        <div className="header">
          <h1>My Portfolio Projects</h1>
        </div>
        <div className="card-container">
          {data.map((item, index) => (
            <Card {...item} key={index} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Projects;
