import React from 'react';
import StarwarsChar from './StarwarsChar';

const StarwarsChars = props => {
    return (
        <div className='character-card'>
            <ul>{props.chars.map( char => {
                return <StarwarsChar char={char} />;
            })}
            </ul>
        </div>
    );
}

export default StarwarsChars;