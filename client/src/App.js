import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    componentDidMount() {
        fetch('http://127.0.0.1:3000/api/getTokenBalance', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                account: '0x8a45A9916C1bf2118E1047ad20D8c4Ba776D9722'
            })
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            });
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
