// src/components/Projects.jsx
import React from "react";

const projects = [
  {
    title: "DIF Capstone",
    description: "An eCommerce platform inspired by Jumia, featuring product listing, cart, checkout, and authentication.",
    github: "https://github.com/Dominance26/DIF-Capstone1"
  },
  {
    title: "EduCast",
    description: "A low-bandwidth, offline-first education delivery system built for resource-constrained computing environments.",
    github: "https://github.com/Dominance26/EduCast"
  },
  {
    title: "Farm Website",
    description: "A farm company template website recreated from Figma, with sections for services, blog, testimonials, and company info.",
    github: "https://github.com/Dominance26/farm-website-Timothy-Agwujah"
  },
  {
    title: "TaskMaster",
    description: "A full-stack task management web app with Node.js, Express, MongoDB, and React frontend for productivity tracking.",
    github: "https://github.com/Dominance26/TASK-MASTER"
  },
  {
    title: "Network Detector",
    description: "A tool to detect available network connections and display connectivity information.",
    github: "https://github.com/Dominance26/network-detector"
  },
  {
    title: "Get A Job",
    description: "A simple app designed to help users search and track job opportunities.",
    github: "https://github.com/Dominance26/get-a-job--Timothy-Dominance-Job-Agwujah"
  },
  {
    title: "Huffman Algorithm",
    description: "Implementation of Huffman coding for data compression using JavaScript.",
    github: "https://github.com/Dominance26/Huffman-Algorithm"
  },
  {
    title: "RGB Color Game",
    description: "An interactive RGB color guessing game built with JavaScript DOM manipulation.",
    github: "https://github.com/Dominance26/RGB-Game-Timothy-Dominance-Job-Agwujah"
  },
  {
    title: "HTTP Request Project",
    description: "A project demonstrating how to make HTTP requests and handle responses in JavaScript.",
    github: "https://github.com/Dominance26/HTTP-REQUEST-Timothy-Dominance-Job-Agwujah"
  },
  {
    title: "Atbash Cipher",
    description: "A classic cryptography project implementing the Atbash cipher for text encryption and decryption.",
    github: "https://github.com/Dominance26/atbsh-cipher"
  }
];

function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
