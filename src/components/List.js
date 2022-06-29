import { Link, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/style.css';
import swAlert from '@sweetalert/with-react';


function List(props) {

  // usamos el token en este component para proteger las rutas
  const token = sessionStorage.getItem('token');
  // verification token, making the component only for users that had tokens

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const endPoint = "https://api.themoviedb.org/3/discover/movie?api_key=e89813675e342efb3edc61f9269a4f1a";
    
    // request al API para tener todas las movies
    axios.get(endPoint)
      .then(res => {
        const apiData = res.data;
        // guardamos la data del API en un state de esta forma
        setMovieList(apiData.results);
      })
      .catch(error => {
        swAlert({
          title: 'Hubo un problema, intenta mas tarde',
          icon: "error"
        })
        console.warn(error);
      })
  }, [])

  return (
    <>
      {/* de esta forma se protege la ruta, de manera que si no se tiene token no entre al component */}
      {!token && <Navigate to="/" />}

      <div className="container">
        <div className="content-wrap">
          <div className="row">
            {movieList.map((movie, index) => {
              const {title, overview, poster_path, id} = movie;

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
    </>
  )
}

export default List;