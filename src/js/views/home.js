import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Card } from "../component/card.js";

export const Home = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.loadSomeData();
		actions.loadPlanets();
		actions.loadStarships();
	}, []);

	return (
		<div className="container">
			<h1 className="text-danger">Characters</h1>
			<div className="d-inline-flex mb-5">
				{store.persons.map((item, index) => {
					return <Card key={index} name={item.name} id={item.uid} type={"people/"} />;
				})}
			</div>

			<h1 className="text-danger">Planets</h1>
			<div className="d-inline-flex mb-5">
				{store.planets.map((item, index) => {
					return <Card key={index} name={item.name} id={item.uid} type={"planets/"} />;
				})}
			</div>

			<h1 className="text-danger">Starships</h1>
			<div className="d-inline-flex mb-5">
				{store.starships.map((item, index) => {
					return <Card key={index} name={item.name} id={item.uid} type={"starships/"} />;
				})}
			</div>
		</div>
	);
};
