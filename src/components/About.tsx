import { FaGraduationCap, FaAward, FaBrain, FaFilePdf } from "react-icons/fa6";
import "./styles/About.css";

interface AboutProps {
  onOpenResume?: () => void;
}

const About = ({ onOpenResume }: AboutProps) => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Computer Science undergraduate (CGPA: 8.57/10) with hands-on experience developing AI-powered, full-stack applications using Python, Java, SQL, and MongoDB. Skilled in Data Structures &amp; Algorithms and Machine Learning, with a proven ability to design scalable software solutions.
        </p>

        <div className="about-highlights">
          <div className="about-pill">
            <FaGraduationCap className="pill-icon" />
            <div>
              <strong>B.Tech CSE (2023–2027)</strong>
              <span>RGMCET • CGPA: 8.57 / 10.0</span>
            </div>
          </div>
          <div className="about-pill">
            <FaAward className="pill-icon" />
            <div>
              <strong>Oracle &amp; Azure Certified</strong>
              <span>OCI GenAI &amp; Azure Data</span>
            </div>
          </div>
          <div className="about-pill">
            <FaBrain className="pill-icon" />
            <div>
              <strong>Core Specialties</strong>
              <span>LangGraph, Distributed Systems, DSA</span>
            </div>
          </div>
        </div>

        {onOpenResume && (
          <button className="about-resume-cta" onClick={onOpenResume} data-cursor="disable">
            <FaFilePdf /> View &amp; Print Full Resume
          </button>
        )}
      </div>
    </div>
  );
};

export default About;
