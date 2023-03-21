import React from "react";

const Footer = () => {
  return (
    <div style={{ marginTop: "10rem" }}>
      <nav className="justify-content-center bg-dark p-4">
        <h3 className="text-light text-center">
          Copyright {new Date().getFullYear()}
        </h3>
        <p className="text-light text-center">
          Made by me and Deployed on Netlify.
        </p>
      </nav>
    </div>
  );
};

export default Footer;
