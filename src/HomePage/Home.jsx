import React from "react";
import key from "../images/Keyboard.jpeg";
import mouse from "../images/mouse.webp";
import KeyboardProduct from "../images/keyboardProduct.webp";
import BasicServices from "../images/BasicServices.webp";
import intermediateServices from "../images/intermediateServices.webp";
import advancedServices from "../images/AdvancedServices.webp";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LooksOneRoundedIcon from '@mui/icons-material/LooksOneRounded';
import LooksTwoRoundedIcon from '@mui/icons-material/LooksTwoRounded';
import Looks3RoundedIcon from '@mui/icons-material/Looks3Rounded';
import "./Home.css";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home-div-one">
          <img src={key} alt="Keyboard" className="keyboard-img" />
          <h2 className="divOne-h2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore,
            atque. Qui nulla, velit ipsa laborum similique sed odio temporibus
            eligendi numquam vero aperiam hic eaque repellat quasi suscipit
            ipsum itaque.
          </h2>
          <Link to={"/About"} className="divOne-linkbt">
            <button className="divOne-Bt">Learn More</button>
          </Link>
          {/* <Marquee className="marquee">
            <h1>
              SPR SPR SPR <span>SPR</span> SPR   SPR SPR SPR   
            </h1>
          </Marquee> */}
        </div>

        {/* Featured Products Section */}
        <div className="featured">
          <h1>FEATURED PRODUCTS</h1>
          <div className="product-name">
            <div className="product-mouse">
              <img src={mouse} alt="mouse" className="mouseImg" />
              <h3 className="mouse-h3">MOUSE</h3>
              <p className="mouse-p">$25</p>
            </div>
            <div className="product-keyboard">
              <img
                src={KeyboardProduct}
                alt="Keyboard"
                className="keyboardImg"
              />
              <h3 className="mouse-h3">KEYBOARD</h3>
              <p className="mouse-p">$25</p>
            </div>
          </div>

          <div className="services">
            <div className="basic-services">
              <img
                src={BasicServices}
                alt="BasicServices"
                className="basicServices"
              />
              <h3 className="basic-h3">BASIC SERVICES</h3>
              <p className="basic-p">$99</p>
            </div>
            <div className="intermediate-services">
              <img
                src={intermediateServices}
                alt="intermediateServices"
                className="intermediateServices"
              />
              <h3 className="intermediateServices-h3">INTERMEDIATE SERVICES</h3>
              <p className="intermediateServices-p">$149</p>
            </div>
            <div className="advanced-services">
              <img
                src={advancedServices}
                alt="AdvancedServices"
                className="advancedServices"
              />
              <h3 className="advanced-h3">ADVANCED SERVICES</h3>
              <p className="advanced-p">$199</p>
            </div>
          </div>
        </div>

        {/* book an appointment */}
        <div className="bookAppointment">
          <h3 className="bookAppointment-h3"> <span><LooksOneRoundedIcon /></span> Choose Appointment</h3>
          <div className="plan-one">
            <div className="plan-flex">
              <h4 className="plan-flex-h4">Free Consultation</h4>
              <p className="plan-flex-p">30 minutes</p>
            </div>
            <div>
              <button className="plan-bt">Book</button>
            </div>
          </div>
          <div className="plan-two">
            <div className="plan-flex">
              <h4 className="plan-flex-h4">Basic Services</h4>
              <p className="plan-flex-p">1 hour @ $99.00</p>
            </div>
            <div>
              <button className="plan-bt">Book</button>
            </div>
          </div>
          <div className="plan-three">
            <div className="plan-flex">
              <h4 className="plan-flex-h4">Advanced Services</h4>
              <p className="plan-flex-p">1 hour @ $199.00</p>
            </div>
            <div>
              <button className="plan-bt">Book</button>
            </div>
          </div>
        </div>
        <div className="your-info">
          <h3>  <span><LooksTwoRoundedIcon /></span> Your Information</h3>

        </div>
        <div className="confirmation">
          <h3> <span>< Looks3RoundedIcon /></span> Confirmation</h3>

        </div>
        <div className="powerdBy">
          <p className="powerdby-p">Powered by</p>
          <h5 className="powerdby-h5">acuity: scheduling</h5>
        </div>

        {/* About */}

        <div className="about">
          <div className="about-des">
            <h2 className="abt-h2">MORE ABOUT OUR BRAND</h2>
            <p className="abt-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              praesentium delectus tempore dicta cum debitis odit, quidem minima
              aspernatur ullam eaque corporis officia! Nesciunt, explicabo
              necessitatibus. Voluptates beatae quasi et!
            </p>
            <button className="abt-bt">LEARN MORE</button>
          </div>
          <div className="aboutImg">
            <img src={advancedServices} alt="intermediateServices" />
          </div>
        </div>

        {/* marquee */}

        <Marquee className="marque-followUs">
            <h1>
             FOLLOW US . FOLLOW US .    FOLLOW US.     FOLLOW US .
            </h1>
          </Marquee> 
          <button className="social-bt">SOCIAL</button>
          <div className="icons">
            <InstagramIcon  style={{fontSize:"10vw"}}/>
            <FacebookIcon style={{fontSize:"10vw"}}/>
            <TwitterIcon  style={{fontSize:"10vw"}}/>
            <LinkedInIcon  style={{fontSize:"10vw"}}/>

          </div>
      </div>
    </>
  );
};

export default Home;
