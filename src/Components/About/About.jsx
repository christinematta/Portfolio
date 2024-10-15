import "./About.css";
import { assets } from "../../assets/assets.js";
import Title from "../Title/Title.jsx";
import { useState, useEffect } from "react";

const About = () => {


  return (
    <div className="about" id="about">
      <Title title="About me" position='about' />
      <div className="about-sections">
        <div className="about-left">
          <img src={assets.profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I`m a passionate frontend developer with 3 years of hands-on
              experience, complemented by 6 years in Telecom Engineering and
              customer experience.{" "}
            </p>
            <p>
              I have honed my skills in frontend technologies like React, as
              well as backend technologies like Ruby, Ruby on Rails, and MySQL.
            </p>
            <p>
              My goal is to leverage my expertise to create innovative solutions
              that drive business growth and deliver exceptional user
              experience.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Next JS</p>
              <hr style={{ width: "40%" }} />
            </div>
            <div className="about-skill">
              <p>Ruby on Rails</p>
              <hr style={{ width: "40%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
