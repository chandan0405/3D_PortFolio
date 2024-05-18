import { intelli } from "../assets/images";
import {
  contact,
  css,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  mui,
  nextjs,
  pricewise,
  react,
  redux,
  tailwindcss,
  typescript,
  search,
  movie,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },

  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "UI Developer",
    company_name: "Intelliswift Software Inc",
    icon: intelli,
    iconBg: "#accbe1",
    date: "jan 2023 - present",
    points: [
      "Developing, maintaining, and testing web applications using React.js and typescript.",
      "Collaborating with cross-functional teams for the new feature development and enhancement of feature.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Testing the web application after a successful development",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/chandan0405",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/chandan04051999",
  },
];

export const projects = [
  {
    iconUrl: movie,
    theme: "btn-back-black",
    name: "Flick Fusion streaming website",
    description:
      "Developing a responsive web application using React, NextJS, facilitating Authentication and Token Storage. It is similar to Netflix app ",
    link: "https://github.com/chandan0405",
  },
  {
    iconUrl: movie,
    theme: "btn-back-red",
    name: "Movie Store",
    description:
      "Developed a web application that give you latest movies and trendies movies Integrated with the moviedb API to provide movie information and search functionality",
    link: "https://github.com/chandan0405",
  },
  {
    iconUrl: search,
    theme: "btn-back-blue",
    name: "Image searching web Application",
    description:
      "Designed and built a web app for finding the searching the image, Developed using HTML, CSS, AND JS. Integrated with Splash phto API to search the images",
    link: "https://github.com/chandan0405",
  },
];
