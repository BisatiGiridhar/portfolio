import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          Experience <span>&</span>
          <br /> Education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Item 1: Certifications */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>GenAI &amp; Cloud Certified</h4>
                <h5>Oracle &amp; Microsoft</h5>
              </div>
              <h3>2025</h3>
            </div>
            <div className="career-desc">
              <p>
                <strong>Oracle Cloud Infrastructure 2025 Certified Generative AI Professional</strong> (Oct 2025) and <strong>Microsoft Certified: Azure Data Fundamentals</strong> (Mar 2025). Demonstrated proficiency in LLM architecture, prompt engineering, and cloud data systems.
              </p>
              <div className="career-tags">
                <span>OCI GenAI</span>
                <span>Azure Data</span>
                <span>LLM Architectures</span>
              </div>
            </div>
          </div>

          {/* Item 2: AI/ML Internship */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Virtual Internship – AI/ML</h4>
                <h5>EduSkills (with Google)</h5>
              </div>
              <h3>2024</h3>
            </div>
            <div className="career-desc">
              <p>
                Completed structured internship on Google AI/ML technologies. Hands-on experience with machine learning concepts, data preprocessing, model development, evaluation, and scalable Google Cloud AI workflows.
              </p>
              <div className="career-tags">
                <span>Google Cloud AI</span>
                <span>Machine Learning</span>
                <span>Model Evaluation</span>
              </div>
            </div>
          </div>

          {/* Item 3: B.Tech Education */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science</h4>
                <h5>RGMCET Nandyal (CGPA: 8.57)</h5>
              </div>
              <h3>2023 - 27</h3>
            </div>
            <div className="career-desc">
              <p>
                Bachelor of Technology in CSE with CGPA 8.57/10.0. Comprehensive study of Data Structures &amp; Algorithms, Object-Oriented Design, Operating Systems, Computer Networks, and DBMS. Active in hackathons and coding competitions.
              </p>
              <div className="career-tags">
                <span>CGPA: 8.57/10</span>
                <span>DSA</span>
                <span>Distributed Systems</span>
                <span>Hackathons</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
