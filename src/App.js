import Login from './components/Login';
import { Routes, Route } from 'react-router-dom';
// Routes cambio por switch, que es el que permite cambiar de un componente a otro y Route identifica que componente cargar
import List from './components/List';
import Header from './components/Header';
import Footer from './components/Footer';
import  MovieDetail  from './components/MovieDetail';
import Results from './components/Results';

function App() {
  return (
    <>
      <Header/>

      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/list" element={<List/>} />
        <Route path="/movieDetail" element={<MovieDetail/>} />
        <Route path="/results" element={<Results/>} />
      </Routes>
      
      <Footer/>
    </>
  );
}

export default App;
