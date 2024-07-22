import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.css"; // Asegúrate de que el CSS esté importado

export const Characters = () => {
    const { store, actions } = useContext(Context);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imageErrors, setImageErrors] = useState([]);

    useEffect(() => {
        actions.showCharacters();
    }, [actions]);

    const handleImageError = index => {
        setImageErrors(prevErrors => [...prevErrors, index]);
    };

    const handleNext = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % store.people.length);
    };

    const handlePrev = () => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + store.people.length) % store.people.length);
    };

    return (
        <div className="container">
            <h2 style={{ color: "yellow" }}>Lista de Personajes</h2>
            <div className="carousel slide" id="carouselExampleControls" data-bs-ride="carousel" style={{ position: "relative" }}>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="card-group">
                            {store.people.map((character, index) => {
                                const relativeIndex = (index - currentIndex + store.people.length) % store.people.length;
                                if (relativeIndex < 3) {
                                    return (
                                        <div className="card" key={index}>
                                            <div className="profile-pic">
                                                <img
                                                    src={!imageErrors.includes(index) ? `https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg` : `https://starwars-visualguide.com/assets/img/characters/1.jpg`}
                                                    className="card-img-top"
                                                    alt={character.name}
                                                    onError={() => handleImageError(index)}
                                                />
                                            </div>
                                            <div className="bottom">
                                                <div className="content">
                                                    <div className="name">{character.name}</div>
                                                    <div className="about-me">
                                                    <ul className="no-bullets">
                                                    <li><strong>Height:</strong> {character.result.properties.height || 'N/A'}</li>
                                                            <li><strong>Birth Year:</strong> {character.result.properties.birth_year || 'N/A'}</li>
                                                            <li><strong>Gender:</strong> {character.result.properties.gender || 'N/A'}</li>
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
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" onClick={handlePrev}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" onClick={handleNext}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Characters;
