import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import portfolio_pic from "../../assets/portfolio_pic.png";
const Hero = () => {
  return (
    <div className="hero ">
      <div className="circle">
        <img src={portfolio_pic} alt="" />
      </div>

      <h1>
        {" "}
        <span>I`m Christine Matta,</span>frontend developer based in
        Netherlands.
      </h1>
      <p>
        {" "}
        I`m a frontend developer with a passion for crafting accessible,
        engaging websites that are built with creativity and precision.
      </p>
      <div className="hero-action">
        <AnchorLink href="#contact" offset={200}>
          {" "}
          <div className="hero-connect">Connect with Me</div>
        </AnchorLink>

        <div className="hero-resume">
          <a
            href="/Christine-Matta-Frontend.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-resume-btn"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
