import React from 'react';

import Display from './elements/Display';
import Buttons from './elements/Buttons';

import RegisterKeypresses from './logic/keypresses';
import handleInputData from './logic/handleInputData';
import calculate from './logic/calculate';

import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      display: '',
      data: []
    }
    RegisterKeypresses(this);
  }

  handleInput(input, inputType) {
    let currentData = this.state.data;

    let x = handleInputData(currentData, input, inputType)
    // console.log(x)
    this.setState(x)
  }

  calculate() {
    let x=calculate(this.state.data);
    // console.log(x)
    this.setState({display: x,
    data: []})
  }

  clear() {
    this.setState({
      display: '',
      data: []
    })
  }

  render() {
    return (
      <div className='calculator'>
        <Display display={this.state.display}></Display>
        <Buttons
          handleClick={this.handleInput.bind(this)}
          calculate={this.calculate.bind(this)}
          clear={this.clear.bind(this)}>
        </Buttons>
      </div>
    );
  }
}

export default App;