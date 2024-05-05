import React, { useEffect } from "react";
import { HeaderUI } from "../header/Header";
import { ContentSect0 } from "../content/Content";
import { IconUI } from "../icon/Icon";
import backGif from "../../assets/gif/back.gif";
import { Link } from "react-router-dom";
import gsap from "gsap";
function Section0() {
  useEffect(() => {
    gsap.fromTo(
      ".back-gif",
      {
        width: 0,
        opacity: 0
      },
      {
        width: "600px",
        opacity: 1,
        duration: 2,
        delay: 1.5
      }
    );
  }, []);
  return (
    <div className="section-0">
      <HeaderUI />
      <ContentSect0 />
      <div className="social-media">
        <Link to="https://www.facebook.com/profile.php?id=100088511136039&locale=fr_FR">
          <IconUI
            iconNom="fab fa-facebook-f"
            color="#fff"
            className="icon-hover"
          />
        </Link>
        <Link to="https://www.youtube.com/@InformaTiako">
          <IconUI iconNom="fab fa-youtube" color="#fff" className="icon-hover" />
        </Link>
          <IconUI iconNom="fab fa-discord" color="#fff" className="icon-hover" />
      </div>
      <div className="scroll-down">
        <IconUI
          iconNom="fas fa-angle-double-down"
          color="#fff"
          fontSize="25px"
        />
      </div>
      <img src={backGif} alt="error" className="back-gif" />
    </div>
  );
}
export default Section0;
