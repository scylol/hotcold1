import React from 'react';
import { shallow } from 'enzyme';
import Header from './header';

describe('<Header />', () => {

  it('Renders something', () => {
    const isWon = Boolean;
    const guesses = [];
    const correctAnswer = Number;
    shallow(
      <Header
        isWon={isWon}
        guesses={guesses}
        correctAnswer={correctAnswer}
      />
    )
  })
});

