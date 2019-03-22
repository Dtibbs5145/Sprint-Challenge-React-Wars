import React from 'react';
import StarWarsChar from './StarWarsChar';
import './StarWars.css';

function StarWarsChars(props) {
    return (
        <div className='character-card'>
            <ul>{props.chars.map(char => {
                return <StarWarsChar char={char} />;
            })}
            </ul>
        </div>
    )
}

export default StarWarsChars;