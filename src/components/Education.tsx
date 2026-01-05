import "./styles/Education.css";
import { config } from "../config";

const Education = () => {
  return (
    <div className="education-section section-container">
      <div className="education-container">
        <h2>
          My <span>Education</span>
        </h2>
        <div className="education-info">
          <div className="education-timeline">
            <div className="education-dot"></div>
          </div>
          {config.education.map((edu, index) => (
            <div key={index} className="education-info-box">
              <div className="education-info-in">
                <div className="education-details">
                  <h4>{edu.degree}</h4>
                  <h5>{edu.institution}</h5>
                  {edu.cgpa && <p className="education-gpa">CGPA: {edu.cgpa}</p>}
                </div>
                <h3>{edu.period.split(" - ")[1] || edu.period}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
