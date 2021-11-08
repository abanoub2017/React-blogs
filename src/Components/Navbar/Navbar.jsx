import './navbar.css';

import { Link } from 'react-router-dom';

export const Navbar = () => {
    return ( 
        <nav className="navbar">
           <h1> The Blog Post</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{ backgroundColor:"#f1356d"}}>New Blog</Link>
            </div>
        </nav>
     );
}
 
// export default Navbar;