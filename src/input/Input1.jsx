import React, { Component } from 'react';

class Input1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
  }
  change = (event) => {
    const { setInput1 } = this.props;
    const inputValue = event.target.value;
    this.setState({ inputValue });
    setInput1(inputValue)
  }
  render() {
    const { inputValue } = this.state;
    return (
      <div>
        <input value={inputValue} onChange={this.change} type="text" />
      </div>
    );
  }
}

export default Input1;
