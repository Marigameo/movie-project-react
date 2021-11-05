import { useState } from "react";
import * as React from "react";

function Colorlist() {
  const [color, setColor] = useState("orange");
  const styles = { backgroundColor: color };

  return (
    <input
      value={color}
      style={styles}
      onChange={(event) => setColor(event.target.value)}
      placeholder="enter a color" />
  );
}
function Colorbox({ color }) {
  const styles = {
    height: "75px",
    width: "150px",
    background: color,
    margin: "10px 0px",
  };
  return <div style={styles}></div>;
}
