import './App.css';
import langObj from './DataBase/DB';
import React from 'react';
import KeyBoard from './components/KeyBoard';
import ToWriteContainer from './components/toWriteContainer'

class App extends React.Component {
  constructor() {
    super();
    this.langObj = langObj;
    this.clickLetter = this.clickLetter.bind(this);
    this.state = {
      letterArr: []
    }
  }
  clickLetter(letter) {
    let letterArr = [...this.state.letterArr];
    letterArr.push(letter);

    this.setState({ letterArr: letterArr });
  }
  render() {
    return (
      <div>
        {/* <p>{this.state.letterArr}</p> */}
        <ToWriteContainer letterArr = {this.state.letterArr} />
        <KeyBoard key="keyBoard" KeyBoard={this.langObj.hebrew} clickLetter={this.clickLetter} />
      </div>
    )
  }
}

export default App;
