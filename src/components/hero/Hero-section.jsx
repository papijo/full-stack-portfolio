/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */

import "./hero.css";
import Speech from "./Speech";
import { motion } from "motion/react";
// import { Canvas } from "@react-three/fiber";
// import Shape from "./Shape";
// import { Suspense } from "react";
// import RoomContainer from "./RoomContainer";
import OldLaptopContainer from "./OldLaptopContainer";

const awardVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const followVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      {/* Left */}
      <div className="hSection left">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="hTitle"
        >
          Hello There,
          <br /> <span>I'm Jon</span>{" "}
        </motion.h1>
        <motion.div
          variants={awardVariants}
          initial="initial"
          animate="animate"
          className="awards"
        >
          <motion.h3>Top Rated Developer</motion.h3>
          <motion.p>Lorem, ipsum dolor</motion.p>
          <motion.div className="awardList">
            <motion.img variants={awardVariants} src="/award1.png" alt="" />
            <motion.img variants={awardVariants} src="/award2.png" alt="" />
            <motion.img variants={awardVariants} src="/award3.png" alt="" />
          </motion.div>
        </motion.div>
        {/* SCROLL SVG */}
        <motion.a
          animate={{ y: [0, 5], opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          href="#services"
          className="scroll"
        >
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
            <motion.path
              animate={{ y: [0, 5] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
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
        </motion.a>
      </div>

      <div className="hSection right">
        {/* Follow */}
        <motion.div
          className="follow"
          variants={followVariants}
          initial="initial"
          animate="animate"
        >
          <motion.a href="/" variants={followVariants}>
            <img src="/instagram.png" alt="" />
          </motion.a>
          <motion.a href="/" variants={followVariants}>
            <img src="/youtube.png" alt="" />
          </motion.a>
          <motion.a href="/" variants={followVariants}>
            <img src="/facebook.png" alt="" />
          </motion.a>
          <motion.div variants={followVariants} className="followTextContainer">
            <div className="followText">FOLLOW ME</div>
          </motion.div>
        </motion.div>
        {/* Bubble */}
        <Speech />

        {/* Certificate */}
        <motion.div className="certificate">
          <img src="/certificate.png" alt="" />
          IBM CERTIFIED <br /> PROFESSIONAL <br /> DATA ENGINEER
        </motion.div>
        {/* Contact Button */}

        <motion.a
          href="/#contact"
          animate={{ x: [200, 0] }}
          transition={{ duration: 2 }}
        >
          <motion.div
            className="contactButton"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
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
          </motion.div>
        </motion.a>
      </div>
      <div className="bg">
        {/* 3d */}
        {/* <Canvas>
          <Suspense fallback="loading....">
            <Shape />
          </Suspense>
        </Canvas> */}

        {/* <RoomContainer /> */}
        <OldLaptopContainer />
        <div className="hImg">{/* <img src="/hero.png" alt="" /> */}</div>
      </div>
    </div>
  );
};

export default Hero;
