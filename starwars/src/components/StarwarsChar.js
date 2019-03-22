import React from 'react';

const StarWarsChar = props => {
    return (
        <div className='starwWarsChar'>
            <div className='character' key={props.char.toString()}>
                <div className='details'>
                    <h2>{props.char.name}</h2>
                    <p><strong>Birth Year:</strong>{props.char.birth_year}</p>
                    <p><strong>Home World:</strong> <img src='{props.char.homeworld}' alt="home world" /></p>
                    <p><strong>Height:</strong>{props.char.height}</p>
                    <p><strong>Gender:</strong>{props.char.gender}</p>
                    <p><strong>Species:</strong> <img src='{props.char.species}' alt='species' /></p>
                    <p><strong>Created:</strong>{props.char.created}</p>
                    <p><strong>Edited:</strong>{props.char.edited}</p>
                    <p><strong>Eye Color:</strong>{props.char.eye_color}</p>
                    <p><strong>Films:</strong> <img src='{props.char.films}' alt='films' /></p>
                    <p><strong>Hair Color:</strong> <img src='{props.char.hair_color}' alt="hair color" /></p>
                    <p><strong>Mass:</strong>{props.char.mass}</p>
                    <p><strong>Skin Color:</strong>{props.char.skin_color}</p>
                    <p><strong>Starship:</strong>{props.char.starship}</p>
                    <p><strong>Vehicles:</strong> <img src='{props.char.vehicles}' alt='vehicles' /></p>
                </div>
            </div>
        </div>
    )
    };

export default StarWarsChar;