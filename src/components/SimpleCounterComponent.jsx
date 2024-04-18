 import React, { Component } from 'react';

class Simple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      toggle: false
    };
  }

  handleAdd = () => {
    if (this.state.toggle==true) {
      this.setState({
        counter: this.state.counter + 1
      });
    }else{
        this.setState({
        counter: this.state.counter
        })
    }
  };

  handleToggle = () => {
    this.setState({
      toggle: this.state.toggle==false ?true : false
    });
  };

  render() {
    {console.log('Simple Component')}
    return (
      <div>
        <h1>Simple Components</h1>
        <h3>{this.state.counter}</h3>
        <button onClick={this.handleToggle}>Set Toggle</button>
        <button onClick={this.handleAdd}>Counter</button>
      </div>
    );
  }
}

export default Simple;
