import React from "react";
import "../style.css"; // adjust the path if needed

function Contact() {
  return (
    <div className="contact-container">
      <h2 className="section-heading">📬 Contact Me</h2>
      <ul className="contact-list">
        <li className="mb-3">
          📧 <strong>Email:</strong>{" "}
          <a href="mailto:pgeeth01@gmail.com">pgeeth01@gmail.com</a>
        </li>

        <li className="mb-3">
          🔗 <strong>LinkedIn:</strong>{" "}
          <a
            href="https://linkedin.com/in/geetanjali-p-a69980326"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/geetanjali-p-a69980326
          </a>
        </li>

        <li className="mb-3">
          💼 <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/geethp01"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/geethp01
          </a>
        </li>

        <li>
          📍 <strong>Location:</strong> Frisco, TX
        </li>
      </ul>
    </div>
  );
}

export default Contact;
