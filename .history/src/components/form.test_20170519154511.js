import React from 'react';
import Form from './form';
import { shallow } from 'enzyme';

describe('<Form />', () => {
  it('testing form', () => {
    const checkAnswer = '';
    const guesses = [];
    shallow(<Form
      checkAnswer={checkAnswer}
      guesses={guesses}
    />)
  })
})