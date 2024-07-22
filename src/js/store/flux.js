const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			character: [],
			vehicles: [],
			vehicle: [],
			planets: [],
			planet: [],
			favourites: []
		},
		actions: {
			showCharacters: () => {
				getActions().loadDataFromAPI("people", "https://www.swapi.tech/api/people");
			},
			showPlanets: () => {
				getActions().loadDataFromAPI("planets", "https://www.swapi.tech/api/planets");
			},
			showVehicles: () => {
				getActions().loadDataFromAPI("vehicles", "https://www.swapi.tech/api/vehicles");
			},
			
			loadDataFromAPI: async (key, url) => {
				try {
					const localStorageData = localStorage.getItem(key);
					if (localStorageData) {
						setStore({ [key]: JSON.parse(localStorageData) });
					} else {
						const response = await fetch(url);
						const data = await response.json();
						if (data.results) {
							const items = await Promise.all(data.results.map(async item => {
								const itemResponse = await fetch(item.url);
								const itemData = await itemResponse.json();
								const itemProperties = 'properties' in itemData ? itemData.properties : itemData;
								return { ...itemProperties, name: item.name };
							}));
							localStorage.setItem(key, JSON.stringify(items));
							setStore({ [key]: items });
						} else {
							console.error("No se recibieron datos válidos de la API");
						}
					}
				} catch (error) {
					console.error("Error al cargar los datos:", error);
				}
			},
			

			// Nueva función para agregar favoritos
			addFavorite: (item) => {
				const store = getStore();
				if (!store.favourites.some(fav => fav.name === item.name)) {
					const updatedFavorites = [...store.favourites, item];
					setStore({ favourites: updatedFavorites });
					localStorage.setItem('favourites', JSON.stringify(updatedFavorites));
				}
			},

			// Nueva función para eliminar favoritos
			removeFavorite: (index) => {
				const store = getStore();
				const updatedFavorites = store.favourites.filter((_, i) => i !== index);
				setStore({ favourites: updatedFavorites });
				localStorage.setItem('favourites', JSON.stringify(updatedFavorites));
			},

			// Nueva función para cargar favoritos desde localStorage
			loadFavorites: () => {
				const favourites = JSON.parse(localStorage.getItem('favourites')) || [];
				setStore({ favourites });
			},

			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
		}
	};
};

export default getState;