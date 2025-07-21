import React from "react";

function Projects() {
  const projectList = [
    {
      title: "Anomaly Detection",
      description: "Used Python ML (Isolation Forest) to detect AWS CloudTrail anomalies. Visualized results with Grafana dashboards.",
    },
    {
      title: "CI/CD Pipeline Automation",
      description: "Built GitHub Actions + CodePipeline to cut releases from 30 to 2 days. Integrated Trivy, Checkov scans.",
    },
    {
      title: "Cost Optimization",
      description: "Auto-scaled EC2, implemented S3 lifecycle policies. Reduced infra cost by 30% across regions.",
    },
  ];

  return (
    <div className="mt-5 container">
      <h2 className="text-warning mb-4 text-center">Projects</h2>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {projectList.map((project, index) => (
          <div className="col" key={index}>
            <div className="card h-100 bg-dark text-light border border-secondary shadow-sm animate__animated animate__fadeInUp">
              <div className="card-body">
                <h5 className="card-title text-info">{project.title}</h5>
                <p className="card-text">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;