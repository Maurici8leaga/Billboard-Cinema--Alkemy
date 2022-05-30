import { Link } from 'react-router-dom';

function Header() {
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
                            <Link to="/list" className="nav-link active text-white-50">Link </Link>
                        </div >
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;