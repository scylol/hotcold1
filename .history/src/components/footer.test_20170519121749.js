import React from 'react'
import { shallow } from 'enzyme'
import Footer from './footer'

describe('<Footer />', () => {

  it('It renders without crashing', () => {
    const guesses = 'yolos';
    shallow(<Footer guesses = {guesses} />)
  })

  it('has a prop correctly passed to it', () => {
    const guesses = [];
    const wrapper = shallow(<Footer guesses={guesses} />)
    expect(wrapper.contains(<ul>{guesses}</ul>)).toEqual(true);
  })
})
