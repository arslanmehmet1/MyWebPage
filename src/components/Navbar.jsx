import React from "react";
import { Link } from "react-router-dom";
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
      {/* <section className="py-5 text-center topimg">
        <div className="container py-5 text-white">
          <header className="py-5">
            <h1 className="display-2">Hello</h1>
            <h1 className="display-4">Wellcome to My Web Page</h1>
            <p className="font-italic mb-1">
              Create a sticky top navbar using Bootstrap 4 utility classes.
            </p>
          </header>
        </div>
      </section> */}

      <div className="sticky-top">
        <div className="topnav" id="myTopnav">
          {/* <NavLink to="/">My Web Page</NavLink> */}
          <Link to="/">Home</Link>
          <Link to="/projects/">Projects</Link>
          <Link to="/blogs/">Blogs</Link>
          <Link to="/contact/">Contact</Link>
          <a href="javascript:void(0);" className="icon" onClick={myFunction}>
            <i className="fa fa-bars" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
