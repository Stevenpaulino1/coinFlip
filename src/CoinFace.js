import React from "react";

const coinFace = props => {
  console.log("coinface props", props);
  return (
    <div>
      <h1>{props.coinFace ? "Tails" : "Heads"}</h1>
      <h3>Total Flips: {props.numHeads + props.numTails}</h3>
      <h4>Total Heads: {props.numHeads}</h4>
      <h4>Total Tails: {props.numTails}</h4>
    </div>
  );
};

export default coinFace;
