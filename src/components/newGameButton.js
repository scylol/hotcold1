import React from 'react';

class NewGame extends React.Component {

render() {
        return (
            <button className='newgame-button' onClick={this.props.resetGame}> New Game </button>
        )
    }
}

export default NewGame;