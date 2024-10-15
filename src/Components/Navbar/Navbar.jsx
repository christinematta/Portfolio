import "./Navbar.css";
import { assets } from "../../assets/assets.js";
import { useState, useEffect, useRef } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { IoMail } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [navbarOpacity, setNavbarOpacity] = useState("no-opacity");
  const menuRef = useRef();

  const menuOpen = () => {
    menuRef.current.style.right = "0";
  };
  const menuClose = () => {
    menuRef.current.style.right = "-350px";
  };
  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "technologies", label: "Technologies" },
    { id: "work", label: "My Work" },
    { id: "contact", label: "Contact" },
  ];
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setNavbarOpacity(scrollTop > 50 ? "opacity" : "no-opacity");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <img src={assets.name_logo} alt="Site Logo" />
      <TiThMenu className="nav-burger-menu" onClick={menuOpen}/>
      <ul className="nav-menu" ref={menuRef}>
        <IoMdClose className="nav-menu-close" onClick={menuClose}/>
        {menuItems.map((item) => (
          <li
            key={item.id}
            onClick={() => setMenu(item.id)}
            className={`navbar ${navbarOpacity}`}
          >
            <AnchorLink
              className="anchor-link"
              offset={200}
              href={`#${item.id}`}
            >
              {" "}
              <p>{item.label}</p>
              {menu === item.id && (
                <img src={assets.logo} alt={`${item.label} icon`} />
              )}
            </AnchorLink>
          </li>
        ))}
      </ul>
      {/* <div className="nav-connect">Connect With Me</div> */}
      <div className="social-media-navbar">
        <a href="mailto:Christine.i.matta@gmail.com">
          {" "}
          <IoMail className="social-icon-navbar" />
        </a>
        <a href="https://www.linkedin.com/in/christinmatta/">
          <CiLinkedin className="social-icon-navbar" />
        </a>
        <a href="https://github.com/christinematta">
          <FiGithub className="social-icon-navbar" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
