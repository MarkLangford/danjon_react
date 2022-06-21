import React from "react";
import text from "./LoreText.json";

export default function Lore() {
  return (
    <div className="Lore_Text">
      <h3>Part 1</h3>
      <p>{text[0].part1}</p>
      <br />
      <h3>Part 2</h3>
      <p>{text[1].part2}</p>
    </div>
  );
}
