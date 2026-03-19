import { getAge } from "../utils/getAge";
import { PiCertificate, PiFileTextDuotone } from "react-icons/pi";

import { TfiFacebook } from "react-icons/tfi";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import CoverLetter from "../assets/CoverLetter.pdf";
import RT_Zertifikate from "../assets/TELRAN_Zertifikat.pdf";
import calculator from "../assets//media/Calculator.png";
import slider from "../assets//media/slider.png";
import RockPaperScissors from "../assets//media/RockPaperScissors.png";
import BuhOne from "../assets//media/BuhOne.png";
import Eurocrane_company from "../assets//media/Eurocrane_company.png";
import FakeAPI from "../assets//media/FakeAPI.png";
import AuthorizationForm from "../assets//media/AuthorizationForm.png";
import todoList from "../assets//media/todoList.png";
import cart_redux from "../assets//media/reduxCart.png";
import CvJohn from "../assets//media/CvJohn.png";
import gardenProject from "../assets//media/gardenProject.png";
import duckHunter from "../assets//media/DuckGame.png";

export const filtersBtb = [
  "ALL",
  "JS",
  "Animation",
  "API",
  "React",
  "Redux",
  "Other",
];
export const menuList = [
  { id: "about", 
    label: "About" },

  { id: "experiense", 
    label: "Experiense" },

  { id: "projects", 
    label: "Portfolio" },

  { id: "contacts", 
    label: "Contacts" },
];

export const personalData = [
  { id: 1, 
    label: "Full Name", 
    fullName: "Viktar Kalosha" },
  {
    id: 2,
    label: "Age",
    age: getAge(1991),
  },
  {
    id: 3,
    label: "Language",
    language: "Polish, Russian, English, Belarusian",
  },
  { id: 4, label: "Phone Number", phone: "+48 575376296" },
  {
    id: 5,
    label: "Email",
    email: "kaloshaviktor1@gmail.com",
  },
  {
    id: 6,
    label: "Git Hub",
    webSite: "https://github.com/Viktarprof",
  },
  {
    id: 7,
    label: "Address",
    location: "Poland, Białystok",
  },
];

export const skillsData = [
  {
    id: 1,
    category: "Frontend",
    skills: ["HTML", "CSS", "js", "TypeScript"],
    level: 85,
  },
  {
    id: 2,
    category: "Styling",
    skills: ["SASS / SCSS", "Tailwind CSS", "Styled Components"],
    level: 90,
  },
  {
    id: 3,
    category: "Tools",
    skills: ["Git", "Figma", "VS Code", "Vite", "React", "Next.js"],
    level: 85,
  },

  {
    id: 4,
    category: "Other",
    skills: ["Responsive Design", "REST API", "Problem Solving"],
    level: 90,
  },
];

export const linksData = [
  {
    id: 1,
    title: "Facebook",
    link: "https://www.facebook.com/ViktarKalosha/",
    logo: <TfiFacebook />,
  },
  {
    id: 2,
    title: "Instagram",
    link: "https://www.instagram.com/kalosha_viktar/",
    logo: <FiInstagram />,
  },
  {
    id: 3,
    title: "Linkedin",
    link: "https://www.linkedin.com/in/viktar-kalosha-1b8457151/",
    logo: <FaLinkedinIn />,
  },
];

export const educationData = [
  {
    id: 1,
    period: "January 2026",
    company: "CERSAR Educational Center",
    position: "Deckhand",
    description: "Basic Safety Training Certificate. Has been duly trained in basic safety in acc. with the provisons of Regulation VI/1 of STCW Convention.",
  },
  {
    id: 2,
    period: "September 2022 — June 2023",
    company: "TelRan",
    position: "Front-end PRO",
    description:
      "Learned to create the front-end of websites, worked with HTML, CSS, and js, as well as developed projects using React and Redux. Within the course, worked with databases, learned SQL and MongoDB. Mastered principles of product development in companies and organizing teamwork. Got familiar with work methodologies such as Agile and Scrum.",
  },
  {
    id: 3,
    period: "2017",
    company: "LLC 'Educational Center of the High Technologies Park'",
    position: "Functional Testing",
    description:
      "Studied the process of software testing performed manually. Modeled various testing scenarios and documented any program behavior that deviated from the expected result.",
  },
  {
    id: 4,
    period: "September 2008 — June 2013",
    company: "Yanka Kupala State University of Grodno",
    position: "Specialist in Tourism and Hospitality",
    description: "Studied the profession in the field of tourism and service.",
  },
];

