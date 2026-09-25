import { FaGithub, FaLinkedinIn, FaCode } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";
import { RESUME_DATA } from "../data/resumeData";
import "./styles/SocialIcons.css";

interface SocialIconsProps {
  onOpenResume?: () => void;
}

const SocialIcons = ({ onOpenResume }: SocialIconsProps) => {
  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;
    if (!social) return;

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;
      if (!link) return;

      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      document.addEventListener("mousemove", onMouseMove);
      updatePosition();

      return () => {
        document.removeEventListener("mousemove", onMouseMove);
      };
    });
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a
            href={RESUME_DATA.personal.github}
            target="_blank"
            rel="noreferrer"
            title="GitHub"
          >
            <FaGithub />
          </a>
        </span>
        <span>
          <a
            href={RESUME_DATA.personal.linkedin}
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a
            href={RESUME_DATA.personal.leetcode}
            target="_blank"
            rel="noreferrer"
            title="LeetCode"
          >
            <FaCode />
          </a>
        </span>
        <span>
          <a
            href={`mailto:${RESUME_DATA.personal.email}`}
            title="Email Giridhar"
          >
            <MdEmail />
          </a>
        </span>
      </div>
      <button
        className="resume-button"
        onClick={onOpenResume}
        data-cursor="disable"
        title="View Resume"
        style={{ cursor: "pointer", background: "none", border: "none" }}
      >
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </button>
    </div>
  );
};

export default SocialIcons;
