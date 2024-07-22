import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import injectContext from './store/appContext';

import { Home } from './views/home';
import { Demo } from './views/demo';
import { Single } from './views/single';
import Details from './views/details.jsx';
import { Navbar } from './component/navbar';
import { Footer } from './component/footer';
import Planets from './views/planets.jsx'
import Characters from './views/characters.jsx';
import DetailsCharacters from './views/detailsCharacters.jsx';
import Vehicles from './views/vehicles.jsx';
import DetailsVehicles from './views/detailsVehicles.jsx';

const Layout = () => {
    const basename = process.env.BASENAME || "";

    return (
        <div className="layout">
            <BrowserRouter basename={basename}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/demo" element={<Demo />} />
                    <Route path="/single/:theid" element={<Single />} />
					<Route path="/" element={<Planets />} />
					<Route path="/details/:name" element={<Details />} />    
					<Route path="/" element={<Characters />} />
					<Route path="/detailsCharacters/:name" element={<DetailsCharacters />} /> 
					<Route path="/" element={<Vehicles />} />
					<Route path="/detailsVehicles/:name" element={<DetailsVehicles />} />                
					<Route path="*" element={<h1>Not found!</h1>} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
