import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import UpNavbar from "../components/UpNavbar";
import "../css/home.css";
import myimg from "../img/myimg.jpg";
import { AiOutlineDownload } from "react-icons/ai";
import world from "../assets/about.gif";
import dosya from "../assets/Resumee";

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
          <div className="right col-md-7 ">
            <h3 className="aboutme">My name is</h3>
            <h1 className="name">Mehmet Arslan</h1>
            <h5 className="aboutdesc mb-5">
              I'm a fullstack developer from Turkiye, currently living in
              Kocaeli.
            </h5>
            <div className="dinamic d-flex justify-content-center mb-5">
              <div className="i-title">
                <div className="i-title-wrapper">
                  <div className="i-title-item">React.js Developer</div>
                  <div className="i-title-item">Frontend Developer</div>
                  <div className="i-title-item">Backend Developer</div>
                  <div className="i-title-item">FullStack Developer</div>
                  <div className="i-title-item">Web Developer</div>
                </div>
              </div>
            </div>
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
          <div className="col-md-6 firstdesc">
            <h1 className="work">To Be a Frontend Developer</h1>
            <p className="workdesc">
              My main focus is building high quality, and well-designed
              enterprise products with <span className="bold2">React.</span> I
              can use redux
              <span className="bold2">Redux</span>if needed for Global State
              Management. I always strive for clean and accessible UI projects.
              I also brought my attention to building a scalable design system
              components library and tools to bring consistency in UX and
              tooling across all the different products of the company.
            </p>
          </div>
          <div className="col-md-6 px-3">
            <h1 className="work">My Toolkit For Frontend Develepment</h1>
            <div className="workdesc">
              <ul className="text-start h4">
                <li className="m-1 ms-3">Bootstrap</li>
                <li className="m-1 ms-3">React-Bootstrap</li>
                <li className="m-1 ms-3">Styled-Component</li>
                <li className="m-1 ms-3">Material-UI</li>
                <li className="m-1 ms-3">Tailwind CSS</li>
                <li className="m-1 ms-3">
                  Sass (Syntactically Awesome Stylesheet)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="bg img2">
        <div className="text-center">
          <h5 className="titleWay1 text-center res">download my resume</h5>
          <a href={dosya} download={"MyResume"}>
            {" "}
            <button type="button" className="resume">
              Resume.pdf <AiOutlineDownload />
            </button>
          </a>
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="s1 row">
          <div className="left col-md-6">
            <img className="myimg" src={world} alt="important" />
          </div>
          <div className="right col-md-6">
            <h3 className="aboutme">
              I have a passion for learning about the things that enjoy in web
              development. I created frontend page by using different methods
              for styling. <br />
              <br />
            </h3>
            <p className="aboutme">
              Also you can visit
              <span className="bold3" onClick={() => navigate("/projects/")}>
                {" "}
                my projects page.
              </span>
              <br />
              <br />
              <h1 className="name2 mt-3">What I can offer/ expect at work</h1>
              <ul className="text-start h4">
                <li className="m-2 ms-1">
                  Frontend development (HTML, CSS, vanilla JS, React)
                </li>
                <li className="m-2 ms-1">
                  Backend development (Python, Django)
                </li>
                <li className="m-2 ms-1">Remote or Onsite working</li>
                <li className="m-2 ms-1">
                  A strong focus on quality and accessibility
                </li>
                <li className="m-2 ms-1">
                  An inclusive and friendly work environment
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
