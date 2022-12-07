import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <nav className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 
        border-bottom">
            <div className="container">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to={'/'}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={'/about'}>About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={'/actors'}>Actors</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={'/genres'}>Genres</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;