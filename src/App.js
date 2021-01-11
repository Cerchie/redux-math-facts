import React from 'react';
import Math from './Math'
import NumberInputs from './NumberInputs'
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux';
import rootReducer from './reducers/rootReducer'
import {Provider} from 'react-redux'
function App() {
  return (

    <div className="App">
        <Math/>
        <NumberInputs/>
    </div>
 
  );
}

export default App;
