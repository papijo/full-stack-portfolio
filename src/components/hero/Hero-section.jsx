/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import "./hero.css";
import Speech from "./Speech";

const Hero = () => {
  return (
    <div className="hero">
      {/* Left */}
      <div className="hSection left">
        <h1 className="hTitle">
          Howdy,
          <br /> <span>I'm Papijo !!!!</span>{" "}
        </h1>
        <div className="awards">
          <h2>Top Rated Developer</h2>
          <p>Lorem, ipsum dolor</p>
          <div className="awardList">
            <img src="/award1.png" alt="" />
            <img src="/award2.png" alt="" />
            <img src="/award3.png" alt="" />
          </div>
        </div>
        {/* SCROLL SVG */}
        <a href="#services" className="scroll">
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
              stroke="#fff"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 6V14"
              stroke="#fff"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15 11L12 14L9 11"
              stroke="#fff"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </div>

      <div className="hSection right">
        {/* Follow */}
        <div className="follow">
          <a href="/">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="/">
            <img src="/youtube.png" alt="" />
          </a>
          <a href="/">
            <img src="/facebook.png" alt="" />
          </a>
          <div className="followTextContainer">
            <div className="followText">FOLLOW ME</div>
          </div>
        </div>
        {/* Bubble */}
        <Speech />

        {/* Certificate */}
        <div className="certificate">
          <img src="/certificate.png" alt="" />
          <p>
            IBM CERTIFIED <br /> PROFESSIONAL <br /> DATA ENGINEER{" "}
          </p>
        </div>
        {/* Contact Button */}

        <a href="/#contact">
          <div className="contactButton">
            <svg viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="pink" />
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
              <text className="circleText">
                <textPath href="#innerCirclePath">Hire Now •</textPath>
              </text>
              <text className="circleText">
                <textPath href="#innerCirclePath" startOffset="44%">
                  Contact Me.
                </textPath>
              </text>
            </svg>
            <div className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50"
                height="50"
                fill="none"
                stroke="black"
                strokeWidth="2"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
            </div>
          </div>
        </a>
      </div>
      <div className="bg">
        {/* 3d */}
        <div className="hImg">
          <img src="/hero.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
