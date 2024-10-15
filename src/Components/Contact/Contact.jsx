import "./Contact.css";
import { useState } from "react";
import Title from "../Title/Title.jsx";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";

const Contact = ({ setShowSubPopup }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setShowSubPopup(true);
      setFormData({name:'',email:'',message:''})
    }
  };

  return (
    <div className="contact" id="contact">
      <Title
        title="Contact"
        position="contact"
      />
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let`s talk</h1>
          <p>
            I am currently available for new opportunities and would be thrilled
            to collaborate on your next project. Don`t hesitate to message me
            anytime with your ideas!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <IoMail />
              <p>Christine.i.matta@gmail.com</p>
            </div>
            <div className="contact-detail">
              <FaPhone />
              <p>+31 639252042</p>
            </div>
            <div className="contact-detail">
              <FaLocationDot />
              <p>Netherlands, Haarlem</p>
            </div>
            <div className="social-media">
              <a href="https://www.linkedin.com/in/christinmatta/">
                <CiLinkedin className="social-icon" />
              </a>
              <a href="https://github.com/christinematta">
                <FiGithub className="social-icon" />
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <div className="form-data">
            <label htmlFor="" >Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-data">
            <label htmlFor="">Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-data">
            <label htmlFor="">Write your message here</label>
            <textarea
              name="message"
              rows="8"
              placeholder="Enter your name"
              required
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="contact-submit"
          >
            Submit now
          </button>
        </form>
      </div>

      <p className="copyright">
      <hr />
        Developed by Christine Matta - 2024
      </p>
    </div>

  );
};

export default Contact;
