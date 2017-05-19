import React from 'react';
import Form from './form';

describe('<Form />', () => {
  it('testing form', () => {
    const checkAnswer = '';
    shallow(<Form checkAnswer={checkAnswer} />)
  })
})