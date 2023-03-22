import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import UpNavbar from "../components/UpNavbar";
import "../css/home.css";
import myimg from "../img/myimg.jpg";

const Home = () => {
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
            <p className="aboutdesc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus quasi deserunt veniam. Commodi amet repudiandae eius
              error? Repudiandae, fugiat ut voluptas explicabo sint nulla
              voluptates facere vel alias voluptatum corporis consectetur saepe
              incidunt assumenda laudantium odio officia in temporibus nisi
              itaque laborum natus quidem aspernatur veniam? Fugiat optio est ex
              architecto neque, aut temporibus pariatur dolores sint ipsam
              facere odit!
            </p>
          </div>
        </div>
      </div>
      <div className="bg img1">
        <h1 className="titleWay1">You can download and read my cw</h1>
      </div>
      <section className="s2">
        <h1 className="work">How To Create a Parallax Scrolling Effect</h1>
        <p className="workdesc">
          Use a container element and add a background image to the container
          with a specific height. Then use the{" "}
          <span className="bold2">background-attachment: fixed</span> to create
          the actual parallax effect. The other background properties are used
          to center and scale the image perfectly
        </p>
      </section>
      <div className="bg img2">
        <h1 className="titleWay1">You can download and read my cw</h1>
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
