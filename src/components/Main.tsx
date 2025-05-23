import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://github.com/heatherlevantine/Portfolio/blob/main/WhatsApp%20Image%202024-09-18%20at%2000.50.15_c27745c9.jpeg?raw=true" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/isaaclalramnghaka" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/isaac-lalramnghaka-039300366" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Isaac Lalramnghaka</h1>
          <p>Software Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/isaaclalramnghaka" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/isaac-lalramnghaka-039300366" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;