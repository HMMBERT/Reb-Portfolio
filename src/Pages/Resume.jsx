import React from "react";
import "../components/CSS/Resume.css"; // Using the relative path we fixed earlier

const Resume = () => {
  const resumeData = {
    experience: [
      {
        year: "May 2026 - Current",
        role: "Executive Data Encoder I / Automation Engineer",
        company: "NTT Data Payment Service Philippines",
        desc: "Encoding Terminal Profile/ Automating Encoding Task"
      },
      {
        year: "October 2025 - May 2026",
        role: "Executive Quality Assurance",
        company: "NTT Data Payment Service Philippines",
        desc: "Managing operational quality standards and payment service validation."
      },
      {
        year: "March 2025 - May 2025",
        role: "Integrated System Engineer Intern",
        company: "Denso Ten Solution Philippines",
        desc: "Gained hands-on experience in integrated systems engineering and hardware-software synergy."
      },
      {
        year: "Sept 2024 - Nov 2024",
        role: "Software Engineer Intern",
        company: "Denso Ten Solution Philippines",
        desc: "Contributed to software development lifecycles and technical solutioning."
      },
      {
        year: "Nov 2023 - March 2024",
        role: "Data Verifier",
        company: "Quezon City ID - District 2",
        desc: "Ensured data integrity and validation for government-issued identification systems."
      }
    ],
    education: [
      {
        year: "2022 - 2025",
        degree: "Diploma in Computer Engineering and Technology",
        school: "Polytechnic University of the Philippines Sta. Mesa",
        desc: "Focused on computer systems, network infrastructure, and engineering principles."
      }
    ],
    certifications: [
      "CSC Professional Exam (89.84%)",
      "Google Cybersecurity Professional Certificate",
      "Google Project Management Professional Certificate",
      "NC2 Computer System Servicing",
      "NC2 Animation"
    ]
  };

  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">
        <h2 className="section-title">Resume</h2>
        <p className="section-subtitle">John Albert D. Rebancos | Computer Engineer</p>

        <div className="resume-grid">
          {/* Experience Column */}
          <div className="resume-col">
            <h3 className="resume-header">Work Experience</h3>
            {resumeData.experience.map((item, index) => (
              <div key={index} className="resume-card">
                <span className="resume-year">{item.year}</span>
                <h4 className="resume-role">{item.role}</h4>
                <p className="resume-company">{item.company}</p>
                <p className="resume-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Education & Certs Column */}
          <div className="resume-col">
            <h3 className="resume-header">Education</h3>
            {resumeData.education.map((item, index) => (
              <div key={index} className="resume-card">
                <span className="resume-year">{item.year}</span>
                <h4 className="resume-role">{item.degree}</h4>
                <p className="resume-company">{item.school}</p>
                <p className="resume-desc">{item.desc}</p>
              </div>
            ))}

            <h3 className="resume-header" style={{ marginTop: '40px' }}>Certifications</h3>
            <div className="resume-card">
              <ul className="cert-list">
                {resumeData.certifications.map((cert, index) => (
                  <li key={index} className="resume-desc">{cert}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="resume-download">
          <a href="src/assets/JOHN ALBERT D. REBANCOS.pdf" download className="nav-contact-btn">
            Download Full CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;