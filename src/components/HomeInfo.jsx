import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
      <p className=" font-medium sm:text-xl text-center">{text}</p>
      <Link to={link} className="neo-brutalism-white neo-btn">
        {btnText}
        <img src={arrow} />
      </Link>
    </div>
  );

  const renderContent = {
    1: (
      <h1
        className="sm:text-xl sm:leading-snug 
      text-center neo-brutalism-blue py-4 px-8 rounded-md  text-white mx-5"
      >
        Hi, I am <span className="font-semibold">Chandan Kumar</span> 👋 <br />A
        Full Stack Developer
      </h1>
    ),
    2: (
      <InfoBox
        text={
          "I am currently employeed at Neso Academy and leading a Full stack E-learning platform."
        }
        link={"/about"}
        btnText={"Learn more"}
      />
    ),
    3: (
      <InfoBox
        text={"Build more than 6+ personal projects using React.js, Next.js, TypeScript, Tailwind CSS, Framer Motion, and Firebase. and also worked on some client projects."}
        link={"/projects"}
        btnText={"visit portfolio"}
      />
    ),
    4: (
      <InfoBox
        text={"Need project done or looking for a Full Stack Developer?"}
        link={"/contact"}
        btnText={"Let's connect"}
      />
    ),
  };

  return renderContent[currentStage] || null;
};

export default HomeInfo;
