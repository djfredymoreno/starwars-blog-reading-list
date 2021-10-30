import React from "react";
import { Link } from "react-router-dom";
import StarWarsLogo from "../../img/Star-Wars-Logo.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 container">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img className="img-fluid" src={StarWarsLogo} width="100" />
				</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<div className="dropdown">
						<button
							className="btn btn-secondary dropdown-toggle"
							type="button"
							id="dropdownMenuButton1"
							data-bs-toggle="dropdown"
							aria-expanded="false">
							Favourites
						</button>
						<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
							<li>
								<a className="dropdown-item" href="#">
									Action
								</a>
							</li>
							<li>
								<a className="dropdown-item" href="#">
									Another action
								</a>
							</li>
							<li>
								<a className="dropdown-item" href="#">
									Something else here
								</a>
							</li>
						</ul>
					</div>
				</Link>
			</div>
		</nav>
	);
};
