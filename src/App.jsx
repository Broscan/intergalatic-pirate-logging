import { useState } from "react";
import "./App.css";
import Spaceships from "./components/Spaceships";
import React from "react";

function App() {
  const [spaceships, setSpaceships] = useState([
    { name: "Millennium Falcon", speed: 1050 },
    { name: "Naboo N-1 Starfighter", speed: 920 },
    { name: "TIE Interceptor", speed: 1200 },
  ]);

  function logSpeed(speed, name) {
    console.log(`${speed}`);

    const spaceIndex = spaceships.map((a) => a.name).indexOf(name);
    console.log(name, spaceIndex);
  }

  function handleOnDelete(spaceshipName) {
    console.log("Deleting ", spaceshipName);

    // Filtrera spaceships-listan
    const filteredSpaceships = spaceships.filter(
      (s) => s.name !== spaceshipName
    );

    // Uppdatera spaceships-listan
    setSpaceships(filteredSpaceships);
  }

  return (
    <>
      {spaceships.map((a) => (
        <Spaceships
          key={a.name}
          name={a.name}
          speed={a.speed}
          onLogSpeed={logSpeed}
          onDelete={handleOnDelete}
        />
      ))}
    </>
  );
}
export default App;
