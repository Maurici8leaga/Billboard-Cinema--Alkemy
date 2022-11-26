import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import swAlert from "@sweetalert/with-react";

const MovieDetail = () => {
	// getting the token
	const token = sessionStorage.getItem("token");

	const query = new URLSearchParams(window.location.search);
	const movieID = query.get("movieID");
	const [movie, setMovie] = useState(null);

	useEffect(() => {
		const endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=e89813675e342efb3edc61f9269a4f1a&language=en-US`;

		// endpoint for make request to API and get the details movie
		axios
			.get(endPoint)
			.then((res) => {
				const movieData = res.data;
				// update the state
				setMovie(movieData);
			})
			.catch((error) => {
				swAlert({
					title: "Hubo un problema, intenta mas tarde",
					icon: "error",
				});
				console.warn(error);
			});
	}, [setMovie, movieID]);

	return !movie ? (
		<p>Loading...</p>
	) : (
		<>
			{!token && <Navigate to="/" />}

			<div className="container">
				<h2>Titulo: {movie.title}</h2>
				<div className="row">
					<div className="col-4">
						<img
							src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
							className="img-fluid"
							alt="poster movie"
						/>
					</div>
					<div className="col-8">
						<h5>Fecha de estreno: {movie.release_date}</h5>
						<h5>Reseña: </h5>
						<p> {movie.overview} </p>
						<h5> Rating: {movie.vote_average} </h5>
						<h5>Generos: </h5>
						<ul>
							{movie.genres.map((gen) => (
								<li key={gen.id}>{gen.name}</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default MovieDetail;
