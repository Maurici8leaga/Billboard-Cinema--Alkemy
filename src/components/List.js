import { Link, Navigate } from 'react-router-dom';
import '../css/style.css';

function List() {

  // usamos el token en este component para proteger las rutas
  const token = localStorage.getItem('token');
  // verification token, making the component only for users that had tokens


  return (
    <>
    {/* de esta forma se protege la ruta, de manera que si no se tiene token no entre al component */}
      {!token && <Navigate to="/" /> }

      <div className="container">
        <div className="content-wrap">
          <div className="row">
            <div className="col-4" >
              <div className="card">
                <img src="https://www.viewhotels.jp/ryogoku/wp-content/uploads/sites/9/2020/03/test-img.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Movie title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Link to="/*" className="btn btn-primary">Go somewhere</Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default List;