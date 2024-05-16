import React, { useState } from "react";

function Spaceships(props) {
  const [timesclicked, setTimesClicked] = useState(0);
  function handleClick() {
    setTimesClicked(timesclicked + 1);

    props.onLogSpeed(props.speed, props.name);
  }
  return (
    <>
      <h1>{props.name}</h1>
      <h3>Number of times logged: {timesclicked}</h3>
      <button onClick={() => handleClick()}>Show Speed in Console</button>
      <button onClick={() => props.onDelete(props.name)}>
        Delete Spaceship
      </button>
    </>
  );
}

export default Spaceships;
