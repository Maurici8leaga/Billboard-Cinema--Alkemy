import Login from './components/Login';
import { Routes, Route } from 'react-router-dom';
// Routes cambio por switch, que es el que permite cambiar de un componente a otro y Route identifica que componente cargar
import List from './components/List';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/list" element={<List/>} />
      </Routes>
    </>
  );
}

export default App;
