import "./MyWork.css";

import mywork_data from "../../assets/mywork_data.js";
import Title from "../Title/Title.jsx";

const MyWork = () => {
  return (
    <div className="mywork" id='work'>
     <Title title="My Work" position="work"/>
      <div className="mywork-container">
        {mywork_data.map((work, index) =>
          (<img src={work.w_img} alt="" key={index} />)
        )}
      </div>
    </div>
  );
};

export default MyWork;
