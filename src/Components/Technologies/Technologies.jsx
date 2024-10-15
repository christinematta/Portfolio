
import "./Technologies.css";
import { assets } from "../../assets/assets";
import Title from "../Title/Title.jsx";
const Technologies = () => {
  return (
    <div className="technologies" id='technologies'>
      <Title title="Technologies" position='technologies' />
      <div className="technologies-icons">
      {Object.values(assets.icon).map((item, index) => (

        <div className="technology-icon" key={index}>
          <img src={item} alt=""/>
        </div>

      ))}
      </div>

    </div>
  );
};

export default Technologies;
