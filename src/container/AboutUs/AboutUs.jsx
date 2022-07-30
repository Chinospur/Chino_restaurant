import React from 'react';
import {images} from "../../constants";

import './AboutUs.css';

const AboutUs = () => (
  <div className=" app__aboutus app__bg flex__center section__padding" id=" about">
    <div className=" app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>
    <div className=" app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className=" headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__image" />
        <p className="p__opensans">
          GERICHT is an online Restaurant. <br /> We run food customer services. Just make the order and you will witness the best ever delivery services.
          Our major aim is to satisfy your hunger.<br /> Call on +2348175074725. <br /> email: chinosaintly@gmail.com 
        </p>
        <button type="button" className=" custom__button">Know More </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className=" headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__image" />
        <p className="p__opensans">
          GERICHT, an online Restaurant was founded by Emmanuel Onyekwelu in 2022.
          The establishment of this online delivery services was as a result of the increasing digital revolution 
          which has made everyone on the planet to adapt to web lifestyle.
        </p>
        <button type="button" className=" custom__button">Know More </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
