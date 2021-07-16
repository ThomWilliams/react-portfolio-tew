import React from "react";
import "./footer.css";
import linkedinLogo from "../images/linked_in.png";
import githubLogo from "../images/GitHub-Mark.png";
import facebookLogo from "../images/fb-round.png";

function Footer() {
  // const message = "The Footer";
  return (
    <footer className="footer">
      <div className="image-container">
        <a href="https://www.linkedin.com/in/thom-williams-624408205/">
          <img src={linkedinLogo} alt="Logo" />
        </a>
        <a href="https://github.com/ThomWilliams">
          <img src={githubLogo} alt="Logo" />
        </a>
        <a href="https://www.facebook.com/thom.williams.716">
          <img src={facebookLogo} alt="Logo" />
        </a>
      </div>
      <h4>©Thom Williams</h4>
    </footer>
  );
}

export default Footer;
