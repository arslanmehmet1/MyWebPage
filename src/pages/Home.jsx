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
      <p>
        rerum quaerat ab. Alias qui officia aliquam ea nemo animi, recusandae
        eveniet autem facere quae iure iste velit mollitia laudantium repellat
        unde impedit eum fugiat totam sit numquam saepe, nisi sint atque. Omnis
        et id dolores! Veniam voluptates libero cum ratione numquam, architecto
        soluta magni iusto aliquid perspiciatis magnam dicta fugit officiis
        molestias commodi nihil illo dolor quia a sunt harum. Ullam minima eos
        impedit, cumque velit similique blanditiis! Quidem quas pariatur
        consectetur mollitia similique nemo totam itaque ad? Doloribus ratione
        sed, consequuntur accusantium praesentium, minus nam recusandae beatae
        magni error nobis inventore amet. Dolore accusamus explicabo modi
        mollitia ab consequatur ea necessitatibus sequi magni veniam ducimus
        iure quaerat recusandae debitis itaque doloremque laudantium amet fugit,
        blanditiis libero. Officia sint sed repudiandae! Quasi atque sint aut
        repudiandae aspernatur quibusdam reprehenderit nam aliquid, alias
        pariatur quos adipisci ex dignissimos illum eius error modi id,
        asperiores repellat eveniet fugiat, accusantium officiis eum! Commodi
        ipsa nobis aut repellat ullam consequatur expedita soluta saepe atque.
        Veritatis explicabo eos blanditiis, sit provident nam expedita
        voluptatum ullam ipsum aliquam fugit numquam repellat, dolores
        perspiciatis nobis voluptates ab natus et deserunt, quisquam dolor error
        sapiente voluptatibus? Repellat assumenda cum quis aliquid nesciunt
        molestiae eos necessitatibus temporibus et dicta non sed, eligendi
        maiores iste provident ex accusamus quod quo enim praesentium ea at
        mollitia. Quaerat molestias dicta blanditiis earum sapiente animi sit,
        doloremque nihil inventore sint ad vel fuga tempora ullam officia!
        Accusantium reprehenderit quaerat minus illum iure laudantium
        consequuntur nesciunt impedit totam, aperiam ducimus quidem optio magnam
        quae! Molestiae molestias placeat eum quo inventore, doloremque
        accusantium recusandae vero dolor odio reiciendis rerum, veniam animi
        quibusdam corporis cum perferendis voluptate deleniti aperiam, dolore
        alias reprehenderit porro? Dicta at dolore optio quis sit eveniet nam
        iusto esse nihil, recusandae non velit ex accusantium minus fugit amet
        qui illo. Facilis in deserunt harum veniam officiis odit, quidem error
        numquam, molestiae vero fugit unde dolorum eum dignissimos porro iure ea
        sequi voluptate, consectetur veritatis aut quod explicabo. Voluptates
        voluptate amet labore?cusandae eveniet autem facere quae iure iste velit
        mollitia laudantium repellat unde impedit eum fugiat totam sit numquam
        saepe, nisi sint atque. Omnis et id dolores! Veniam voluptates libero
        cum ratione numquam, architecto soluta magni iusto aliquid perspiciatis
        magnam dicta fugit officiis molestias commodi nihil illo dolor quia a
        sunt harum. Ullam minima eos impedit, cumque velit similique blanditiis!
        Quidem quas pariatur consectetur mollitia similique nemo totam itaque
        ad? Doloribus ratione sed, consequuntur accusantium praesentium, minus
        nam recusandae beatae magni error nobis inventore amet. Dolore accusamus
        explicabo modi mollitia ab consequatur ea necessitatibus sequi magni
        veniam ducimus iure quaerat recusandae debitis itaque doloremque
        laudantium amet fugit, blanditiis libero. Officia sint sed repudiandae!
        Quasi atque sint aut repudiandae aspernatur quibusdam reprehenderit nam
        aliquid, alias pariatur quos adipisci ex dignissimos illum eius error
        modi id, asperiores repellat eveniet fugiat, accusantium officiis eum!
        Commodi ipsa nobis aut repellat ullam consequatur expedita soluta saepe
        atque. Veritatis explicabo eos blanditiis, sit provident nam expedita
        voluptatum ullam ipsum aliquam fugit numquam repellat, dolores
        perspiciatis nobis voluptates ab natus et deserunt, quisquam dolor error
        sapiente voluptatibus? Repellat assumenda cum quis aliquid nesciunt
        molestiae eos necessitatibus temporibus et dicta non sed, eligendi
        maiores iste provident ex accusamus quod quo enim praesentium ea at
        mollitia. Quaerat molestias dicta blanditiis earum sapiente animi sit,
        doloremque nihil inventore sint ad vel fuga tempora ullam officia!
        Accusantium reprehenderit quaerat minus illum iure laudantium
        consequuntur nesciunt impedit totam, aperiam ducimus quidem optio magnam
        quae! Molestiae molestias placeat eum quo inventore, doloremque
        accusantium recusandae vero dolor odio reiciendis rerum, veniam animi
        quibusdam corporis cum perferendis voluptate deleniti aperiam, dolore
        alias reprehenderit porro? Dicta at dolore optio quis sit eveniet nam
        iusto esse nihil, recusandae non velit ex accusantium minus fugit amet
        qui illo. Facilis in deserunt harum veniam officiis odit, quidem error
        numquam, molestiae vero fugit unde dolorum eum dignissimos porro iure ea
        sequi voluptate, consectetur veritatis aut quod explicabo. Voluptates
      </p>
      <Footer />
    </>
  );
};

export default Home;
