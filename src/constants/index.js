import { intelli, chainscore_img, neso } from "../assets/images";
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
  jest,
  car,
  annotate
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
    title: "Frontend Developer",
    company_name: "Neso Academy",
    icon: neso,
    iconBg: '#840015',
    date: 'April 2025 - Present',
    points: [
      "Led the development of a full-stack e-learning platform with user dashboards, a certification workflow, quiz engine, and progress tracking using Next.js, TypeScript, Tailwind CSS, Framer Motion, and Firebase.",
      "Reduced streaming costs by 14% by migrating from VideoCipher to the YouTube IFrame API, while implementing custom progress tracking and analytics integration.",
      "Improved performance and SEO through Next.js SSR/SSG, useSWR caching, code splitting, and lazy loading, resulting in stronger Core Web Vitals and accessibility scores measured with Lighthouse and WebPageTest.",
      "Delivered key product features including the activity dashboard, certification workflows, personalized suggestions, saved resources library, profile management, and real-time notification preferences.",
      "Worked in an Agile environment with designers and stakeholders to ship iterative improvements and quickly incorporate user and business feedback."
    ]
  },
  {
    title: "SDE-1",
    company_name: "ChainScore Labs",
    icon: chainscore_img,
    iconBg: '#1BD498',
    date: 'Nov 2024 - March 2025',
    points: [
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
    iconUrl: annotate,
    theme: "btn-back-black",
    name: "PPT annotation tool",
    description: "Native PowerPoint Integration: Uses PowerShell COM automation to launch and control slideshows directly in Microsoft PowerPoint, with seamless slide navigation from the app.\
    Real- Time Annotation Overlay: Transparent always - on - top window enables smooth drawing and annotations over live presentations without modifying original slides.\
    Advanced Drawing Tools: Includes pen(with smoothing & stylus pressure), shapes, eraser, color palette, and shift - based precision controls, along with undo / redo support.\
    Per - Slide Persistence & Export: Maintains independent annotations per slide during sessions and allows exporting annotated slides as high - resolution PDFs.\
    Robust Desktop Architecture: Built with Electron, React, TypeScript, Vite, and HTML5 Canvas, featuring auto - update support, persistent settings, and single - instance execution.\
    ",
    link: "https://github.com/avinav1702/PPT_Annotator",

  },
  {
    iconUrl: car,
    theme: "btn-back-black",
    name: "Vehiqle",
    description: "Building a Advanced AI powered car discovery system with smart filters (make, model, price range, etc.) and intelligent recommendations for similar vehicles.\
    High- quality image galleries and an interactive EMI calculator to help users make informed financial decisions.\
    Seamless connection with dealerships and automotive partners for real - time availability, test drive booking, and callbacks.\
    Powerful admin dashboard featuring analytics, full inventory management, and user / test drive tracking.\
    AI - powered car detail extraction from uploaded images, reducing manual data entry, combined with a fully responsive and modern user interface.\
  ",
    link: "https://github.com/chandan0405/vehiqle",

  },


];
