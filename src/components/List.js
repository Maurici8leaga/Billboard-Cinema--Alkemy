import { useNavigate, Link } from 'react-router-dom';
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
        <div className="row">
          <div className="col-4" >
            <div className="card">
              <img src="https://www.viewhotels.jp/ryogoku/wp-content/uploads/sites/9/2020/03/test-img.jpg" className="card-img-top" alt="..."/>
              <div className ="card-body">
              <h5 className ="card-title">Movie title</h5>
              <p className ="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to="/*" className ="btn btn-primary">Go somewhere</Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default List;