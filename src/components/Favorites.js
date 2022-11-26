import { Navigate } from "react-router-dom";

const Favorites = (props) => {
	// protect the route
	const token = sessionStorage.getItem("token");

	return (
		<>
			{!token && <Navigate to="/" />}

			<div className="container">
				<h2>Seccion mis Favoritos</h2>

				<div className="row">
					{!props.favorites.length && (
						<div>
							<h5 className="text-danger">
								No tienes ninguna pelicula favorita
							</h5>
						</div>
					)}
					{props.favorites.map((movie, index) => {
						const { title, overview, imgURL, id } = movie;

						return (
							<div className="col-3" key={index}>
								<div className="card my-4">
									<img src={imgURL} className="card-img-top" alt="..." />
									<button
										className="favorite-btn"
										onClick={props.addOrRemoveFavs}
										data-movie-id={id}
									>
										🖤
									</button>
									<div className="card-body">
										<h5 className="card-title">{title.substring(0, 30)}...</h5>
										<p className="card-text">{overview.substring(0, 100)}...</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Favorites;
