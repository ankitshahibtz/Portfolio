import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { Animate } from "react-simple-animate";
import MyPdf from '../../resume/Updated-CV-Ankit-Shahi.pdf';
import "./styles.scss";

const Home = () => {
  function handleNavigateLinkedin() {
    window.open(
      "https://www.linkedin.com/in/ankit-shahi-99b85622a/",
      "_blank"
    );
  }

  return (
    <section className="home" id="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Ankit Shahi
          <br />
          .Net Full Stack Developer.
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(600px)",
        }}
        end={{
          transform: "translateX(0px)",
        }}
      >
        <div className="contact-me">
          <div className="contact-me__buttons-wrapper">
            <a href={MyPdf} download="Updated-CV-Ankit-Shahi.pdf">Download resume</a>
          </div>
          <div className="contact-me__socials-wrapper">
            <FaLinkedin onClick={handleNavigateLinkedin} size={32} />
          </div>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