export const workExperienceData = [
  {
    id: 1,
    period: "April 2013 — June 2014",
    company: "Private Unitary Enterprise 'MarkTur'",
    position: "Tourism Manager",
    description:
      "Tour selection. Tourist consultation. Registration for obtaining visas at the consulates of the Republic of Poland and the Republic of Lithuania.",
  },
  {
    id: 2,
    period: "June 2014 — March 2020",
    company:
      "Public Joint-Stock Company 'Belagrozdorovnitsa' Branch Sanatorium 'Porechye'",
    position: "Marketing Department Specialist / Acting Head",
    description:
      "Implementation of vouchers. Consulting vacationers and maintaining customer base. Promotion of the sanatorium on internet platforms. Organization of meetings with clients, conducting presentations. Preparation of documentation for tenders. Support and filling of information on the sanatorium's website. Daily and monthly reports on implementation. Acting head of the marketing department.",
  },
  {
    id: 3,
    period: "June 2021 — September 2022",
    company: "Kamienica Zamenhofa",
    position: "Marketing Department Specialist",
    description:
      "Maintaining a profile and creating content on social networks. Implementing paid advertising campaigns. Market analysis, reporting activities, planning marketing events.",
  },
  {
    id: 4,
    period: "November 2023",
    company: "RezonTrans Sp zoo",
    position: "Administrative Assistant",
    description:
      "Managing the process of obtaining and issuing transport permits for international haulage. Completing and submitting CEMT documents in accordance with transport regulations. Registering and updating trip data in the BIREG system. Handling phone calls and correspondence to obtain consultations and clarifications from ZMPD (Association of International Road Transport Carriers in Poland) and other authorities. Maintaining transport documentation and ensuring compliance with current legal requirements. Providing administrative and office support for the logistics department, including data entry, filing, and report preparation.",
  },
];

export const achivementsList = [
  {
    id: 1,
    title: "Certificate TelRan",
    description:
      "Certificate of completion of the Front-end PRO course at TelRan.",
    file: RT_Zertifikate,
    icon: PiCertificate,
  },
  {
    id: 2,
    title: "Cover Letter",
    description: "Motivation letter presenting myself and my career goals.",
    file: CoverLetter,
    icon: PiFileTextDuotone,
  },
    {
    id: 3,
    title: "Sertificate",
    description: "Sertificate Basic Safety Training Certificate",
    file: "",
    icon: PiCertificate,
  },
];

