import React from 'react';
import { shallow } from 'enzyme';
import Header from './header';

describe('<Header />', () => {

  
it('the correct message when true', () => {
    const won = true;
    const guesses = [];
    const correctAnswer = 5;
    const wrapper = shallow(
      <Header
        won={won}
        guesses={guesses}
        correctAnswer={correctAnswer}
      />
    )
    expect(wrapper.contains(<h2>You win!</h2>)).toEqual(true);
})

  it('the correct message when less than 10', () => {
    const won = false;
    const guesses = [10];
    const correctAnswer = 1;
    const wrapper = shallow(
      <Header
        won={won}
        guesses={guesses}
        correctAnswer={correctAnswer}
      />
    )
    
      expect(wrapper.contains(<h2>Supa Hot!</h2>)).toEqual(true);
    
  })

  it('the correct message when less than 20 but greater than 10', () => {
    const won = false;
    const guesses = [20];
    const correctAnswer = 1;
    const wrapper = shallow(
      <Header
        won={won}
        guesses={guesses}
        correctAnswer={correctAnswer}
      />
    )
    expect(wrapper.contains(<h2>Warm</h2>)).toEqual(true);
  })

  it('the correct message when greater than 20', () => {
    const won = false;
    const guesses = [30];
    const correctAnswer = 1;
    const wrapper = shallow(
      <Header
        won={won}
        guesses={guesses}
        correctAnswer={correctAnswer}
      />
    )
   expect(wrapper.contains(<h2>Cold</h2>)).toEqual(true);
  })
 
});
