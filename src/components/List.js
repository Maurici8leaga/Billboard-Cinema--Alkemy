import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import '../css/style.css';

function List() {

  const navigate = useNavigate();

  useEffect(() => {
    // verification token, making the component only for users that had tokens
    const token = localStorage.getItem('token');

    if (token === null) {
      navigate('/');
    }
  }, []);

  return (
    <div className="container">
      <div className="content-wrap">
        <h2>Soy el component listado</h2>

      </div>
    </div>
  )
}

export default List;