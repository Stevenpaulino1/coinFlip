import React from "react";

import "./Coin.css";

const coinFace = props => {
  console.log("coinface props", props);
  return (
    <div className="Coin">
      <img
        src={
          props.coinFace
            ? "https://etc.usf.edu/clipart/40200/40215/hdoll_back_40215_md.gif"
            : "https://www.wpclipart.com/money/US_Currency/US_Half_Dollar_front.png"
        }
      />
      <h3>Total Flips: {props.numHeads + props.numTails}</h3>
      <h4>Total Heads: {props.numHeads}</h4>
      <h4>Total Tails: {props.numTails}</h4>
    </div>
  );
};

export default coinFace;
