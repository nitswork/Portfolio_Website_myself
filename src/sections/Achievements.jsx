import "./Achievements.css";
import { FaGoogleDrive } from "react-icons/fa";
import { Folder } from "lucide-react";


const achievements = [
  {
    title: "Business Track of GenW.AI",
    type: "Deloitte India : During Internship",
    link: "https://drive.google.com/file/d/1uAS1K74T-kw_WlzdzpH2VkzXKVLtz73v/view?usp=sharing",
  },
  {
    title: "Industrial Cybersecurity Essentials",
    type: "Cisco Networking Academy : Certified course",
    link: "https://drive.google.com/file/d/1H0ft7g-dcWvq7gLivkymYpyK8REQW7uZ/view?usp=sharing",
  },
  {
    title: "IBM Internship Certificate",
    type: "Technical Internship",
    link: "https://drive.google.com/file/d/12mNaY_s0BwCPRfBbsKAiK7CVR2CpJPB1/view?usp=sharing",
  },
  {
    title: "CRIS Internship Certificate",
    type: "Technical Government Internship",
    link: "https://drive.google.com/file/d/1ehxr3fDKEE0ME7xcXBvNn8EL9z1ZjkiE/view?usp=sharing",
  },
  {
    title: "NGO Social Internship Certificate",
    type: "Social Internship",
    link: "https://drive.google.com/file/d/1GAXqW99oqCsKi8kZrXQ7_CS5Bz_FvsDQ/view?usp=sharing",
  },
  {
    title: "Binary Keeda",
    type: "Graphic Designing Internship",
    link: "https://drive.google.com/file/d/1Y8SiT09el24isnIPqW9aKUm54TFg52t8/view?usp=sharing",
  },
  {
    title: "AI Agents Certificate",
    type: "SimpliLearn , SkillUp : Certified Course",
    link: "https://drive.google.com/file/d/1YLmCJlas-7c9ljzsP_JUcvKTzacd_KRl/view?usp=sharing",
  },
  {
    title: "50 Days Consistency Badge",
    type: "LeetCode : Achievement Badge",
    link: "https://drive.google.com/file/d/1NgrTTL4I_RK84tHYkWhA0PMt8_0p3SIz/view?usp=sharing",
  },
  {
    title: "GitHub Course",
    type: "Udemy : Development Course",
    link: "https://drive.google.com/file/d/15dr2jpWh92oXV0jyc6S7aKeJpRXwZVZK/view?usp=sharing",
  },
  {
    title: "Yoga Certification",
    type: "Webinar at school : Wellness & Discipline",
    link: "https://drive.google.com/file/d/1Eot6lJ8jKTkKD0oMBNWtcUmz2K5sp4ft/view?usp=sharing",
  },
];

const Achievement = () => {
  return (
    <section id="achievements" className="achievements">
      <h2 className="section-title">/ achievements</h2>

      <div className="achievement-grid">
        {achievements.map((item, index) => (
          <div className="achievement-card" key={index}>
            <div className="card-top">
              <div className="folder-icon">
                <Folder size={28} strokeWidth={1.8} />
              </div>


              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="drive-icon"
                title="Open in Google Drive"
              >
                <FaGoogleDrive />
              </a>
            </div>

            <h3>{item.title}</h3>
            <p>{item.type}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievement;
