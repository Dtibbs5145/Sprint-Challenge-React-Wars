import React from 'react';
import StarwarsChars from './StarwarsChars';

const StarwarsChar = props => {
    return (
        <div className='starwarsChar'>
            <div className='character' key={props.char.toString()}>
                <h2>{props.char.name}</h2>
                <p>{props.char.birth_year}</p>
                <p>{props.char.created}</p>
                <p><{props.char.edited}</p>
                <p>{props.char.eye_color}</p>
                <p>{props.char.films}</p>
                <p>{props.char.gender}</p>
                <p>{props.char.hair_color}</p>
                <p>{props.char.height}</p>
                <p>{props.char.homeworld}</p>
                <p>{props.char.mass}</p>
                <p>{props.char.name}</p>
                <p>{props/char.skin_color}</p>
                <p>{props.char.species}</p>
                <p>{props.char.starship)</p>
                <p>{props.char.vehicles}</p>
            </div>
        </div>
    )};

export default StarwarsChars;