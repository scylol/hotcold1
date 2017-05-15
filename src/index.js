import React from 'react';
import ReactDOM from 'react-dom';
import HotCold from './hotColdContainer';
import './index.css';

const guesses = [5,5,10,23,100,56,73];

ReactDOM.render(
  <HotCold title='HOT or COLD' guesses={guesses}/>,
  document.getElementById('root')
);
