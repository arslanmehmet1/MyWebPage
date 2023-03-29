import React from "react";
import { AiTwotoneHeart } from "react-icons/ai";
const Footer = () => {
  return (
    <div>
      <nav className="justify-content-center bg-dark p-4">
        <h3 className="text-light text-center">
          Copyright {new Date().getFullYear()}
        </h3>
        <p className="text-light text-center">
          Made by me with <AiTwotoneHeart color="red" /> and Deployed on Vercel.
        </p>
      </nav>
    </div>
  );
};

export default Footer;