export const portfolio = [
  {
    id: 1,
    title: "Calculator",
    description:
      "I have created a simple js code for a calculator. This code allows the user to perform basic mathematical operations such as addition, subtraction, multiplication, and division. It also provides the functionality to clear the input field and display the calculation result. The code offers a basic calculator functionality that can be expanded and customized to meet specific needs and interface design.",
    image: calculator,
    link: "https://viktarprof.github.io/TelRan_frontend/Frontend/HomeWork/interesting/Calculator/index.html",
    tools: ["html", "css", "js"],
  },
  {
    id: 2,
    title: "Slider",
    description:
      "The code implements the functionality of switching images in a slider. It includes controls that allow users to manually navigate through the slides.",
    image: slider,
    link: "https://viktarprof.github.io/TelRan_frontend/Frontend/HomeWork/Roza/HW5(%D1%81%D0%BB%D0%B0%D0%B9%D0%B4%D0%B5%D1%80)/index.html",
    tools: ["html", "css", "js", "api"],
  },
  {
    id: 3,
    title: "The game 'Rock-paper-scissors'",
    description:
      "This game is written in js. It keeps track of the winners and calculates the score.",
    image: RockPaperScissors,
    link: "https://viktarprof.github.io/TelRan_frontend/Frontend/HomeWork/Roza/HW6(%D0%B8%D0%B3%D1%80%D0%B0%20%D0%9A%D0%B0%D0%BC%D0%B5%D0%BD%D1%8C%20%D0%BD%D0%BE%D0%B6%D0%BD%D0%B8%D1%86%D1%8B%20%D0%B1%D1%83%D0%BC%D0%B0%D0%B3%D0%B0%20)/index.html",
    tools: ["html", "js", "game"],
  },
  {
    id: 4,
    title: "BuhOne",
    description:
      "The HTML code was written, which contains the necessary markup for the page, and CSS tools were used to create an adaptive design. To improve the user experience on the page, a js code has been added that provides image switching on the page. This allows users to view different versions of images.",
    image: BuhOne,
    link: "https://viktarprof.github.io/TelRan_frontend/Frontend/HomeWork/Tigran/HW7(%D0%B2%D0%B5%D1%80%D1%81%D1%82%D0%BA%D0%B0%20%D0%BC%D0%B0%D0%BA%D0%B5%D1%82%D0%B0%2C%20JS-%D1%81%D0%BB%D0%B0%D0%B9%D0%B4%D0%B5%D1%80%2C%20%D0%91%D1%83%D1%80%D0%B3%D0%B5%D1%80%20%D0%BA%D0%BD%D0%BE%D0%BF%D0%BA%D0%B0)/index.html",
    tools: ["html", "css", "js", "responsive design", "slider"],
  },
  {
    id: 5,
    title: "Eurocrane company",
    description:
      "For the task related to Eurocrane company, we worked as a team and I was responsible for creating the 'About us' and 'Contacts' pages. During the project execution, I successfully implemented media queries and added a feature of image switching, as well as set up a timer for the appearance of a modal window.",
    image: Eurocrane_company,
    link: "https://viktarprof.github.io/ReactHW/%D0%95%D0%B2%D1%80%D0%BE%D0%BA%D1%80%D0%B0%D0%BD/about.html",
    tools: ["html", "css", "js", "responsive design", "settimeout"],
  },
  {
    id: 6,
    title: "Fake api products",
    description:
      "The present work contains code with a dummy IP address, as well as added code for switching images and implementing a star rating system.",
    image: FakeAPI,
    link: "https://viktarprof.github.io/TelRan_frontend/Frontend/HomeWork/Tigran/HW6(product%20card)/index.html",
    tools: ["get", "api", "animation", "gh-pages"],
  },
  {
    id: 7,
    title: "Authorization and registration form",
    description:
      "A code was written using React that includes user authentication and registration functionality. Additionally, this website uses HashRouter.",
    image: AuthorizationForm,
    link: "https://viktarprof.github.io/react_authorization/#/login",
    tools: ["react", "hook-form", "gh-pages"],
  },
  {
    id: 8,
    title: "TODO List",
    description:
      "The developed application allows the user to add tasks for each day of the week with the ability to specify the importance of each task. Once a task is completed, it can be removed from the list. The application is built using React. Local browser storage (localstorage) is used to store data in the application.",
    image: todoList,
    link: "https://viktarprof.github.io/todo/",
    tools: ["react", "localstorage", "responsive", "gh-pages"],
  },
  {
    id: 9,
    title: "Cart Redux",
    description:
      "Thanks to the use of the React framework and Redux library, this application has achieved high flexibility in state management. They provide a convenient mechanism for storing and processing data, which allows creating a scalable application with a rich user interface and easy state management",
    image: cart_redux,
    link: "https://viktarprof.github.io/Cart_redux/",
    tools: ["react", "redux", "browserrouter", "animation", "gh-pages"],
  },
  {
    id: 10,
    title: "Resume for John",
    description:
      "The website created as part of a job search has the functionality of an adaptive page and the ability to navigate between different pages. Additionally, this website uses HashRouter, which provides more efficient handling of URL addresses.",
    image: CvJohn,
    link: "https://viktarprof.github.io/CV_John/#/",
    tools: ["css", "react", "js", "responsive design", "gh-pages"],
  },
  {
    id: 11,
    title: "Garden",
    description:
      "This project is my diploma project in which I applied a set of tools related to React to create a unique and functional website. Using libraries and technologies such as React, React DOM, React Hook Form, React Icons, React Image Zoom, React Redux, React Router DOM, React Scroll, Redux, Redux Thunk, useEffect, and useState, I developed a responsive page with convenient navigation. The result is a website that stands out with its unique design, adaptability to different devices, and user-friendly navigation. This project showcases my React development skills and my ability to create useful and appealing web applications.",
    image: gardenProject,
    link: "https://github.com/Viktarprof/Garden_Project",
    tools: [
      "css",
      "react",
      "responsive design",
      "get/post",
      "redux",
      "redux-thunk",
      "react-image-zoom",
      "react-scroll",
      "gh-pages",
      "other",
    ],
  },
  {
    id: 11,
    title: "Duck Hunter",
    description:
      "A simple browser game built with js, inspired by the classic **Duck Hunt**. The player must shoot ducks and earn points while the timer is running. ",
    image: duckHunter,
    link: "https://viktarprof.github.io/Duck-Hunt/",
    tools: ["js", "game"],
  },
];
