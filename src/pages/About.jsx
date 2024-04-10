import React from "react";
import { skills, experiences } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I am{" "}
        <span className="blue-gradient_text font-semibold">Chandan Kumar</span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Software Engineer based in Pune, specilizating in Frontend Development
          or UI development.
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
            Software Engineer based in Pune, specilizating in Frontend
            Development or UI development.
          </p>
        </div>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={<div>
                  <img
                   src={experience.icon}
                   alt={experience.company_name}
                   className="w-[60%] h-[60%] object-contain"
                  />
                </div>}
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
                    <li key={index} className="text-black-500/50">
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default About;
