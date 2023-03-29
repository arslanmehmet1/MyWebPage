import React, { useRef, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../css/contact.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { GoMail } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { toastMessageNotSend, toastMessageSend } from "../assets/Toastify";
import { ToastContainer } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wz0xvll",
        "template_nt5lhbe",
        form.current,
        "l6JwfzoZ61Bg7au-r"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message send");
          toastMessageSend(`Hello ${name} your message send`);
        },
        (error) => {
          console.log(error.text);
          toastMessageNotSend(`Hello ${name} we couldnt send message`);
        }
      );
    document.getElementById("my_form").reset();
  };

  return (
    <div>
      <Navbar />
      <div className="bigblock text-center mt-3">
        <div className="firstblog container">
          <h1>Contact me</h1>
          <br />
          <div className="row text-center g-2">
            <a
              href="https://www.google.com/maps/place/Ba%C5%9Fiskele%2FKocaeli/@40.6884199,29.9032385,23679m/data=!3m1!1e3!4m6!3m5!1s0x14cb42e3bf1a1185:0x26aa1c0f34a00590!8m2!3d40.6298368!4d29.950926!16s%2Fm%2F0ch1cqg"
              target="_blank"
              rel="noopener noreferrer"
              className="col-md-3 col-sm-6 text-decoration-none text-black"
            >
              <div className="second-box">
                <h1>
                  <HiOutlineLocationMarker />
                </h1>
                <h3>Location</h3>
                <p>Basiskele-Kocaeli-Turkiye</p>
              </div>
            </a>
            <a
              href="mailto:marslan.developer@gmail.com"
              className="col-md-3 col-sm-6 text-decoration-none text-black"
            >
              <div className="third-box">
                <h1>
                  <GoMail />
                </h1>
                <h3>E-mail</h3>
                <p>marslan.developer@gmail.com</p>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/arslanmehmet/"
              target="_blank"
              rel="noopener noreferrer"
              className="col-md-3 col-sm-6 text-decoration-none text-black"
            >
              <div className="fourth-box">
                <h1>
                  <BsLinkedin />
                </h1>
                <h3>Linkedin</h3>
                <p>linkedin.com/in/mehmetarslan</p>
              </div>
            </a>
            <a
              href="https://github.com/arslanmehmet1"
              target="_blank"
              rel="noopener noreferrer"
              className="col-md-3 col-sm-6 text-decoration-none text-black"
            >
              <div className="first-box">
                <h1>
                  <BsGithub />
                </h1>
                <h3>Github</h3>
                <p>github.com/arslanmehmet1</p>
              </div>
            </a>
          </div>
        </div>

        <div className="secondblog container ">
          <div className="my-5 p-5 border border-3">
            <p className="text-center w-responsive mx-auto mb-5 h5">
              Do you have any questions? Please do not hesitate to contact me
              directly. I will come back to you within a matter of hours to help
              you.
            </p>
            <form ref={form} onSubmit={sendEmail} id="my_form">
              <div className="mb-4 text-start">
                <label>Name :</label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Your name.."
                  name="user_name"
                  required
                />
              </div>
              <div className="mb-4 text-start">
                <label>Subject :</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Your subject.."
                  name="user_subject"
                />
              </div>
              <div className="mb-4 text-start">
                <label>Email :</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  name="user_email"
                  required
                />
              </div>
              <div className="mb-4 text-start">
                <label>You can write message :</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  defaultValue={""}
                  name="user_message"
                  required
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Contact;
