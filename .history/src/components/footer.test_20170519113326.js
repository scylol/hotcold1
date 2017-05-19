import React from 'react'
import { shallow } from 'enzyme'
import Footer from './footer'

describe('<Footer />', () => {

  it('It renders without crashing', () => {
    shallow(<Footer />)
  })

})
