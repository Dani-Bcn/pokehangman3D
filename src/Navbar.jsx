import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <main className="z-50 fixed w-screen flex justify-between items-center">
      <button  onClick={() => navigate("/")}>
        <p className="text-[0.9rem] p-3">Home</p>
      </button>
      <section className="flex">
        <ul className="flex gap-2 px-10 text-[0.9rem]">
          <a href="https://github.com/Dani-Bcn" target="_blank">
            <li>Github</li>
          </a>
          <a href="https://www.linkedin.com/in/daniperezbnc/" target="_blank">
            <li>Linkedin</li>
          </a>
          <a href="https://www.domestika.org/es/nneodani/activity" target="_blank">
            <li>Domestika</li>
          </a>
        </ul>
      </section>
    </main>
  );
}
