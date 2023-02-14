import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaSass,
  FaFigma,
  FaPhoneAlt,
  FaUser,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaDribbble,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { DiJavascript } from "react-icons/di";

import { BsMedium } from "react-icons/bs";
import work1 from "./assets/work1.png";
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.png";
import work4 from "./assets/work4.png";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"];

export const socialIcons = [
  <FaDribbble />,
  <FaInstagram />,
  <FaLinkedin />,
  <BsMedium />,
];

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Prashant Singh",
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+917974134983",
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "prashantsingh7978@gmail.com",
  },
];

export const icons = [
  <FaHtml5 />,
  <FaCss3 />,
  <DiJavascript />,
  <FaReact />,
  <FaSass />,
  <FaFigma />,
];

export const experiences = [
  {
    id: 1,
    year: "Jan 2022",
    position: "Jr. Software Engineer",
    company: "Nickelfox Technology (Currently Working)",
  },
];
export const finishes = [
  {
    id: 1,
    number: "1+ ",
    itemName: "Years Of Experience",
  },
  {
    id: 2,
    number: "2 ",
    itemName: "Project Done",
  },
];
export const workImages = [
  {
    id: 1,
    img: work1,
    name: "Movie App",
    link: "https://timely-fenglisu-4eee6d.netlify.app/",
  },
  {
    id: 2,
    img: work2,
    name: "School Website",
    category: "",
    link: "https://www.santnigamanand.com/",
  },
  {
    id: 3,
    img: work3,
    name: "Basic Calculator",
    link: "https://helpful-shortbread-bb41f4.netlify.app/",
  },
  {
    id: 3,
    img: work4,
    name: "Personal Portfolio",
    link: "  https://dazzling-toffee-fbb259.netlify.app/",
  }
];

export const workNavs = ["All", "Web", "App", "Design"];

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "16 Road, TharKayTa , Yangon",
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "abee02@gmail.com",
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+959-883-271-929",
  },
];
