const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			persons: [],
			planets: [],
			starships: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			loadSomeData: () => {
				fetch("https://www.swapi.tech/api/people")
					.then(data => {
						//podemos poner mas lineas
						return data.json(); //json necesita ir solo y depsues mas then
					})
					.then(info => {
						setStore({ persons: info.results });
						//podemos introducir mas lineas
					});
			},
			loadPlanets: () => {
				fetch("https://www.swapi.tech/api/planets")
					.then(data => {
						//podemos poner mas lineas
						return data.json(); //json necesita ir solo y depsues mas then
					})
					.then(info => {
						setStore({ planets: info.results });
						//podemos introducir mas lineas
					});
			},
			loadStarships: () => {
				fetch("https://www.swapi.tech/api/starships")
					.then(data => {
						//podemos poner mas lineas
						return data.json(); //json necesita ir solo y depsues mas then
					})
					.then(info => {
						setStore({ starships: info.results });
						//podemos introducir mas lineas
					});
			},
			addFavorites: nameFavorite => {
				const store = getStore();
				if (!store.favorites.includes(nameFavorite)) {
					setStore({ favorites: [...store.favorites, nameFavorite] });
				} else {
					setStore({ favorites: store.favorites.filter(item => item != nameFavorite) });
				}
			}
		}
	};
};

export default getState;
