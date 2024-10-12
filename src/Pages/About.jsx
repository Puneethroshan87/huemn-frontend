import React from "react";
import "./About.css";
import advancedServices from "../images/AdvancedServices.webp";
import { Link } from "react-router-dom";
import FreeConsultant from '../images/FreeConsultant.webp'



const About = () => {
  return (
    <>
    <div className="about">
      <div className="about__container">
        <h1 className="about-h1">WHO WE ARE</h1>
        <p className="about-p">
          You might talk about your origin story, your team, highlight awards or
          recognitions, or share photos. Tap into your creativity. You’ve got
          this. The way you tell your story online can make all the difference.
          Don’t worry about sounding professional. Sound like you. There are
          over 1.5 billion websites out there, but your story is what’s going to
          separate this one from the rest. If you read the words back and don’t
          hear your own voice in your head, that’s a good sign you still have
          more work to do.
        </p>
      </div>
      <div className="About-img">
        <img src={advancedServices} alt="about" />
      </div>
    </div>
      <div className="service-three">
      <img src={FreeConsultant} alt="free "   className="free-consultant" />
       <div className="book-free">
        <h3 className="book-free-h3">GET STARTED</h3>
        <Link to={'/Services'}>
        <button className="book-free-bt">VIEW SERVICES</button>
        </Link>
       </div>
    </div>
    </>
  );
};

export default About;
