import React, { useEffect, useRef, useState } from "react";
import { motion as m, AnimatePresence, animate } from "framer-motion";
import "./App.css";

const Game = () => {

  let limitCalls = 1200;
  const endPointApi = `https://pokeapi.co/api/v2/pokemon?limit=${limitCalls}`;
  const [dataResults, setDataResults] = useState();
  const [randomName, setRandomName] = useState([]);
  const [alphabet, setAlphabet] = useState([]);
  const [nameSecret, setNameSecret] = useState([]);
  const [winner, setWinner] = useState(null);
  const [count, setCount] = useState(0);
  let random = Math.floor(Math.random() * 1200);

  useEffect(() => {
    for (let count = 65; count < 91; count++) {
      setAlphabet((prev) => [...prev, String.fromCharCode(count)]);
    }

    fetch(endPointApi)
      .then((resp) => resp.json())
      .then((resp) => setDataResults(resp.results));
  }, []);

  useEffect(() => {
    dataResults
      ? setRandomName(dataResults[random].name.toUpperCase().split(""))
      : null;
  }, [dataResults]);

  useEffect(() => {
    if (randomName) {
      randomName.map(() => {
        setNameSecret((prev) => [...prev, "_"]);
      });
    }
  }, [randomName]);

  const handleclick = (letter) => {
    setCount(count + 1);
    count > randomName.length ? setWinner(false) : null;

    randomName.map((e, i) => {
      if (letter.target.innerHTML === e) {
        nameSecret[i] = e;
      }
      setNameSecret([...nameSecret]);
      setTimeout(() => {
        nameSecret.includes("_") ? null : setWinner(true);
      }, 250);
    });
  };

  return (
    <m.main className="fixed t-0 r-0  w-screen h-screen flex flex-col justify-center items-center"
    
        exit={{
            opacity:[1,0]
        }}
    
    >
      <h1>Game</h1>

      <section className="flex justify-center items-center gap-5 w-screen h-20">
        {nameSecret
          ? nameSecret.map((e, i) => {
              return (
                <h3 key={i} className="text-red-200">
                  {e}
                </h3>
              );
            })
          : null}
      </section>

      <section className="flex flex-wrap justify-center p-2 gap-2">
        {alphabet.map((e, i) => {
          return (
            <h2
              onClick={(e) => handleclick(e)}
              className="cursor-pointer text-3xl"
              key={i}
            >
              {e}
            </h2>
          );
        })}
      </section>

      {winner === null ? null : winner === true ? (
        <h2 className="text-green-400 text-5xl">You win</h2>
      ) : (
        <h2 className="text-red-400 text-5xl">You lose</h2>
      )}
    </m.main>
  );
};

export default Game;
