import React, { useState, useEffect, useRef } from "react";
import { IconUI, Trait } from "../icon/Icon";
import ButtonUI from "../button/Button";
import star_white from "../../assets/img/star-white.svg";
import star_color from "../../assets/img/star-color.svg";
import flair_1 from "../../assets/img/flair_1.svg";
import flair_2 from "../../assets/img/flair_2.svg";
import cercleGif from "../../assets/gif/cercle.gif";
import sary1 from "../../assets/img/cofra.jpg";
import sary2 from "../../assets/img/fanou.jpg";
import sary3 from "../../assets/img/ando.jpg";
import sary4 from "../../assets/img/Loic.jpg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import BoxAnimate from "../test_animation/TestAnimate";
function ContentSect0() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".stars").forEach(stars => {
      gsap.fromTo(
        stars,
        {
          rotation: 450,
          opacity: 0,
          y: 100
        },
        {
          rotation: 0,
          opacity: 1,
          y: 0,
          duration: 1.5,
          delay: 2.5,
          scrollTrigger: stars
        }
      );
    });

    gsap.fromTo(
      ".grand-titre h1 span",
      {
        opacity: 0,
        y: 100
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.1,
        delay: 1,
        ease: "power3.out",
        onComplete: function() {
          const spans = document.querySelectorAll(".grand-titre h1 span");
          spans.forEach(span => {
            span.addEventListener("mouseenter", () => {
              gsap.to(span, { scale: 1.5, duration: 0.3 });
            });
            span.addEventListener("mouseleave", () => {
              gsap.to(span, { scale: 1, duration: 0.3 });
            });
          });
        }
      }
    );

    gsap.fromTo(
      ".daty h1",
      {
        opacity: 0,
        y: 100
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        delay: 2,
        stagger: 1,
        ease: "power3.out"
      }
    );

    gsap.fromTo(
      ".flair-1",
      {
        opacity: 0,
        x: -700
      },
      {
        x: 0,
        rotation: 360,
        opacity: 1,
        duration: 3,
        delay: 2.5,
        scale: 1.5,
        ease: "bounce",
        onComplete: function() {
          gsap.to(".flair-1", {
            rotation: "+=360",
            duration: 3,
            repeat: -1,
            ease: "none",
            scale: 1,
            yoyo: true
          });
        }
      }
    );

    gsap.fromTo(
      ".flair-2",
      {
        opacity: 0,
        width: 0
      },
      {
        opacity: 1,
        width: 50,
        delay: 2.5,
        duration: 1.5
      }
    );

    gsap.fromTo(
      ".btn-with-icon",
      {
        opacity: 0,
        y: 100
      },
      {
        opacity: 1,
        y: 0,
        delay: 2,
        duration: 1.5
      }
    );
  }, []);
  return (
    <div id="container">
      <div className="content-sect-0">
        <div className="grand-titre">
          <h1>
            <span>W</span>
            <span>E</span>
            <span>B</span>
            <span>C</span>
            <span>U</span>
            <span>P</span>
          </h1>
          <h1>
            <span>M</span>
            <span>E</span>
            <span>M</span>
            <span>O</span>
            <span>R</span>
            <span>Y</span>
          </h1>
        </div>
          <div className="daty">
            <h1>2010 - 2023</h1>
          </div>
        <div id="trait">
          <Trait />
        </div>
        <div className="btn-with-icon">
          <ButtonUI
            btnNom="Get Started"
            backgroundColor="linear-gradient(to right, #4539A0, #D51970)"
            border="none"
            color="#fff"
            fontSize="14px"
            fontWeight="600"
            borderRadius="50px"
            padding="17px 50px"
          />
          <IconUI
            iconNom="fas fa-arrow-right"
            backgroundColor="transparent"
            border="solid 1px #fff"
            color="#fff"
            width="65px"
            height="53px"
            borderRadius="50px"
          />
        </div>
        <img src={star_white} alt="error" className="star-1 stars" />
        <img src={star_white} alt="error" className="star-2 stars" />
        <img src={flair_1} alt="error" className="flair-1 flairs" />
        <img src={flair_2} alt="error" className="flair-2 flairs" />
      </div>
    </div>
  );
}
function ContentSect1() {
  return (
    <section className="section-1">
      <BoxAnimate />
      <div id="container">
        <div className="content-sect-1">
          <img src={cercleGif} alt="error" className="cercle-gif" />
          <div className="sect-paragraphe">
            <div className="titre">
              <h1>
                Webcup
                <span>Timeline</span>
              </h1>
            </div>
            <p>
              Dive into a world of dazzling creativity, where the magic of technology
              technology intertwines with the competitive spirit of WebCup.
              Imagine a captivating three-dimensional performance, where the
              themes of innovation and collaboration come to life.
              come to life. In this digital work of art, WebCup winners shine like stars
              shine like stars, embodying the excellence and
              ingenuity that characterize this iconic event.
            </p>
            <div className="btn-with-icon">
              <IconUI
                iconNom="fas fa-arrow-right"
                backgroundColor="transparent"
                border="solid 1px #fff"
                color="#fff"
                width="53px"
                height="53px"
                borderRadius="50px"
              />
              <ButtonUI
                btnNom="Enter"
                backgroundColor="linear-gradient(to right, #4539A0, #D51970)"
                border="none"
                color="#fff"
                fontSize="14px"
                fontWeight="600"
                borderRadius="50px"
                padding="17px 50px"
              />
            </div>
            {/* <img src={star_color} alt="error" className="star-c-1" />
            <img src={star_color} alt="error" className="star-c-2" /> */}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContentSect2() {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const autoAdvance = () => {
      const slider = document.querySelector(".slider");
      const items = document.querySelectorAll(".item");
      slider.append(items[0]);

      setActiveIndex(prevIndex => (prevIndex + 1) % items.length);
    };
    const intervalId = setInterval(autoAdvance, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="section-2">
      <div id="container">
        <ul className="slider">
          <li className="item" style={{ backgroundImage: `url(${sary1})` }}>
            <div className="content">
              <Trait />
              <h2 className="title">Franco Ezail</h2>
              <p className="description">
                Front-End developer & UI/UX Designer
              </p>
            </div>
          </li>
          <li className="item" style={{ backgroundImage: `url(${sary2})` }}>
            <div className="content">
              <Trait />
              <h2 className="title">Fanou Ralambosoa</h2>
              <p className="description">
                {" "}Front-End developer & public speaker{" "}
              </p>
            </div>
          </li>
          <li className="item" style={{ backgroundImage: `url(${sary3})` }}>
            <div className="content">
              <Trait />
              <h2 className="title">Ando Mickael</h2>
              <p className="description"> Back-End developer </p>
            </div>
          </li>
          <li className="item" style={{ backgroundImage: `url(${sary4})` }}>
            <div className="content">
              <Trait />
              <h2 className="title">Loic Rajaofetra</h2>
              <p className="description"> Three JS & 3D developer </p>
            </div>
          </li>
          {/* <li className="item" style={{ backgroundImage: `url(${sary1})` }}>
            <div className="content">
              <Trait />
              <h2 className="title">Franco Ezail</h2>
              <p className="description">
                Front-End developer & UI/UX Designer
              </p>
            </div>
          </li>
          <li className="item" style={{ backgroundImage: `url(${sary2})` }}>
            <div className="content">
              <Trait />
              <h2 className="title">Fanou Ralambosoa</h2>
              <p className="description">
                {" "}Front-End developer & public speaker{" "}
              </p>
            </div>
          </li> */}
        </ul>
      </div>
    </section>
  );
}

export { ContentSect0, ContentSect1, ContentSect2 };
