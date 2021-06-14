// Code ClickityClick Component Here
// src/components/ClickityClick.js
import React from 'react';

class ClickityClick extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      hasBeenClicked: false
    };
  }

//   handleClick = () => {
//     // Update our state here...
//     this.setState({
//         hasBeenClicked: true
//     })
//   };  
  handleClick = () => {
    // Update our state here...
    this.setState(prevState => {
        return {
            hasBeenClicked: !prevState.hasBeenClicked
        }
    })
  };

  render() {
    return (
        <div>
        <button onClick={this.handleClick}>{this.state.hasBeenClicked ? "ON" : "OFF"}</button>
      </div>
    );
  }
}

export default ClickityClick;
