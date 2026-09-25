import { MdArrowOutward, MdCopyright, MdLocationOn } from "react-icons/md";
import { RESUME_DATA } from "../data/resumeData";
import "./styles/Contact.css";

interface ContactProps {
  onOpenResume?: () => void;
}

const Contact = ({ onOpenResume }: ContactProps) => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a
                href={`mailto:${RESUME_DATA.personal.email}`}
                data-cursor="disable"
              >
                {RESUME_DATA.personal.email}
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a
                href={`tel:${RESUME_DATA.personal.phone}`}
                data-cursor="disable"
              >
                {RESUME_DATA.personal.phone}
              </a>
            </p>
            <h4>Location</h4>
            <p className="contact-location">
              <MdLocationOn /> {RESUME_DATA.personal.location}
            </p>
          </div>

          <div className="contact-box">
            <h4>Profiles &amp; Code</h4>
            <a
              href={RESUME_DATA.personal.github}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href={RESUME_DATA.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href={RESUME_DATA.personal.leetcode}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LeetCode <MdArrowOutward />
            </a>
            {onOpenResume && (
              <button
                onClick={onOpenResume}
                data-cursor="disable"
                className="contact-social resume-trigger-link"
              >
                View / Print Resume <MdArrowOutward />
              </button>
            )}
          </div>

          <div className="contact-box">
            <h2>
              Designed &amp; Developed for <br />
              <span>{RESUME_DATA.personal.name}</span>
            </h2>
            <h5>
              <MdCopyright /> 2025 {RESUME_DATA.personal.name}. All rights reserved.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
