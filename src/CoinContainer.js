import React, { Component } from "react";

import CoinFace from "./CoinFace";

class CoinContainer extends Component {
  state = {
    coin: false,
    heads: 0,
    tails: 0
  };

  handleFlip = () => {
    console.log("in the flip bitch");
    const binaryNum = Math.round(Math.random());
    if (binaryNum === 0) {
      this.setState(prevState => ({ coin: false, heads: prevState.heads + 1 }));
    } else {
      this.setState(prevState => ({ coin: true, tails: prevState.tails + 1 }));
    }
  };

  render() {
    console.log("THIS BE THE STATE", this.state);
    return (
      <div>
        <CoinFace
          coinFace={this.state.coin}
          numHeads={this.state.heads}
          numTails={this.state.tails}
        />
        <button onClick={this.handleFlip}>Flip the coin</button>
      </div>
    );
  }
}

export default CoinContainer;
