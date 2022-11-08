import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {

    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/Login', {
            replace: true
        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Associations
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className = { ({ isActive }) => `nav-item nav-link ${ isActive ? 'active text-success' : '' }` } 
                        to="/BreakingBad"
                    >
                        BreakingBad
                    </NavLink>

                    <NavLink 
                        className = { ({ isActive }) => `nav-item nav-link ${ isActive ? 'active text-warning' : '' }` }
                        to="/BetterCallSaul"
                    >
                        BetterCallSaul
                    </NavLink>

                    <NavLink 
                        className = { ({ isActive }) => `nav-item nav-link ${ isActive ? 'active text-info' : '' }` }
                        to="/Search"
                    >
                        Search
                    </NavLink>
                    
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <button className = "nav-item nav-link btn btn-danger text-black" onClick={ onLogout }>
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}