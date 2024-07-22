import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.css"; // Asegúrate de que el CSS esté importado

export const Planets = () => {
    const { store, actions } = useContext(Context);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imageErrors, setImageErrors] = useState([]);

    useEffect(() => {
        actions.showPlanets();
    }, [actions]);

    const handleImageError = index => {
        setImageErrors(prevErrors => [...prevErrors, index]);
    };

    const handleNext = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % store.planets.length);
    };

    const handlePrev = () => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + store.planets.length) % store.planets.length);
    };

    return (
        <div className="container mb-5">
            <h2 style={{ color: "yellow" }}>Lista de Planetas</h2>
            <div className="row">
                <div className="col">
                    <div className="carousel slide" id="carouselExampleControls" data-bs-ride="carousel" style={{ position: "relative" }}>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="card-group">
                                    {store.planets.map((planet, index) => {
                                        const relativeIndex = (index - currentIndex + store.planets.length) % store.planets.length;
                                        if (relativeIndex < 3) {
                                            return (
                                                <div className="card" key={index}>
                                                    <div className="profile-pic">
                                                        <img
                                                            src={!imageErrors.includes(index) ? `https://starwars-visualguide.com/assets/img/planets/${index + 1}.jpg` : `https://starwars-visualguide.com/assets/img/planets/10.jpg`}
                                                            className="card-img-top"
                                                            alt="..."
                                                            onError={() => handleImageError(index)}
                                                        />
                                                    </div>
                                                    <div className="bottom">
                                                        <div className="content">
                                                            <div className="name">{planet.name}</div>
                                                            <div className="about-me">
                                                                <ul className="no-bullets">
                                                                    <li><strong>Population:</strong> {planet.result.properties.population || 'N/A'}</li>
                                                                    <li><strong>Climate:</strong> {planet.result.properties.climate || 'N/A'}</li>
                                                                    <li><strong>Terrain:</strong> {planet.result.properties.terrain || 'N/A'}</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="bottom-bottom">
                                                            <button className="more">Learn more</button>
                                                            <button className="heart"><i className="fa-regular fa-heart"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        }
                                        return null;
                                    })}
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" onClick={handlePrev} style={{ position: "absolute", top: "50%", left: "0", transform: "translateY(-50%)" }}>
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" onClick={handleNext} style={{ position: "absolute", top: "50%", right: "0", transform: "translateY(-50%)" }}>
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Planets;
