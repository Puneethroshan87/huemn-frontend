import React from "react";
import "./Services.css";
import BasicServices from "../images/BasicServices.webp";
import intermediateServices from "../images/intermediateServices.webp";
import advancedServices from "../images/AdvancedServices.webp";
import {Link} from "react-router-dom"
import FreeConsultant from '../images/FreeConsultant.webp'



const Services = () => {
  return (
    <>
      <div className="services">
        <div className="service-one">
          <h1 className="service-one-h1"> OUR SERVICES </h1>
          <p className="service-one-p">
            Our services are designed to meet the needs of our customers. We
            offer a wide range of services that cater to different industries
            and sectors.
          </p>
        </div>
      </div>
      <div className="service-two">
        <div className="basic-services">
          <img
            src={BasicServices}
            alt="BasicServices"
            className="basicServices"
          />
          <h3 className="basic-h3">BASIC SERVICES</h3>
          <p className="basic-p">$99</p>
          <p  className="basic-des">

            Describe important details like price, value, length of service, and
            why it’s unique. Or use these sections to showcase different key
            values of your products or services.
          </p>
          <Link to={'/book-now'}>
          <button className="ser-bt">BOOK NOW</button>
          </Link>
        </div>
        <div className="intermediate-services">
          <img
            src={intermediateServices}
            alt="intermediateServices"
            className="intermediateServices"
          />
          <h3 className="basic-h3">INTERMEDIATE SERVICES</h3>
          <p className="basic-p">$149</p>
          <p className="basic-des">
            Describe important details like price, value, length of service, and
            why it’s unique. Or use these sections to showcase different key
            values of your products or services.
          </p>
          <Link to={'/book-now'}>
          <button className="ser-bt">BOOK NOW</button>
          </Link>
        </div>
        <div className="advanced-services">
          <img
            src={advancedServices}
            alt="AdvancedServices"
            className="advancedServices"
          />
          <h3 className="advanced-h3">ADVANCED SERVICES</h3>
          <p className="advanced-p">$199</p>
          <p className="basic-des">
            Describe important details like price, value, length of service, and
            why it’s unique. Or use these sections to showcase different key
            values of your products or services.
          </p>
          <Link to={'/book-now'}>
          <button className="ser-bt">BOOK NOW</button>
          </Link>
        </div>
      </div>
      <div className="service-three">
        <img src={FreeConsultant} alt="free "   className="free-consultant" />
         <div className="book-free">
          <h3 className="book-free-h3">BOOK A FREE CONSULTATION</h3>
          <p className="book-free-p">Get a free consultation with one of our experts to discuss your needs and goals.</p>
          <Link to={'/book-now'}>
          <button className="book-free-bt">BOOK NOW</button>
          </Link>
         </div>
      </div>
    </>
  );
};

export default Services;
