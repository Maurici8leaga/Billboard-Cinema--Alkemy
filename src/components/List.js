import { Link, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/style.css';

function List() {

  // usamos el token en este component para proteger las rutas
  const token = localStorage.getItem('token');
  // verification token, making the component only for users that had tokens

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const endPoint = "https://api.themoviedb.org/3/discover/movie?api_key=e89813675e342efb3edc61f9269a4f1a";
    // hacemos el resquest al API de esta forma
    axios.get(endPoint)
      .then(res => {
        const apiData = res.data;
        // guardamos la data del API en un state de esta forma
        setMovieList(apiData.results);
      })
  }, [])

  console.log(movieList);

  // const {title, overview, poster_path} = movieList;

  return (
    <>
      {/* de esta forma se protege la ruta, de manera que si no se tiene token no entre al component */}
      {!token && <Navigate to="/" />}

      <div className="container">
        <div className="content-wrap">
          <div className="row">
            {movieList.map((movie, index) => {
              const {title, overview, poster_path} = movie;

               return (
                <div className="col-3" key={index}>
                  <div className="card my-4">
                    <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{title.substring(0, 30)}...</h5>
                      <p className="card-text">{overview.substring(0, 100)}...</p>
                      <Link to="/*" className="btn btn-primary">View detail</Link>
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