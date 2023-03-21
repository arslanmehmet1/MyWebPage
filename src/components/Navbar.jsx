import React from "react";
import { NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import "../css/navbar.css";

const Navbar = () => {
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  return (
    <>
      {/* Demo header*/}
      <section className="py-5 text-center topimg">
        <div className="container py-5 text-white">
          <header className="py-5">
            <h1 className="display-2">Hello</h1>
            <h1 className="display-4">Wellcome to My Web Page</h1>
            <p className="font-italic mb-1">
              Create a sticky top navbar using Bootstrap 4 utility classes.
            </p>
          </header>
        </div>
      </section>
      {/* Sticky navbar*/}
      <div className="sticky-top">
        <div className="topnav" id="myTopnav">
          <a href="#home" className="active">
            Home
          </a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
          <a href="javascript:void(0);" className="icon" onClick={myFunction}>
            <i className="fa fa-bars" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
