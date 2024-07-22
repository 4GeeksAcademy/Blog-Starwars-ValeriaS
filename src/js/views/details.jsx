import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Context } from '../store/appContext';

export const Details = () => {
    const { store } = useContext(Context);
    const { name } = useParams(); // Usa 'name' en lugar de 'theid'

    const planet = store.planets.find(p => p.name === name);

    if (!planet) {
        return <p>Loading...</p>; // Manejo de estado de carga o datos no encontrados
    }

    return (
        <div className="details-container container mt-5 bg-light rounded p-5">
            <h1>{planet.name}</h1>
            <hr className="my-4" />
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <img
                            className="card-img"
                            src={`https://starwars-visualguide.com/assets/img/planets/${store.planets.indexOf(planet) + 1}.jpg`}
                            alt={planet.name}
                        />
                    </div>
                    <div className="col-sm-3">
                        <h6>Population: {planet.result.properties.population || 'N/A'}</h6>
                        <h6>Climate: {planet.result.properties.climate || 'N/A'}</h6>
                        <h6>Terrain: {planet.result.properties.terrain || 'N/A'}</h6>
                        <h6>Gravity: {planet.result.properties.gravity || 'N/A'}</h6>
                        <h6>Rotation period: {planet.result.properties.rotation_period || 'N/A'}</h6>
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

export default Details;
