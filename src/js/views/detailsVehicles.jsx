import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Context } from '../store/appContext';

const DetailsVehicles = () => {
    const { store } = useContext(Context);
    const { name } = useParams();
    const [vehicle, setVehicle] = useState(null);

    useEffect(() => {
        const foundVehicle = store.vehicles.find(v => v.name === decodeURIComponent(name));
        setVehicle(foundVehicle);
    }, [store, name]);

    if (!vehicle) {
        return <p>Loading...</p>;
    }

    return (
        <div className="details-container container mt-5">
            <h1>{vehicle.name}</h1>
            <hr className="my-4" />
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <img
                            className="card-img"
                            src={`https://starwars-visualguide.com/assets/img/vehicles/${store.vehicles.indexOf(vehicle) + 1}.jpg`}
                            alt={vehicle.name}
                            onError={(e) => { e.target.onerror = null; e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg" }}
                        />
                    </div>
                    <div className="col-sm-3">
                        <h6>Model: {vehicle.properties.model || 'N/A'}</h6>
                        <h6>Manufacturer: {vehicle.properties.manufacturer || 'N/A'}</h6>
                        <h6>Cost: {vehicle.properties.cost_in_credits || 'N/A'}</h6>
                        <h6>Length: {vehicle.properties.length || 'N/A'}</h6>
                        <h6>Crew: {vehicle.properties.crew || 'N/A'}</h6>
                        <h6>Passengers: {vehicle.properties.passengers || 'N/A'}</h6>
                        <h6>Class: {vehicle.properties.vehicle_class || 'N/A'}</h6>
                    </div>
                    <div className="col-sm-6">
                        <h4>{vehicle.description || 'No description available'}</h4>
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

export default DetailsVehicles;
