import "./App.css";
import React, { useEffect, useState } from "react";
import Escene3d from "./components3D/Escene3d";
import Navbar from "./Navbar";

function App() {
  const [response, setRespose] = useState(false);
/*   useEffect(() => {
    console.log(window.screen.width);
    window.screen.width > 400 ? setRespose(true) : false;
  }, []); */

  return ( 
        <main> 
            <Navbar />             
            <Escene3d />   
        </main>
      ) 
   
  
}

export default App;
