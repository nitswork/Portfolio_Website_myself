import handGesture from "../assets/projects/hand-gesture.jpeg";
import musicano from "../assets/projects/musicano.png";
import researchPortal from "../assets/projects/research-portal.jpeg";
import ecommerce from "../assets/projects/e-commerce.jpeg";

const projects = [
  {
    title: "Hand Gesture Recognition System",
    subtitle: "Computer Vision & Deep Learning",
    description:
      "Real-time hand gesture recognition using TensorFlow, OpenCV and MediaPipe with live webcam inference.",
    tech: "Python, TensorFlow, OpenCV, MediaPipe",
    github: "#",
    image: handGesture,
  },
  {
    title: "Musicano",
    subtitle: "Desktop Application",
    description:
      "Desktop music recommendation & playback application using Tkinter and YouTube Data API.",
    tech: "Python, Tkinter, YouTube API",
    github: "#",
    image: musicano,
  },
  {
    title: "Cloud-Based Research Portal",
    subtitle: "Full Stack Web App",
    description:
      "MERN-based research management system with secure authentication and role-based access.",
    tech: "React, Node.js, MongoDB",
    github: "#",
    image: researchPortal,
  },
  {
    title: "E-Commerce Product Classifier",
    subtitle: "Machine Learning Project",
    description:
      "Machine learning model that classifies e-commerce products using descriptions and metadata.",
    tech: "Python, Machine Learning, NLP",
    github: "#",
    image: ecommerce,
  },
];

export default projects;
