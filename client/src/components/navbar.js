import '../styles/navbar.scss'
import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( <nav>
        <div className="left">
            <ul>
                <li>DeFi</li>
            </ul>
        </div>
        <div className="right">
            <ul>
                <li><Link className="Link" to = {'/'}>Explorer</Link></li>
                <li><Link className="Link" to = {'/lend'}>Lend</Link></li>
                <li><Link className="Link" to = {'/borrow'}>Borrow</Link></li>
                <li><Link className="Link" to = {'/'}>Transfer</Link></li>
                <li><Link className="Link" to = {'/'}>Create</Link></li>
            </ul>
        </div>
    </nav> );
}
 
export default Navbar;