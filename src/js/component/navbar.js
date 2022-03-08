import React, { useContext } from "react";
import { Link } from "react-router-dom";
import StarWarsLogo from "../../img/Star-Wars-Logo.png";
import { useState } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [show, setShow] = useState(false);
	return (
		<nav className="navbar navbar-light bg-light mb-3 container sticky-top">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img className="img-fluid" src={StarWarsLogo} width="100" />
				</span>
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<button
						className="btn btn-primary dropdown-toggle"
						type="button"
						id="dropdownMenuButton1"
						data-bs-toggle="dropdown"
						aria-expanded="false"
						onClick={() => setShow(!show)}>
						Favourites
					</button>
					<ul className={show ? "dropdown-menu show" : "dropdown-menu"} aria-labelledby="dropdownMenuButton1">
						{store.favorites.map((item, index) => {
							return (
								<li className="d-flex ps-2" key={index}>
									{item}
									<a onClick={() => actions.addFavorites(item)}>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											className="bi bi-trash-fill ms-3"
											viewBox="0 0 16 16">
											<path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
										</svg>
									</a>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};
