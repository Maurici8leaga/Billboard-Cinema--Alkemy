import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


function List () {

    const navigate = useNavigate();

  useEffect(() => {
      // verification token, making the component only for users that had tokens
    const token = localStorage.getItem('token');

    if(token === null) {
      navigate('/');
    }
  }, []);

    return (
        <h2>Soy el component listado</h2>
    )
}

export default List;