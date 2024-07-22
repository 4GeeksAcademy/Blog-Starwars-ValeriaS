import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store, actions } = useContext(Context);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX6MK34zw_YfhT1F26_4dFyF5Rc8v8_ZexPg&s" alt="Star Wars" className="star-wars-logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/planets" className="nav-link">Planets</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/vehicles" className="nav-link">Vehicles</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/characters" className="nav-link">Characters</Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <div className="dropdown">
                            <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                Favorites <span className="badge bg-secondary">{store.favourites.length}</span>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                                {store.favourites.length === 0 ? (
                                    <li><span className="dropdown-item">No favorites yet</span></li>
                                ) : (
                                    store.favourites.map((item, index) => (
                                        <li key={index}>
                                            <span className="dropdown-item">
                                                {item.name}
                                                <button className="btn btn-sm btn-danger ms-2" onClick={() => actions.removeFavorite(index)}>
                                                    <i className="fas fa-trash"></i>
                                                </button>
                                            </span>
                                        </li>
                                    ))
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};