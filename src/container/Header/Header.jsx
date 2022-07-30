import React from 'react';
import { SubHeading }from "../../components";
import {images}  from "../../constants";
import './Header.css';

const Header = () => (
  <div className="app__header app_wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new  flavour" />
      <h1 className="app__header-h1">
        The Key to Fine Dining
      </h1>
      <p className="p__opensans" style={{ margin: " 2rem 0"}}>
        When it comes to the key to a fine dining, <br/>
        you start by looking at it from the perspective of the  
         choices you make, <br/> which is an important factor to getting a nice dining 
        from the various food delicacies.
      </p>
      <button type="button" className="custom__button">
      Explore Menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
