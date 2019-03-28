import React, { Component } from 'react';
import './App.css';
import Container from "./components/Container";
import data from './data.json'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Container data={data}/>
        </header>
      </div>
    );
  }
}

export default App;
