import React from 'react';

const StarWarsChar = props => {
    return (
        <div className='starwWarsChar'>
            <div className='character' key={props.char.toString()}>
                <div className='details'>
                    <h2>{props.char.name}</h2>
                    <p>Name:{props.char.name}</p>
                    <p>Birth Year:{props.char.birth_year}</p>
                    <p>Home World:{props.char.homeworld}</p>
                    <p>Height:{props.char.height}</p>
                    <p>Gender:{props.char.gender}</p>
                    <p>Species:{props.char.species}</p>
                    <p>Created:{props.char.created}</p>
                    <p>Edited:{props.char.edited}</p>
                    <p>Eye Color:{props.char.eye_color}</p>
                    <p>Films:{props.char.films}</p>
                    <p>Hair Color:{props.char.hair_color}</p>
                    <p>Mass:{props.char.mass}</p>
                    <p>Skin Color:{props.char.skin_color}</p>
                    <p>Starship:{props.char.starship}</p>
                    <p>Vehicles:{props.char.vehicles}</p>
                </div>
            </div>
        </div>
    )
    };

export default StarWarsChar;