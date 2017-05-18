import React from 'react';

import './footer.css'

class Footer extends React.Component {

  render() {
    return (
        <section className='bottom-section'><ul>{this.props.guesses.map((guess, index) => <li key={index}>{guess}</li>)}</ul></section>
    )
  }

}
export default Footer
