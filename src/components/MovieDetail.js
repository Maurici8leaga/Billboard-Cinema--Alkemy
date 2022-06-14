import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';


const MovieDetail = () => {

    const token = sessionStorage.getItem('token');

    // URLSearchParams es un objecto que en el se encuentra todo lo que viaja en el queryString
    const query = new URLSearchParams(window.location.search);
    // lo que se pasa dentro de este URLSearchParams son los parametros que necesitamos, en este caso buscamos la ruta donde contiene el id de la movie
    // window.location nos da la ruta URL de la pag en que estamos pero el "search" en especifico nos da el fragmento que nos interesa
    // el cual es donde se encuentre el ID de la pelicula este seria algo como -> ?movieID=${id} siempre vendra despues del signo ?
    const movieID = query.get('movieID');
    // este "get" se puede hacer porque es un metodo que trae el URLSearchParams el cual nos dara el valor nada mas que sera solo el ID
    // este nombre "movieID" es porque en el url que redirije a este component se le asigno este nombre el cual contendra el ID de la pelicula
    // /movieDetail?movieID=${id} <- ese es el url que se establecio en el component anterior

    useEffect(() => {
        console.log(movieID);
    }, [])

    return (
        <>
            {!token && <Navigate to="/" />}
            <div className="container">

                <h2>Titulo: -------------- </h2>
                <div className="row">
                    <div className="col-4">
                        imagen
                    </div>
                    <div className="col-8">
                        <h5>Fecha de estreno: </h5>
                        <h5>Reseña: </h5>
                        <p> texto que traera la informacion de la pelicula</p>
                        <h5>Generos: </h5>
                        <ul>
                            <li>Genero: 1</li>
                            <li>Genero: 2</li>
                            <li>Genero: 3</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieDetail;