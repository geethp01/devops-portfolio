import React from "react";
import profileImg from "../assets/profile.jpg";

function Home() {
  return (
    <div className="intro-section d-flex flex-column flex-md-row align-items-center justify-content-center gap-4 px-4">
      
      <img
        src={profileImg}
        alt="Geetanjali Paturi"
        className="profile-rectangle"
      />

      <div className="text-start text-md-left">
        <h2 className="text-highlight">Welcome!</h2>
        <p className="lead">
          I’m Geetanjali Paturi — a passionate AWS DevOps Engineer with 4+ years of experience automating cloud infrastructure and delivery pipelines.
        </p>
        <p className="lead">
          I specialize in CI/CD workflows using GitHub Actions, Jenkins, and CodePipeline, building scalable systems with Terraform, Kubernetes (EKS), Docker, and Python.
        </p>

      </div>
    </div>
  );
}

export default Home;