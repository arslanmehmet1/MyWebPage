import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../css/blogs.css";

const Blogs = () => {
  return (
    <>
      <Navbar />
      <div className="middle d-flex justify-content-center align-items-center">
        <h3 className="">This page's editing is in progress</h3>
      </div>
      <div className="fixed-bottom">
        <Footer />
      </div>
    </>
  );
};

export default Blogs;
