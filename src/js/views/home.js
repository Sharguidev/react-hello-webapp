import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {

	const {store} = useContext(Context);

	return <div className="text-center mt-5 d-flex">
		<h1>Hello Rigo!</h1>
		{
			
			store.people.map(personaje=>
				<div className="card d-flex" style={{width: "18rem"}}>
					<img src={`https://starwars-visualguide.com/assets/img/characters/${personaje.uid}.jpg`} className="card-img-top" alt="..."/>
					<div className="card-body">
						<h5 className="card-title">{personaje.name}</h5>
						<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="#" className="btn btn-primary">Go somewhere</a>
					</div>
				</div>
			
		)}
		
	</div>
};
