import React from "react";
import "./Project.css";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";

const Project = () => {
  return (
    <div className="project_container">
      <div className="project_item">
        <img className="project_img" alt="project_01" src="img/Exercise.PNG" />
        <div>Team Project 운동人</div>
        <button
          className="linkbutton"
          onClick={() =>
            window.open("https://github.com/weed7968/ExerciseMan", "_blank")
          }
        >
          <GitHubIcon fontSize="large" />
        </button>
        <button
          className="linkbutton"
          onClick={() =>
            window.open("https://sportsfit.netlify.app/", "_blank")
          }
        >
          <LanguageIcon fontSize="large" />
        </button>
      </div>

      <div className="project_item">
        <img className="project_img" alt="project_02" src="img/Pofol.PNG" />
        <div>포트폴리오</div>
        <button
          className="linkbutton"
          onClick={() =>
            window.open("https://github.com/weed7968/pofol2", "_blank")
          }
        >
          <GitHubIcon fontSize="large" />
        </button>
        <button
          className="linkbutton"
          onClick={() => window.open("https://sscpofol.netlify.app/", "_blank")}
        >
          <LanguageIcon fontSize="large" />
        </button>
      </div>

      <div className="project_item">
        <img
          className="project_img"
          alt="project_03"
          src="img/personal-project.png"
        />
        <div>personal Project</div>
        <button
          className="linkbutton"
          onClick={() =>
            window.open(
              "https://github.com/weed7968/personal-project",
              "_blank"
            )
          }
        >
          <GitHubIcon fontSize="large" />
        </button>
        <button
          className="linkbutton"
          onClick={() => window.open("", "_blank")}
        >
          <LanguageIcon fontSize="large" />
        </button>
      </div>
    </div>
  );
};

export default Project;
