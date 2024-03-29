import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Searcher from './Searcher';

function Header(favsInLocal) {

    // protect the route
    const token = sessionStorage.getItem('token');

    const navigate = useNavigate();

    const Logout = () => {
        sessionStorage.clear();
        navigate("/");
    }

    return (
        <header>
            <nav className="navbar navbar-expand-sm bg-dark ">
                <div className="container-fluid ps-5 ">
                    <Link className="navbar-brand text-white" to="/">AlkeFlix</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav">
                            <Link to="/" className="nav-link active text-white-50">Home </Link>
                            <Link to="/list" className="nav-link active text-white-50">List </Link>
                            <Link to="/favorites" className="nav-link active text-white-50">Favorites </Link>
                            {token && favsInLocal.favorites.length > 0 ? (
                                <li className="nav-item d-flex align-items-center">
                                    <span className="text-success">
                                        {favsInLocal.favorites.length}
                                    </span>
                                </li>

                            ) : (<> </>)}
                        </div >
                    </div>
                    
                    <Searcher />

                    {/* setting logout button for only user registered */}
                    {token && (<>
                        <button className="btn btn-outline-danger mx-3" onClick={() => Logout()}>
                            Exit
                        </button>
                    </>)}
                </div>
            </nav>
        </header>
    );
}

export default Header;