import React from "react";
import './Booknow.css'
import LooksOneRoundedIcon from '@mui/icons-material/LooksOneRounded';
import LooksTwoRoundedIcon from '@mui/icons-material/LooksTwoRounded';
import Looks3RoundedIcon from '@mui/icons-material/Looks3Rounded';

const BookNow = () => {
  return (
    <div className="bookNow">
      <div className="book-text">
        <h1 className="book-h1">BOOK AN APPOINTMENT</h1>
        <p className="book-p">
          Welcome your clients to the business and your mission statement. Give
          a brief description about the scheduling process and any details to
          know about beforehand.
        </p>
      </div>
       <div className="book-form">
       <div className="bookAppointment-booknow">
          <h3> <span><LooksOneRoundedIcon /></span> Choose Appointment</h3>
          <div className="plan-one">
            <div className="plan-flex">
              <h4>Free Consultation</h4>
              <p>30 minutes</p>
            </div>
            <div>
              <button className="plan-bt">Book</button>
            </div>
          </div>
          <div className="plan-two">
            <div className="plan-flex">
              <h4>Basic Services</h4>
              <p>1 hour @ $99.00</p>
            </div>
            <div>
              <button className="plan-bt">Book</button>
            </div>
          </div>
          <div className="plan-three">
            <div className="plan-flex">
              <h4>Advanced Services</h4>
              <p>1 hour @ $199.00</p>
            </div>
            <div>
              <button className="plan-bt">Book</button>
            </div>
          </div>
        </div>
        <div className="your-info-booknow">
          <h3>  <span><LooksTwoRoundedIcon /></span> Your Information</h3>

        </div>
        <div className="confirmation-booknow">
          <h3> <span>< Looks3RoundedIcon /></span> Confirmation</h3>

        </div>
        <div className="powerdBy">
          <p>Powered by</p>
          <h5>acuity: scheduling</h5>
        </div>
       </div>
    </div>
  );
};

export default BookNow;
