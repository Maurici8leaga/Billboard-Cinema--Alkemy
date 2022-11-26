import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import List from "./components/List";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieDetail from "./components/MovieDetail";
import Results from "./components/Results";
import Favorites from "./components/Favorites";

function App() {
	const [favorites, setFavorites] = useState([]);

	useEffect(() => {
		// request the movies that are saved in localStorage
		const favsInLocal = localStorage.getItem("favs");

		if (favsInLocal !== null) {
			const favsArray = JSON.parse(favsInLocal);
			// act the state with the info of localStorage
			setFavorites(favsArray);
		}
	}, []);

	const addOrRemoveFavs = (e) => {
		// set localStorage to save the fav movie
		const favMovies = localStorage.getItem("favs");

		let tempMoviesInFavs;

		if (favMovies === null) {
			tempMoviesInFavs = [];
		} else {
			tempMoviesInFavs = JSON.parse(favMovies);
		}

		const btn = e.currentTarget;
		const parent = btn.parentElement;
		const imgURL = parent.querySelector("img").getAttribute("src");
		const title = parent.querySelector("h5").innerText;
		const overview = parent.querySelector("p").innerText;
		const movieData = { imgURL, title, overview, id: btn.dataset.movieId };

		// check if the movie exist already
		let moviesInArray = tempMoviesInFavs.find((oneMovie) => {
			return oneMovie.id === movieData.id;
		});

		if (!moviesInArray) {
			// save the movie in fav
			tempMoviesInFavs.push(movieData);
			localStorage.setItem("favs", JSON.stringify(tempMoviesInFavs));
			// refresh the state with new movie
			setFavorites(tempMoviesInFavs);
		} else {
			// remove the movie
			let moviesLeft = tempMoviesInFavs.filter((oneMovie) => {
				return oneMovie.id !== movieData.id;
			});
			localStorage.setItem("favs", JSON.stringify(moviesLeft));
			// refresh the state without the movie
			setFavorites(moviesLeft);
		}
	};

	return (
		<>
			<Header favorites={favorites} />

			<Routes>
				<Route path="/" element={<Login />} />
				<Route
					path="/list"
					element={<List props={true} addOrRemoveFavs={addOrRemoveFavs} />}
				/>
				<Route path="/movieDetail" element={<MovieDetail />} />
				<Route
					path="/results"
					element={<Results props={true} addOrRemoveFavs={addOrRemoveFavs} />}
				/>
				<Route
					path="/favorites"
					element={
						<Favorites
							props={true}
							addOrRemoveFavs={addOrRemoveFavs}
							favorites={favorites}
						/>
					}
				/>
			</Routes>

			<Footer />
		</>
	);
}

export default App;
