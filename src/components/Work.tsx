import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { RESUME_DATA } from "../data/resumeData";

gsap.registerPlugin(useGSAP);

interface ProjectCardData {
  title: string;
  category: string;
  tools: string;
  summary: string;
  image: string;
  link: string;
  highlights: string;
}

const projectsList: ProjectCardData[] = [
  {
    title: RESUME_DATA.projects[0].title,
    category: RESUME_DATA.projects[0].category,
    tools: RESUME_DATA.projects[0].techStack.join(", "),
    summary:
      "10 specialized LangGraph agents that decompose queries, search live web & arXiv sources, fact-check evidence, and generate structured 3D research reports with zero mock data.",
    image: "/images/researchmind.svg",
    link: RESUME_DATA.projects[0].githubUrl || "https://github.com/giridharbisati",
    highlights: "Multi-Agent LangGraph • Three.js 3D Visualizer • Zero Mock Data",
  },
  {
    title: RESUME_DATA.projects[1].title,
    category: RESUME_DATA.projects[1].category,
    tools: RESUME_DATA.projects[1].techStack.join(", "),
    summary:
      "Real-time collaborative IDE supporting 10+ concurrent sessions with conflict-free Operational Transformation (OT), Docker & Kubernetes horizontal auto-scaling, and 85%+ Jest test coverage.",
    image: "/images/fluxide.svg",
    link: RESUME_DATA.projects[1].githubUrl || "https://github.com/giridharbisati",
    highlights: "Operational Transformation • Kubernetes CI/CD • 99.9% Uptime",
  },
  {
    title: RESUME_DATA.projects[2].title,
    category: RESUME_DATA.projects[2].category,
    tools: RESUME_DATA.projects[2].techStack.join(", "),
    summary:
      "AI-powered assistant extracting receipt products and prices via OCR & NLP, combined with a hybrid recommendation engine for price comparisons and monthly spending analytics.",
    image: "/images/smartshopping.svg",
    link: RESUME_DATA.projects[2].githubUrl || "https://github.com/giridharbisati",
    highlights: "OCR + NLP Receipt Parsing • Hybrid Recommendations • Spending Analytics",
  },
  {
    title: "AI Resume & Price Engine",
    category: "AI Automation & Semantic Analysis",
    tools: "Python, FastAPI, MongoDB, SQL, LLMs, NLP, Web Scraping",
    summary:
      "Full-stack automation suite spanning semantic resume analysis, ATS match scoring, multi-threaded price crawlers, and automated inventory tracking systems.",
    image: "/images/resumeai.svg",
    link: "https://github.com/giridharbisati",
    highlights: "Semantic ATS Scoring • Real-Time Price Crawler • Inventory Automation",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (!box || box.length === 0) return;
      const workContainer = document.querySelector(".work-container");
      if (!workContainer || !box[0].parentElement) return;

      const rectLeft = workContainer.getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
      if (translateX < 0) translateX = 0;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${Math.max(translateX, 800)}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          Featured <span>Projects</span>
        </h2>
        <div className="work-flex">
          {projectsList.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools &amp; Tech</h4>
                <p className="work-tools">{project.tools}</p>
                <p className="work-summary">{project.summary}</p>
              </div>
              <WorkImage
                image={project.image}
                alt={project.title}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
