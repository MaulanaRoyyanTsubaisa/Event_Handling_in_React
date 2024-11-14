import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("hello");
  const [buttonColor, setButtonColor] = useState("white");

  function clicked() {
    setHeadingText("Submitted");
  }

  function handleMouseOver() {
    setButtonColor("black");
  }
  function handleMouseOut() {
    setButtonColor("white");
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={clicked}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{
          backgroundColor: buttonColor,
          color: buttonColor === "black" ? "white" : "black",
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
