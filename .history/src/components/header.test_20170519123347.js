import React from 'react';
import { shallow } from 'enzyme';
import Header from './header';

describe('<Header />', () => {

  it('Renders something', () => {
    const isWon = Boolean;
    const lastGuess = 'Yolo';
    const correctAnswer = Number;
    shallow(
      <Header
        isWon={isWon}
        lastGuess={lastGuess}
        correctAnswer={correctAnswer}
      />
    )
  })
});

