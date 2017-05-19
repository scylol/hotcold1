import React from 'react';
import Form from './form';
import { shallow, mount } from 'enzyme';

describe('<Form />', () => {

  it('testing form', () => {
    const checkAnswer = '';
    const guesses = [];
    shallow(<Form
      checkAnswer={checkAnswer}
      guesses={guesses}
    />)
  })

  it('Should fire a callback', () => {
    const callback = jest.fn();
    const guesses = [];
    const wrapper = mount(<Form sendAnswer={callback} />);
    const value = 5;

    wrapper.instance().setEditing(true);
    wrapper.find('input[type="text"]').node.value = value;
    wrapper.simulate('submit');
    expect(callback).toHaveBeenCalledWith(value);
})

})