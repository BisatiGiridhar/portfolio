import { RESUME_DATA } from "../data/resumeData";
import { FaCode, FaLaptopCode, FaDatabase, FaToolbox, FaBrain } from "react-icons/fa6";
import "./styles/Skills.css";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <FaCode />,
    items: RESUME_DATA.skills.languages,
    highlight: "Core Proficiency",
  },
  {
    title: "Web & Frameworks",
    icon: <FaLaptopCode />,
    items: RESUME_DATA.skills.webTechnologies,
    highlight: "Full-Stack Development",
  },
  {
    title: "Databases & Storage",
    icon: <FaDatabase />,
    items: RESUME_DATA.skills.databases,
    highlight: "SQL & NoSQL Solutions",
  },
  {
    title: "Tools & Cloud Platforms",
    icon: <FaToolbox />,
    items: RESUME_DATA.skills.toolsPlatforms,
    highlight: "DevOps & Containerization",
  },
  {
    title: "Core Concepts & AI",
    icon: <FaBrain />,
    items: RESUME_DATA.skills.coreConcepts,
    highlight: "DSA & Distributed Systems",
  },
];

const Skills = () => {
  return (
    <div className="skills-section section-container" id="skills">
      <div className="skills-header">
        <h3 className="skills-sub">TECHNICAL EXPERTISE</h3>
        <h2>
          Skills <span>{'&'}</span> Technologies
        </h2>
        <p className="skills-intro">
          A comprehensive overview of my programming languages, frameworks, cloud tooling, and computer science foundations.
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((cat, idx) => (
          <div className="skill-card" key={idx}>
            <div className="skill-card-top">
              <div className="skill-card-icon">{cat.icon}</div>
              <span className="skill-card-badge">{cat.highlight}</span>
            </div>
            <h4>{cat.title}</h4>
            <div className="skill-tags-list">
              {cat.items.map((item, i) => (
                <span className="skill-chip" key={i}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
