import React, { useEffect } from "react";
import ButtonUI from "../button/Button";
import { IconUI } from "../icon/Icon";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
function HeaderUI() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(".header-box").forEach(headerBox => {
      gsap.fromTo(
        headerBox,
        {
          opacity: 0,
          y: -50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          delay: 1,
          scrollTrigger: headerBox
        }
      );
    });
  }, []);
  return (
    <header>
      <div className="header-box">
        <div className="header-logo">
          <i className="fas fa-globe" />
        </div>
        <nav className="header-bar">
          <div className="header-links">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </nav>
        <div className="header-right">
          <div className="btn-with-icon">
            <ButtonUI
              btnNom="Sign up"
              backgroundColor="transparent"
              border="solid 1px #fff"
              color="#fff"
              fontSize="14px"
              padding="15px 30px"
              borderRadius="30px"
            />
            <IconUI
              iconNom="fas fa-arrow-right"
              backgroundColor="transparent"
              border="solid 1px #fff"
              color="#fff"
              width="53px"
              height="53px"
              borderRadius="50%"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
function HeaderDash() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(".header-box").forEach(headerBox => {
      gsap.fromTo(
        headerBox,
        {
          opacity: 0,
          y: -50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          delay: 1,
          scrollTrigger: headerBox
        }
      );
    });
  }, []);
  return (
    <header>
      <div className="header-box">
        <div
          className="header-logo"
          style={{ display: "flex", alignItems: "center" }}
        >
          <i className="fas fa-globe" />
          <h3
            style={{ color: "#fff", fontFamily: "Poppins", padding: "0 10px" }}
          >
            Dashboard
          </h3>
        </div>
        <div className="header-right">
          <div className="btn-with-icon">
            <ButtonUI
              btnNom="Log out"
              backgroundColor="transparent"
              border="solid 1px #fff"
              color="#fff"
              fontSize="14px"
              padding="15px 30px"
              borderRadius="30px"
            />
            <IconUI
              iconNom="fas fa-arrow-right"
              backgroundColor="transparent"
              border="solid 1px #fff"
              color="#fff"
              width="53px"
              height="53px"
              borderRadius="50%"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
export { HeaderUI, HeaderDash };
