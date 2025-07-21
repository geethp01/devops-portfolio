import React from "react";

function About() {
  return (
    <div className="mt-5 px-3">
      <h2 className="mb-4">Experience</h2>

      <div className="mb-4">
        <h5 className="text-warning">McKesson | AWS DevOps Engineer | Sep 2024 – Present</h5>
        <ul>
          <li>Built Terraform modules for secure VPCs, EC2, S3, RDS provisioning</li>
          <li>Developed CI/CD pipelines with GitHub Actions, CodePipeline</li>
          <li>Implemented Kubernetes autoscaling and Canary deployments</li>
          <li>Integrated Trivy & Checkov scans into release process</li>
        </ul>
      </div>

      <div className="mb-4">
        <h5 className="text-warning">Frontier Communications | DevOps Engineer | May 2023 – Sep 2024</h5>
        <ul>
          <li>Automated deployments using Terraform and Ansible</li>
          <li>Cut deployment time by 90% with secured pipelines</li>
          <li>Improved system throughput by 35% under load</li>
          <li>Implemented disaster recovery and cloud cost optimizations</li>
        </ul>
      </div>

      <div className="mb-5">
        <h5 className="text-warning">Pigeon Education | DevOps Engineer | Sep 2019 – Dec 2021</h5>
        <ul>
          <li>Automated IAM & CloudWatch log filters with Python</li>
          <li>Built Docker + Jenkins pipeline for app deployments</li>
          <li>Maintained AWS Config and compliance monitoring</li>
        </ul>
      </div>

      <h2 className="mb-3">Technical Skills</h2>
      <ul className="list-group text-start">
        <li className="list-group-item bg-dark text-light">☁️ Cloud: AWS (EC2, IAM, S3, Lambda, RDS, EKS)</li>
        <li className="list-group-item bg-dark text-light">🛠 IaC: Terraform, Ansible, CloudFormation</li>
        <li className="list-group-item bg-dark text-light">⚙️ CI/CD: GitHub Actions, Jenkins, CodePipeline</li>
        <li className="list-group-item bg-dark text-light">🔐 Security: Trivy, Checkov, GuardDuty, Security Hub</li>
        <li className="list-group-item bg-dark text-light">📊 Monitoring: CloudWatch, Prometheus, Grafana</li>
        <li className="list-group-item bg-dark text-light">🐍 Scripting: Python, Bash, PowerShell</li>
      </ul>
    </div>
  );
}

export default About;