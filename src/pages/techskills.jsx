// src/pages/techskills.jsx
import React from 'react';
import { FaAws, FaDocker, FaJenkins, FaReact } from 'react-icons/fa';
import { SiTerraform, SiKubernetes, SiGithub, SiPython } from 'react-icons/si';
import '../style.css'; // fixed path

function TechSkills() {
  const skills = [
    { name: 'AWS', icon: <FaAws /> },
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'Jenkins', icon: <FaJenkins /> },
    { name: 'Terraform', icon: <SiTerraform /> },
    { name: 'Kubernetes', icon: <SiKubernetes /> },
    { name: 'GitHub Actions', icon: <SiGithub /> },
    { name: 'Python', icon: <SiPython /> },
    { name: 'React', icon: <FaReact /> },
  ];

  return (
    <div className="tech-section">
      <h2 className="section-title">🚀 Tech Skills</h2>
      <div className="tech-icons">
        {skills.map((skill, index) => (
          <div className="tech-item" key={index}>
            <div className="icon">{skill.icon}</div>
            <div className="label">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechSkills;