import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="card">
			<img src="" className="card-img-top" alt="" />
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make up the bulk of the cards content.
				</p>
				<a
					href="#"
					className="btn btn-primary"
					onClick={() => {
						actions.loadSomeData();
					}}>
					Learn more
				</a>
				<div>
					{store.persons.map((element, index) => {
						return element.name;
					})}
				</div>
			</div>
		</div>
	);
};
