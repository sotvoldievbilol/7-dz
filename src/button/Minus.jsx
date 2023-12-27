import React, { Component } from 'react';

class Minus extends Component {
  render() {
    const {input1, input2, setInput3} = this.props
    const minus = () =>{
      setInput3(+input1 - +input2)
    }
    return (
      <div>
        <button onClick={minus}>-</button>
      </div>
    );
  }
}

export default Minus;
