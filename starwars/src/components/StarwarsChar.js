import React from 'react';

const StarWarsChar = props => {
    return (
        <div className='starwWarsChar'>
            <div className='character' key={props.char.toString()}>
                <div className='details'>
                    <h2>{props.char.name}</h2>
                    <p><strong>Birth Year:</strong>{props.char.birth_year}</p>
                    <p><strong>Height:</strong>{props.char.height}</p>
                    <p><strong>Gender:</strong>{props.char.gender}</p>
                    <p><strong>Created:</strong>{props.char.created}</p>
                    <p><strong>Edited:</strong>{props.char.edited}</p>
                    <p><strong>Eye Color:</strong>{props.char.eye_color}</p>
                    <p><strong>Mass:</strong>{props.char.mass}</p>
                    <p><strong>Skin Color:</strong>{props.char.skin_color}</p>
                </div>
            </div>
        </div>
    )
    };

export default StarWarsChar;