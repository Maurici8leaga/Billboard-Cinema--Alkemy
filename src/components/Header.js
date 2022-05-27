import { Link } from 'react-router-dom';

function Header() {
    return(
        <header>
            <nav>
                <ul>
                    <li> <Link to="/"/> </li>
                    <li> <Link to="list" /></li>
                    <li> <Link to="nm" /> </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;