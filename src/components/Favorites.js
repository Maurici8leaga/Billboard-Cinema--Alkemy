import { Navigate } from 'react-router-dom';


const Favorites = (props) => {
    // dentro del objeto props se esta pasando como propiedad un el array "favsInLocal"

    // protect the route
    const token = sessionStorage.getItem('token');

    return (
        <>
            {!token && <Navigate to="/" />}

            <div className="container">
                <h2>Seccion mis Favoritos</h2>

                <div className="row">
                    {!props.favorites.length &&
                        <div>
                            <h5 className="text-danger">No tienes ninguna pelicula favorita</h5>
                        </div>
                    }
                    {props.favorites.map((movie, index) => {
                        const { title, overview, imgURL, id } = movie;

                        return (
                            <div className="col-3" key={index}>
                                <div className="card my-4">
                                    <img src={imgURL} className="card-img-top" alt="..." />
                                    <button className="favorite-btn" onClick={props.addOrRemoveFavs} data-movie-id={id}>
                                        {/* este prop "data-movie-id" esta para que pueda capturarse el id de cada movie que se le de como fav, debe escribirse SIEMPRE con "data-" y lo demas en minuscula */}
                                        🖤
                                    </button>
                                    <div className="card-body">
                                        <h5 className="card-title">{title.substring(0, 30)}...</h5>
                                        {/* aca el substring lo que hace es recortar el texto y resumirlo a la cantidad de palabras que se desee */}
                                        <p className="card-text">{overview.substring(0, 100)}...</p>
                                        {/* <Link to={`/movieDetail?movieID=${id}`} className="btn btn-primary">View detail</Link> */}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>


            </div>
        </>
    )
}

export default Favorites;