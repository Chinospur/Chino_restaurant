import React from 'react';
import { SubHeading } from "../../components";
import { images } from "../../constants";
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">
        What we believe in
      </h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
          One cannot think well, love well, sleep well,
          </p>
        </div>
        <p className="p__opensans">
        if one has not dined well.
        </p>
      </div>
      <div className="app__chef-sign">
        <p className="p__opensans">Emmanuel Onyekwelu</p>
        <p className="p__opensans">Chef & Founder</p>
      </div>
    </div>
  </div>
);

export default Chef;