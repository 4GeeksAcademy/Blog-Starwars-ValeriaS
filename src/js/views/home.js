import React from "react";
import "../../styles/home.css";
import Characters from "./characters.jsx";
import Planets from "./planets.jsx";
import Vehicles from "./vehicles.jsx";


export const Home = () => (
	<div className="text-center mt-5">
		<Planets/>	
		<Characters/>
		<Vehicles/>

	</div>
);