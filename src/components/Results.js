import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useSearchParams } from 'react-router-dom';
import swAlert from '@sweetalert/with-react';


const Results = (props) => {

    let [searchParams] = useSearchParams();
    // usamos en este component useSearchParams porque con URLSearchParams(window.location.search); pero este hace lo mismo que el anterior metodo 
    const keyword = searchParams.get('keyword');
    // se crea una var igaul y con el method get se coloca el nombre del key y quedara almacenado en la var

    const [moviesResults, setMoviesResults] = useState([]);


    useEffect(() => {
        const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=e89813675e342efb3edc61f9269a4f1a&language=en-US&query=${keyword}`;

        // endpoint para hacer el request al API del get de las movies search
        axios.get(endPoint)
            .then(res => {
                const moviesArray = res.data.results;
                // actualizamos el state con la data que trae el endpoint

                if (moviesArray.length === 0) {
                    swAlert({
                        title: 'No se encontro ninguna pelicula con este nombre',
                        icon: "warning"
                    })
                }
                setMoviesResults(moviesArray)
            })
            .catch(error => {
                console.warn(error);
            })
    }, [keyword])

    return (
        <div className="container">
            <h2>Buscaste : <em> {keyword} </em> </h2>

            {/* circuit cut render para que cuando no halla resultados muestre algo */}
            {moviesResults.length === 0 && <h3>No hay resultados</h3>}

            <div className="content-wrap">
                <div className="row">
                    {moviesResults.map((movie, index) => {
                        const { title, overview, poster_path, id } = movie;

                        return (
                            <div className="col-3" key={index}>
                                <div className="card my-4">
                                    <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} className="card-img-top" alt="..." />
                                    <button className="favorite-btn" onClick={props.addOrRemoveFavs} data-movie-id={id}>
                                        {/* este prop "data-movie-id" esta para que pueda capturarse el id de cada movie que se le de como fav, debe escribirse SIEMPRE con "data-" y lo demas en minuscula */}
                                        🖤
                                    </button>
                                    <div className="card-body">
                                        <h5 className="card-title">{title.substring(0, 30)}...</h5>
                                        {/* aca el substring lo que hace es recortar el texto y resumirlo a la cantidad de palabras que se desee */}
                                        <p className="card-text">{overview.substring(0, 100)}...</p>
                                        <Link to={`/movieDetail?movieID=${id}`} className="btn btn-primary">View detail</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>

        </div>
    )
}

export default Results;