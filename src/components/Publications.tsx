import "./styles/Publications.css";
import { config } from "../config";

const Publications = () => {
  if (!config.publications || config.publications.length === 0) {
    return null;
  }

  return (
    <div className="publications-section section-container">
      <div className="publications-container">
        <h2>
          <span>Publications</span> & Research
        </h2>
        <div className="publications-grid">
          {config.publications.map((pub, index) => (
            <div key={index} className="publication-card">
              <div className="publication-header">
                <span className="publication-status">{pub.status}</span>
                <span className="publication-year">{pub.conference}</span>
              </div>
              <h3>{pub.title}</h3>
              <p className="publication-authors">{pub.authors}</p>
              <p className="publication-venue">{pub.affiliation}</p>
              {pub.description && (
                <p className="publication-description">{pub.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publications;
