import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import UpNavbar from "../components/UpNavbar";
import "../css/home.css";
import myimg from "../img/myimg.jpg";
import { AiOutlineDownload } from "react-icons/ai";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <UpNavbar />
      <Navbar />
      <div className="overflow-hidden">
        <div className="s1 row">
          <div className="left col-md-5">
            <img className="myimg" src={myimg} alt="" />
          </div>
          <div className="right col-md-7">
            <h3 className="aboutme">My name is</h3>
            <h1 className="name">Mehmet Arslan</h1>
            <h5 className="aboutdesc">
              I'm a fullstack developer from Turkiye, currently living in
              Kocaeli.
            </h5>
            <h3 className="aboutme">
              Currently, I'm for hire and open to new opportunities. You can
              contact me via e-mail.
            </h3>
            <button
              type="button"
              class="btn btn-success"
              onClick={() => navigate("/contact/")}
            >
              Contact me
            </button>
          </div>
        </div>
      </div>
      <div className="bg img1">
        <div className="titleWay1">
          <h3 className="text-center">Technologies</h3>
          <div className="tech1 text-center">
            <button className="btn btn-outline-success tb">HTML</button>
            <button className="btn btn-outline-success tb">CSS</button>
            <button className="btn btn-outline-success tb">JavaScript</button>
          </div>
          <div className="tech2 text-center">
            <button className="btn btn-outline-success tb">TypeScript</button>
            <button className="btn btn-outline-success tb">React</button>
          </div>
          <div className="tech3 text-center mt-4">
            <button className="btn btn-outline-info tb">Python</button>
            <button className="btn btn-outline-info tb">Django</button>
          </div>
        </div>
      </div>
      <section className="s2">
        <div className="row">
          <div className="col-md-6">
            <h1 className="work">To Be a Frontend Developer</h1>
            <p className="workdesc">
              My main focus was building high quality, and well-designed
              enterprise products with <span className="bold2">React.</span> I
              can prefer <span className="bold2">Redux</span> for Global State
              Management in case of need. I always strive for clean and
              accessible UI projects. I also brought my attention to building a
              scalable design system components library and tools to bring
              consistency in UX and tooling across all the different products of
              the company.
            </p>
          </div>
          <div className="col-md-6 px-5">
            <h1 className="work">
              The Following CSS Frameworks/ Libraries Are Used For Front-End
              Projects
            </h1>
            <div className="workdesc">
              <ul className="css-ul text-start h4">
                <li className="m-1 ms-5">Bootstrap</li>
                <li className="m-1 ms-5">React-Bootstrap</li>
                <li className="m-1 ms-5">Style-Component</li>
                <li className="m-1 ms-5">Material-UI</li>
                <li className="m-1 ms-5">Tailwind CSS</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="bg img2">
        <div className="text-center">
          <h5 className="titleWay1 text-center">download and read my resume</h5>
          <button type="button" className="resume">
            Resume.pdf <AiOutlineDownload />
          </button>
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="s1 row">
          <div className="left col-md-6">
            <img className="myimg" src={myimg} alt="" />
          </div>
          <div className="right col-md-6">
            <h3 className="aboutme">My name is</h3>
            <h1 className="name">Mehmet Arslan</h1>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
