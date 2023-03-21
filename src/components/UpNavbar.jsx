import React from "react";
import "../css/upnavbar.css";

const UpNavbar = () => {
  return (
    <div>
      <section className="py-3 text-center topimg">
        <div className="container py-5 text-white">
          <header className="py-5">
            <h1 className="display-2 hello">Hello</h1>
            <h1 className="display-4">Wellcome to My Web Page</h1>
            <h2 className="font-italic mb-1 mt-5 bolder">
              On this page, you'll find everything you need to know about me and
              my work.
            </h2>
          </header>
        </div>
      </section>
    </div>
  );
};

export default UpNavbar;
