import React, { useEffect, useLayoutEffect, useState } from "react";
import { motion as m } from "framer-motion";

export default function ScrollDown() {
  const [scrollState, setScrollState] = useState(true);

  window.addEventListener("wheel", (event) => {
    setScrollState(false);
  });

  console.log(scrollState);
  return (
    <>
      {scrollState ? (
        <m.main
          className="
            absolute w-10 h-32 
            overflow-hidden
            flex
            flex-col
            justify-center
            items-center
            mt-[38vw]
            ml-[125vh]
        "
          animate={{
            x: scrollState ? -100 : 200,
          }}
        >          
          <m.div
          initial={{
            opacity:0
          }}
            animate={{
              opacity:[1,0],
              y: [-60, 60],
              display: scrollState ? "auto" : "none",
              transition: {
                duration: 1,
                repeat: "Infinity",
              },
            }}    
          >
            <svg
              width="40px"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 13.5L11.5 9.5M7.5 13.5L3.5 9.5M7.5 13.5V1"
                stroke="#882"
              />
            </svg>
          </m.div>    
        </m.main>
      ) : null}
    </>
  );
}
