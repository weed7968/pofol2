import React from "react";
import "./Language.css";

const Language = () => {
  return (
    <div className="language_main">
      <div className="language_contents">
        <div>
          저는 이 <span className="language_color">언어</span>를 잘합니다.
        </div>
        <div className="language">· HTML/CSS</div>
        <div className="language">· JavaScript</div>
        <div className="language">· React</div>
      </div>
      <div className="language_contents">
        <div>
          저는 이 <span className="language_color">언어</span>를 써봤습니다.
        </div>
        <div className="language">· Python</div>
        <div className="language">· Java</div>
        <div className="language">· JSP</div>
      </div>
    </div>
  );
};

export default Language;
