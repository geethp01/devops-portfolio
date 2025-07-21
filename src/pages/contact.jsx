import React from "react";

function Contact() {
  return (
    <div className="mt-5 container text-center">
      <h2 className="text-warning mb-4">Contact Me</h2>
      <ul className="list-unstyled fs-5">
        <li className="mb-3">
          📧 <strong>Email:</strong>{" "}
          <a href="mailto:pgeeth01@gmail.com" className="text-light">pgeeth01@gmail.com</a>
        </li>
        <li className="mb-3">
          🔗 <strong>LinkedIn:</strong>{" "}
          <a href="https://linkedin.com/in/YOUR_USERNAME" target="_blank" rel="noreferrer" className="text-light">
            linkedin.com/in/YOUR_USERNAME
          </a>
        </li>
        <li>
          📍 <strong>Location:</strong> Dallas, TX
        </li>
      </ul>
    </div>
  );
}

export default Contact;