import React from "react";
import { skills, experiences } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I am{" "}
        <span className="blue-gradient_text font-semibold">Chandan Kumar</span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Frontend Developer/Ui Developer based in India, specilization in
          Javascript, Reactjs, NextJs, TypeScript, Jest, ReduxToolkit
        </p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My skills</h3>
      </div>
      <div className="mt-15 flex flex-wrap gap-12">
        {skills.map((skill, index) => (
          <div key={index} className="block-container h-20 w-20">
            <div className="btn-back rounded-xl" />
            <div className="btn-front rounded-xl flex justify-center items-center ">
              <img
                src={skill.imageUrl}
                alt={skill.name}
                className="w-1/2 h-1/2 object-contain cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="py-16">
        <h3 className="subhead-text">My work Experience </h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
          Software Engineer specializing in Frontend Development and UI Development, with experience in both startups and MNCs.
          </p>
        </div>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center h-full w-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[70%] h-[70%] object-contain rounded-md"
                    />
                  </div>
                }
                iconStyle={{
                  background: experience.iconBg,
                  boxShadow: "none",
                }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/100 font-normal pl-1"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <hr className="border-slate-200" />
      {/* <CTA /> */}
    </section>
  );
};

export default About;
