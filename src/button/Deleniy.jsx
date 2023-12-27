import React, { Component } from 'react';

class Deleniy extends Component {
  render() {
    const {input1, input2, setInput3} = this.props
    const deleniy = () =>{
      setInput3(+input1 / +input2)
    }
    return (
      <div>
        <button onClick={deleniy}>/</button>
      </div>
    );
  }
}

export default Deleniy;
