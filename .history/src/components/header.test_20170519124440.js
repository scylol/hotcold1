import React from 'react';
import { shallow } from 'enzyme';
import Header from './header';

describe('<Header />', () => {

  it('Renders something', () => {
    const won = 5;
    const pop = {};
    const correctAnswer = Number;
    shallow(
      <Header
        won={won}
        pop={pop}
        correctAnswer={correctAnswer}
      />
    )
  })
});

