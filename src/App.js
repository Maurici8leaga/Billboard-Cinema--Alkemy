import Login from './components/Login';
import { Routes, Route } from 'react-router-dom';
// Routes cambio por switch, que es el que permite cambiar de un componente a otro y Route identifica que componente cargar
import List from './components/List';
import Header from './components/Header';
import Footer from './components/Footer';
import MovieDetail from './components/MovieDetail';
import Results from './components/Results';
import Favorites from './components/Favorites';

function App() {

  const addOrRemoveFavs = e => {

    // set localStorage to save the fav movie
    const favMovies = localStorage.getItem('favs');

    let tempMoviesInFavs;

    if (favMovies === null) {
      tempMoviesInFavs = [];
    } else {
      tempMoviesInFavs = JSON.parse(favMovies);
    }

    const btn = e.currentTarget;
    // con este "e.currentTarget" capturamos el elemento el cual ejecuta esta funcion, en este caso un boton
    const parent = btn.parentElement;
    // con "parentElement" capturamos el parent element del boton que activa esta funcion, para poder tener acceso a la siguiente datos->
    const imgURL = parent.querySelector('img').getAttribute('src');
    // con "querySelector" permite tener acceso al elemento indicado dentro del parent, este va a ser el 1er elemento que el consiga
    // con "getAttribute" podemos acceder a los atributos del elemento capturado por "querySelector", de manera de poder almacenar el URL de la img
    const title = parent.querySelector('h5').innerText;
    // a diferencia de los otros se usa "innerText" para poder almacenar el texto que tiene este h5 capturado por querySelector
    const overview = parent.querySelector('p').innerText;
    // creamos un objeto para poder almacenar todos estos datos capturados y estos ser guardados en el localStorage
    const movieData = { imgURL, title, overview, id: btn.dataset.movieId }
    // "dataset" es una propiedad que nos permite obtener el atributo de un elemento(btn) data en este caso el movieId.. para saber mejor se recomienda hacer console.log

    // check if the movie exist already
    let moviesInArray = tempMoviesInFavs.find(oneMovie => {
      return oneMovie.id === movieData.id
    });

    if (!moviesInArray) {
      // save the movie in fav
      tempMoviesInFavs.push(movieData);
      localStorage.setItem('favs', JSON.stringify(tempMoviesInFavs));
      console.log('Movie saved in favs movies');
    } else {
      // remove the movie
      let moviesLeft = tempMoviesInFavs.filter(oneMovie => {
        return oneMovie.id !== movieData.id
      });
      localStorage.setItem('favs', JSON.stringify(moviesLeft));
      console.log('Movie removed from favs movies');
    }
  }

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/list" element={<List props={true} addOrRemoveFavs={addOrRemoveFavs} />} />
        <Route path="/movieDetail" element={<MovieDetail />} />
        <Route path="/results" element={<Results />} />
        <Route path="/favorites" element={<Favorites/> } />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
