import React from "react";
import text from "./LoreText.json";

export default function Lore() {
  return (
    <div className="Lore_Text">
      <p>{text[0].part1}</p>
    </div>
  );
}
