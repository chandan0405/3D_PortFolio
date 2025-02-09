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
        software Engineer
      </h1>
    ),
    2: (
      <InfoBox
        text={
          "I am currently working in a startup and have worked for an MNC too. I have a good understanding of frontend skills."
        }
        link={"/about"}
        btnText={"Learn more"}
      />
    ),
    3: (
      <InfoBox
        text={"Developed many personal project "}
        link={"/projects"}
        btnText={"visit portfolio"}
      />
    ),
    4: (
      <InfoBox
        text={"Need project done or looking for UI developer?"}
        link={"/contact"}
        btnText={"Let's connect"}
      />
    ),
  };

  return renderContent[currentStage] || null;
};

export default HomeInfo;
