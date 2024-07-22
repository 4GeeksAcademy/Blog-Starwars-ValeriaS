import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Context } from '../store/appContext';

export const DetailsCharacters = () => {
    const { store } = useContext(Context);
    const { name } = useParams(); // Usa 'name' para obtener el nombre del parámetro de la URL

    // Encuentra el personaje basado en el nombre
    const character = store.people.find(p => p.name === name);

    if (!character) {
        return <p>Loading...</p>; // Manejo de estado de carga o datos no encontrados
    }

    return (
        <div className="details-container container mt-5 bg-light rounded p-5">
            <h1>{character.name}</h1>
            <hr className="my-4" />
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <img
                            className="card-img"
                            src={`https://starwars-visualguide.com/assets/img/characters/${store.people.indexOf(character) + 1}.jpg`}
                            alt={character.name}
                        />
                    </div>
                    <div className="col-sm-3">
                        <h6>Birth Year: {character.properties.birth_year || 'N/A'}</h6>
                        <h6>Eye Color: {character.properties.eye_color || 'N/A'}</h6>
                        <h6>Hair Color: {character.properties.hair_color || 'N/A'}</h6>
                        <h6>Height: {character.properties.height || 'N/A'}</h6>
                        <h6>Mass: {character.properties.mass || 'N/A'}</h6>
                    </div>
                    <div className="col-sm-6">
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4>
                    </div>
                </div>
            </div>
            <hr className="my-4" />
            <Link to="/">
                <button className="btn btn-primary btn-lg">Back home</button>
            </Link>
        </div>
    );
};

export default DetailsCharacters;
