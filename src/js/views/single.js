import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const { type, id } = useParams();
	const [item, setItem] = useState({});
	useEffect(() => {
		fetch("https://www.swapi.tech/api/" + type + "/" + id)
			.then(data => {
				return data.json();
			})
			.then(info => {
				setItem(info.result.properties);
			});
	}, []);
	return (
		<div className="jumbotron">
			<div className="container d-flex">
				<img src="http://lorempixel.com/400/200/" className="img-fluid me-5" />
				<div className="card-text">
					<h1 className="display-4 text-center fw-bold">{item.name}</h1>
					<p className="text-center">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply
						dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the
						printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					</p>
				</div>
			</div>

			<hr className="my-4 bg-danger container" />

			<div className="d-flex justify-content-around container text-danger">
				{/*Characters*/}
				<p>{"Height: " + item.height}</p>
				<p>{"Mass: " + item.mass}</p>
				<p>{"Hair color: " + item.hair_color}</p>
				<p>{"Skin color: " + item.skin_color}</p>
				<p>{"Eye color: " + item.eye_color}</p>
				<p>{"Birth year: " + item.birth_year}</p>
				<p>{"Gender: " + item.gender}</p>
			</div>

			{/*Planets
				<p>{item.diameter}</p>
				<p>{item.rotation_period}</p>
				<p>{item.orbital_period}</p>
				<p>{item.gravity}</p>
				<p>{item.population}</p>
				<p>{item.climate}</p>
				<p>{item.terrain}</p>
				<p>{item.surface_water}</p>

				{/*Starships
				<p>{item.model}</p>
				<p>{item.starship_class}</p>
				<p>{item.manufacturer}</p>
				<p>{item.cost_in_credits}</p>
				<p>{item.length}</p>
				<p>{item.crew}</p>
				<p>{item.passengers}</p>
				<p>{item.consumables}</p>*/}

			<div className="container">
				<Link to="/">
					<span className="btn btn-primary btn-lg" href="#" role="button">
						Back home
					</span>
				</Link>
			</div>
		</div>
	);
};
