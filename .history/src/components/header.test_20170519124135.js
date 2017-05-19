import React from 'react';
import { shallow } from 'enzyme';
import Header from './header';

describe('<Header />', () => {

  it('Renders something', () => {
    const won = 'heyo';
    const guesses = [];
    const correctAnswer = Number;
    shallow(
      <Header
        won={won}
        guesses={guesses}
        correctAnswer={correctAnswer}
      />
    )
  })
});

