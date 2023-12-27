import React, { Component, useState } from 'react';

class Plus extends Component {

  render() {
    const {input1, input2, setInput3} = this.props
    const plus = () =>{
      setInput3(+input1 + +input2)
    }
    return (
      <div>
        <button onClick={plus }>+</button>
      </div>
    );
  }
}

export default Plus;

