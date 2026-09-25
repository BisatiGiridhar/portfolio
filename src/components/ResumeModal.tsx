import { useEffect } from "react";
import { MdClose, MdDownload, MdEmail, MdPhone, MdLocationOn, MdOpenInNew } from "react-icons/md";
import { FaLinkedin, FaGithub, FaCode } from "react-icons/fa6";
import { RESUME_DATA } from "../data/resumeData";
import "./styles/ResumeModal.css";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-modal-overlay" onClick={onClose}>
      <div
        className="resume-modal-content"
        onClick={(e) => e.stopPropagation()}
        data-cursor="disable"
      >
        <div className="resume-modal-header">
          <div className="resume-modal-actions">
            <button className="resume-action-btn primary" onClick={handlePrint}>
              <MdDownload /> Print / Save as PDF
            </button>
            <button className="resume-close-btn" onClick={onClose} aria-label="Close modal">
              <MdClose />
            </button>
          </div>
        </div>

        <div className="resume-document printable-resume">
          {/* Header */}
          <div className="resume-doc-header">
            <h1 className="resume-doc-name">{RESUME_DATA.personal.name}</h1>
            <div className="resume-doc-contacts">
              <span>
                <MdPhone /> {RESUME_DATA.personal.phone}
              </span>
              <span>
                <MdEmail />{" "}
                <a href={`mailto:${RESUME_DATA.personal.email}`}>
                  {RESUME_DATA.personal.email}
                </a>
              </span>
              <span>
                <FaLinkedin />{" "}
                <a
                  href={RESUME_DATA.personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/giridharbisati
                </a>
              </span>
              <span>
                <FaGithub />{" "}
                <a
                  href={RESUME_DATA.personal.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/giridharbisati
                </a>
              </span>
              <span>
                <FaCode />{" "}
                <a
                  href={RESUME_DATA.personal.leetcode}
                  target="_blank"
                  rel="noreferrer"
                >
                  leetcode.com/giridharbisati
                </a>
              </span>
              <span>
                <MdLocationOn /> {RESUME_DATA.personal.location}
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="resume-doc-section">
            <h2 className="resume-section-title">Professional Summary</h2>
            <div className="resume-section-divider"></div>
            <p className="resume-summary-text">{RESUME_DATA.personal.summary}</p>
          </div>

          {/* Education */}
          <div className="resume-doc-section">
            <h2 className="resume-section-title">Education</h2>
            <div className="resume-section-divider"></div>
            <div className="resume-entry">
              <div className="resume-entry-header">
                <div className="resume-entry-title">
                  <strong>{RESUME_DATA.education.institution}</strong>
                </div>
                <div className="resume-entry-location">
                  {RESUME_DATA.education.location}
                </div>
              </div>
              <div className="resume-entry-sub">
                <em>
                  {RESUME_DATA.education.degree} in {RESUME_DATA.education.field}
                </em>
                <span>{RESUME_DATA.education.period}</span>
              </div>
              <ul className="resume-bullets">
                <li>
                  <strong>CGPA: {RESUME_DATA.education.cgpa}</strong>
                </li>
                <li>
                  <strong>Coursework:</strong>{" "}
                  {RESUME_DATA.education.coursework.join(", ")}
                </li>
              </ul>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="resume-doc-section">
            <h2 className="resume-section-title">Technical Skills</h2>
            <div className="resume-section-divider"></div>
            <div className="resume-skills-grid">
              <div className="resume-skill-row">
                <span className="skill-cat">Languages:</span>
                <span className="skill-items">
                  {RESUME_DATA.skills.languages.join(", ")}
                </span>
              </div>
              <div className="resume-skill-row">
                <span className="skill-cat">Web Technologies:</span>
                <span className="skill-items">
                  {RESUME_DATA.skills.webTechnologies.join(", ")}
                </span>
              </div>
              <div className="resume-skill-row">
                <span className="skill-cat">Databases:</span>
                <span className="skill-items">
                  {RESUME_DATA.skills.databases.join(", ")}
                </span>
              </div>
              <div className="resume-skill-row">
                <span className="skill-cat">Tools & Platforms:</span>
                <span className="skill-items">
                  {RESUME_DATA.skills.toolsPlatforms.join(", ")}
                </span>
              </div>
              <div className="resume-skill-row">
                <span className="skill-cat">Core Concepts:</span>
                <span className="skill-items">
                  {RESUME_DATA.skills.coreConcepts.join(", ")}
                </span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="resume-doc-section">
            <h2 className="resume-section-title">Experience</h2>
            <div className="resume-section-divider"></div>
            {RESUME_DATA.experiences.map((exp, idx) => (
              <div className="resume-entry" key={idx}>
                <div className="resume-entry-header">
                  <div className="resume-entry-title">
                    <strong>{exp.role}</strong>
                  </div>
                  <div className="resume-entry-location">{exp.location}</div>
                </div>
                <div className="resume-entry-sub">
                  <em>
                    {exp.company} {exp.association && `(${exp.association})`}
                  </em>
                  <span>{exp.period}</span>
                </div>
                <ul className="resume-bullets">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className="resume-doc-section">
            <h2 className="resume-section-title">Projects</h2>
            <div className="resume-section-divider"></div>
            {RESUME_DATA.projects.map((proj, idx) => (
              <div className="resume-entry" key={idx}>
                <div className="resume-entry-header">
                  <div className="resume-entry-title">
                    <strong>{proj.title}</strong> |{" "}
                    <span className="project-tech">
                      {proj.techStack.join(", ")}
                    </span>
                  </div>
                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="resume-link"
                    >
                      <MdOpenInNew /> Live Demo
                    </a>
                  )}
                </div>
                <ul className="resume-bullets">
                  {proj.points.map((pt, pIdx) => (
                    <li key={pIdx}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="resume-doc-section">
            <h2 className="resume-section-title">Certifications</h2>
            <div className="resume-section-divider"></div>
            <div className="resume-cert-list">
              {RESUME_DATA.certifications.map((cert, idx) => (
                <div className="resume-cert-item" key={idx}>
                  <div className="resume-cert-title">
                    <strong>{cert.title}</strong> | <em>{cert.issuer}</em>
                  </div>
                  <div className="resume-cert-date">{cert.date}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Strengths & Interests */}
          <div className="resume-doc-section">
            <h2 className="resume-section-title">Strengths & Interests</h2>
            <div className="resume-section-divider"></div>
            <div className="resume-skills-grid">
              <div className="resume-skill-row">
                <span className="skill-cat">Activities:</span>
                <span className="skill-items">
                  {RESUME_DATA.skills.activities.join(", ")}
                </span>
              </div>
              <div className="resume-skill-row">
                <span className="skill-cat">Interests:</span>
                <span className="skill-items">
                  {RESUME_DATA.skills.interests.join(", ")}
                </span>
              </div>
              <div className="resume-skill-row">
                <span className="skill-cat">Soft Skills:</span>
                <span className="skill-items">
                  {RESUME_DATA.skills.softSkills.join(", ")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
