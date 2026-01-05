import handGesture from "../assets/projects/hand-gesture.jpeg";
import musicano from "../assets/projects/musicano.png";
import research from "../assets/projects/research-portal.jpeg";
import ecommerce from "../assets/projects/e-commerce.jpeg";

const projects = [
  {
    title: "Hand Gesture Recognition System",
    description:
      "Real-time hand gesture recognition using TensorFlow, OpenCV & MediaPipe with live webcam inference.",
    tech: ["Python", "TensorFlow", "OpenCV"],
    github: "https://github.com/nitswork/Hands_Gestures_Recognition_project",
    image: handGesture,
  },
  {
    title: "Musicano",
    description:
      "A desktop music recommendation & playback app using Tkinter and YouTube Data API.",
    tech: ["Python", "Tkinter", "YouTube API"],
    github: "https://github.com/nitswork/Music_tkinter",
    image: musicano,
  },
  {
    title: "Cloud-Based Research Portal",
    description:
      "Full-stack MERN research management system with role-based authentication and secure APIs.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/nitswork/Cloud_Re_search_DBMS",
    image: research,
  },
  {
    title: "E-Commerce Transaction Classifier",
    description:
      "Machine learning pipeline to classify e-commerce transactions, deployed using Streamlit.",
    tech: ["Python", "ML", "Streamlit"],
    github: "https://github.com/nitswork/Ecommerce-prediction",
    image: ecommerce,
  },
];

export default projects;
