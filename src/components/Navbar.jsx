import React from "react";
// import { NavLink } from "react-router-dom";
import "../css/navbar.css";

const Navbar = () => {
  return (
    <>
      {/* Demo header*/}
      <section className="py-5 header text-center topimg">
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
      <div className="sticky-top"></div>
    </>
  );
};

export default Navbar;
