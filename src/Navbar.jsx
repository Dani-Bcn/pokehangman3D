import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <main className="z-50 fixed">
      <button onClick={() => navigate("/")}>
        <p className="p-5">Home</p>
      </button>
    </main>
  );
}
