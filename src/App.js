import Login from './components/Login';
import { Routes, Route } from 'react-router-dom';
// Routes cambio por switch, que es el que permite cambiar de un componente a otro y Route identifica que componente cargar
import List from './components/List';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header/>

      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/list" element={<List/>} />
      </Routes>
      
      <Footer/>
    </>
  );
}

export default App;
