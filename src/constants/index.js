import { intelli, chainscore_img } from "../assets/images";
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
  zustand,
  jest
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
    imageUrl: zustand,
    name: "Zustand",
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
  {
    imageUrl: jest,
    name: "Jest",
    type: "Component testing library",
  },
];

export const experiences = [
  {
    title:"SDE-1",
    company_name:"ChainScore Labs",
    icon:chainscore_img,
    iconBg:'#1BD498',
    date: 'Nov 2024 - Present',
    points:[
      "Developed a fully responsive cryptocurrency platform from scratch, ensuring seamless functionality across various devices while continuously enhancing performance and features.",
      "implemented the Home component, integrating real-time market data, coin statistics, and dynamic pricing updates using webhooks.",
      "Built key features such as the Watchlist, Trending Gainers/Losers, coin swapping, deposit wallet functionality, and a secure 2FA authentication UI.",
      "Enhanced data fetching efficiency by implementing dynamic API calls, improving response times, and boosting performance by 30%.",
      "Developed server-side actions to handle real-time data for the Watchlist and trending market sections, ensuring accurate and up-to-date information.",
      "Identified and resolved QA issues, debugging components to ensure stability, reliability, and smooth user interactions.",
      "Focused on optimizing component performance, reducing load times, and improving query execution to enhance overall platform responsiveness"
    ]
  },
  {
    title: "UI Developer",
    company_name: "Intelliswift Software Inc",
    icon: intelli,
    iconBg: "#accbe1",
    date: "jan 2023 - Aug 2024",
    points: [
      "Developing, maintaining, and testing web applications using React.js and typescript.",
      "Collaborating with cross-functional teams for the new feature development and enhancement of feature.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Testing the web application after a successful development",
    ],
  }
  
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
    name: "Calories-counter-webapp",
    description: "Developed a calories counter webapp web application using Nextjs, CSS, Bootstrap, Redux toolkit, Axios, and Edamam API.\
    This app designed to help users track their daily caloric intake, users to search for food items, view nutritional information,\
    and log their meals throughout the day. Users can log meals for breakfast, lunch, and dinner by selecting or searching for food items.\
    Implements a debounced search to minimize re-rendering and API calls while typing,Persists user data across sessions, allowing for seamless tracking over time.\
    for a seamless shopping experience.",
    link: "https://github.com/chandan0405/calories_counter_using_Nextjs",

  },
  {
    iconUrl: movie,
    theme: "btn-back-black",
    name: "Shopmate",
    description: "Developed a responsive e-commerce web application using React, Redux, Axios, and Bootstrap.\
    The app fetches product data from an API and displays it in a card format, allowing users to view detailed \
    product information, easily navigate, manipulate products in their cart, and use product filtering features for a seamless shopping experience.",
    link: "https://github.com/chandan0405/shopmate_shopping_web_Application",

  },
  {
    iconUrl: search,
    theme: "btn-back-blue",
    name: "Anime searching web Application",
    description:
      "I designed and developed a responsive web app using React for searching anime.\
       The app fetches data from an API based on user input, incorporates pagination for efficiency, \
       and uses a debouncing mechanism to minimize network requests. It works seamlessly across all devices \
       and highlights the best matching anime based on user searches."
    ,
    link: "https://github.com/chandan0405/anime-search-application",
  },
  {
    iconUrl: movie,
    theme: "btn-back-black",
    name: "CineStream streaming website",
    description:
      "Developing a responsive web application using React, NextJS, facilitating Authentication and Token Storage. It is similar to Netflix app ",
    link: "https://github.com/chandan0405/cinestream-web-application",
  },
  
];
