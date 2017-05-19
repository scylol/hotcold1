import React from 'react';
import Form from './form';
import { shallow } from 'enzyme';

describe('<Form />', () => {
  it('testing form', () => {
    const checkAnswer = '';
    shallow(<Form checkAnswer={checkAnswer} />)
  })
})