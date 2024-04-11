import React from "react";
import { projects } from "../constants";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My {""}
        <span className="blue-gradient_text font-semibold">Projects</span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          I have extensive experience in developing user interface applications
          for various purposes, including replicating movie applications,
          creating online exam platforms, and building online photo fetching
          tools. Additionally, I have successfully delivered projects for
          clients. Here are some highlights of my significant projects:
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
              <h4>{project.name}</h4>
              <p>{project.description}</p>
              <Link></Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
