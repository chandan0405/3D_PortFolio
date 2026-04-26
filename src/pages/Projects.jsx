import React from "react";
import { projects } from "../constants";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My {""}
        <span className="blue-gradient_text font-semibold">Projects</span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          I have 3+ years of experience in developing web applications using React.js, Next.js, TypeScript, Tailwind CSS, Framer Motion, and Firebase. and also worked on some client projects.
          I have build many personal projects but here are some of my highlighted projects:
        </p>
      </div>
      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project, index) => (
          <div className="lg:w-[400px] w-full " key={project.name}>
            <div className="block-container h-12 w-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center ">
                <img
                  src={project.iconUrl}
                  alt="Project Icon"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-3 text-slate-500">
              <h4 className="text-2xl font-poppins font-semibold">{project.name}</h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  click here to see
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="border-slate-200" />
      {/* <CTA  /> */}
    </section>
  );
};

export default Projects;
