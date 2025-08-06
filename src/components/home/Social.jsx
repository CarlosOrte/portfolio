import React from "react";
import "./social.css";
const Social = () => {
  return (
    <div className="home__social">
      <a href="https://www.linkedin.com/in/carlos-alberto-ortega-ch%C3%A1vez-1b4308227/" className="home__social-icon" target="_blank">
      <i class='bx bxl-linkedin' ></i>
      </a>

      <a href="https://x.com/CarlosOrtegaUX?t=wKDEo1QhOQtF_DzvngIfxQ&s=09" className="home__social-icon" target="_blank">
        <i class="uil uil-twitter"></i>
      </a>

      <a href="https://github.com/CarlosOrte" className="home__social-icon" target="_blank">
        <i class="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
