import React, { Component } from 'react';
import './App.css';
import Customer from './containers/Customer/CustomerForm';

class App extends Component {
  render() {
    return (
      <div className="app row">
        <Customer />
      </div>
    );
  }
}

export default App;
