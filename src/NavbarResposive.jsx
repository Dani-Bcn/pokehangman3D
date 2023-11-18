import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavbarResposive() {
  const navigate = useNavigate();
  return (
    <main>
      <section>
        <ul>
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/game")}>Game</li>
        </ul>
      </section>
      <section>
        <ul>
          <a href="https://github.com/Dani-Bcn" target="_blank" rel="noopener noreferrer">
            <li>Github</li>
          </a>
          <a href="https://www.linkedin.com/in/daniperezbnc/" target="_blank" rel="noopener noreferrer">
            <li>Linkedin</li>
          </a>
          <a href="https://www.domestika.org/es/nneodani/activity" target="_blank" rel="noopener noreferrer">
            <li>Domestika</li>
          </a>
        </ul>
      </section>
    </main>
  );
}
