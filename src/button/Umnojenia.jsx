import React, { Component } from 'react';

class Umnojenia extends Component {
  render() {
    const {input1, input2, setInput3} = this.props
    const umnojenia = () =>{
      setInput3(+input1 * +input2)
    }
    return (
      <div>
        <button onClick={umnojenia}>*</button>
      </div>
    );
  }
}

export default Umnojenia;
