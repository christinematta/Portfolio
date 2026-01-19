import "./MyWork.css";

import mywork_data from "../../assets/mywork_data.js";
import Title from "../Title/Title.jsx";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const MyWork = () => {
  return (
    <div className="mywork" id="work">
      <Title title="My Work" position="work" />
      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <div className="project_container" key={index}>
            {/* Image → Live project */}
            <a
              href={work.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mywork-item"
            >
              <img src={work.w_img} alt={`${work.title} preview`} />
            </a>

            <div className="project_links">
              <a
                href={work.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project_live"
              >
                <FaExternalLinkAlt />
              </a>

              <a
                href={work.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project_github"
              >
                <FiGithub />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWork;
