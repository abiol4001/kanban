import { v4 as uuidv4 } from "uuid";

// Images import
import user1 from "../images/user1.png";
import user2 from "../images/user2.png";
import user3 from "../images/user3.png";
import user4 from "../images/user4.png";
import user5 from "../images/user5.png";
import onboard from "../images/onboard.png";
import leftMood from "../images/leftMood.png";
import rightMood from "../images/rightMood.png";
import mobile from "../images/mobile.png";

export const tasks = [
  {
    id: uuidv4(),
    title: "Brainstorming",
    content:
      "Brainstorming brings team members' diverse experience into play. ",
    priority: 0,
    img: [],
    comments: "12",
    files: "0",
    assignees: [user1, user4, user3],
  },
  {
    id: uuidv4(),
    title: "Research ",
    content: "User research helps you to create an optimal product for users.",
    priority: 5,
    img: [],
    comments: "10",
    files: "3",
    assignees: [user2, user5],
  },
  {
    id: uuidv4(),
    title: "Wireframes",
    content:
      "Low fidelity wireframes include the most basic content and visuals.",
    priority: 5,
    img: [],
    comments: "10",
    files: "15",
    assignees: [user2, user5, user4],
  },
  {
    id: uuidv4(),
    title: "Onboarding Illustrations ",
    content: "",
    priority: 0,
    img: [
      {
        path: onboard,
        height: "110px",
        width: "100%",
      },
    ],
    comments: "14",
    files: "15",
    assignees: [user3, user4, user1],
  },
  {
    id: uuidv4(),
    title: "Moodboard",
    content: "",
    priority: 0,
    img: [
      {
        path: leftMood,
        height: "79px",
        width: "131px",
      },
      {
        path: rightMood,
        height: "79px",
        width: "131px",
      },
    ],
    comments: "9",
    files: "10",
    assignees: [user3],
  },
  {
    id: uuidv4(),
    title: "Mobile App Design",
    content: "",
    priority: 5,
    img: [
      {
        path: mobile,
        height: "180px",
        width: "100%",
      },
    ],
    comments: "9",
    files: "10",
    assignees: [user5, user4],
    completed: true,
  },
  {
    id: uuidv4(),
    title: "Design System ",
    content: "It just needs to adapt the UI from what you did before",
    priority: 5,
    img: [],
    comments: "10",
    files: "3",
    assignees: [user1, user3, user4],
    completed: true,
  },
];
