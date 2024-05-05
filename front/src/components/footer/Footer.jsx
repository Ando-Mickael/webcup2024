import React from "react";
import { IconUI } from "../icon/Icon";
import ButtonUI from "../button/Button";
function FooterUI() {
  return (
    <footer>
      <div className="footer-box">
          <div className="footer-logo">
            <i className="fas fa-globe" />
            <h3>Informa'Tiako</h3>
          </div>
          <div className="explore">
            <h3>Explore</h3>
            <ul className="footer-nav">
              <li>
                <a href="">home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Service</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
          <div className="follow">
            <h3>Follow us</h3>
            <div className="icon-flex">
                <IconUI iconNom="fab fa-facebook-f" color="#fff" />
                <IconUI iconNom="fab fa-pinterest-p" color="#fff" />
                <IconUI iconNom="fab fa-twitter" color="#fff" />
            </div>
          </div>
          <div className="btn-with-icon">
            <ButtonUI
              btnNom="Sign up"
              backgroundColor="transparent"
              border="solid 1px #fff"
              color="#fff"
              fontSize="14px"
              borderRadius="50px"
              padding="15px 30px"
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
    </footer>
  );
}
export default FooterUI;
