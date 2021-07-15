import React from "react";
import "./footer.css";
import linkedinLogo from "../images/linked_in.png";
import githubLogo from "../images/GitHub-Mark.png";

function Footer() {
  const message = "The Footer";
  return (
    <div className="footer">
      <div className="image-container">
        <a href="https://www.linkedin.com/in/thom-williams-624408205/">
          <img src={linkedinLogo} alt="Logo" />
        </a>
        <a href="https://github.com/ThomWilliams">
          <img src={githubLogo} alt="Logo" />
        </a>
      </div>
    </div>
  );
}

export default Footer;