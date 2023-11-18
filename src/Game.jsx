import React, { useEffect, useRef, useState } from "react";
import { motion as m, AnimatePresence, animate } from "framer-motion";
import "./App.css";

const Game = () => {
  let limitCalls = 1200;
  const endPointApi = `https://pokeapi.co/api/v2/pokemon?limit=${limitCalls}`;
  const [dataResults, setDataResults] = useState();
  const [randomName, setRandomName] = useState([]);
  let random = Math.floor(Math.random() * 1200);
  console.log(random);

  useEffect(() => {
    fetch(endPointApi)
      .then((resp) => resp.json())
      .then((resp) => setDataResults(resp.results));
  }, []);

  useEffect(() => {
    dataResults ? setRandomName(dataResults[random].name.split("")) : null;
  }, [dataResults]);

  console.log(randomName);
  return (
    <main>
      <h1>Game</h1>
      <section className="flex justify-center items-center w-screen h-20 bg-red-500">
        {randomName
          ? randomName.map((e, i) => {
              return(
              <p className="flex" key={i}>{e}</p>
              )
            })
          : null}
      </section>
    </main>
  );
};

export default Game;
