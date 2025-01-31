import { TypeAnimation } from "react-type-animation";

const Speech = () => {
  return (
    <div className="bubbleContainer">
      <div className="bubble">
        <TypeAnimation
          sequence={[
            "Solutions Engineer",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "Full-Stack Developer",
            1000,
            "Data Engineer",
            1000,
            "Mentor and Teacher",
            1000,
          ]}
          wrapper="span"
          speed={30}
          deletionSpeed={50}
          style={{ fontSize: "25px", display: "inline-block" }}
          repeat={Infinity}
        />
      </div>
      <img src="/man.png" alt="" />
    </div>
  );
};

export default Speech;
