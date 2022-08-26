import './style.css';
import logo from './logo.png';
import CartWidget from '../cartWidget/CartWidget';

const NavBar = () => {
    return (
        <nav className='navBar'>
            <a href="../../public/index.html"><img className="logo" src={logo}
                alt="Logo de empresa"/></a>
            <ul className="btnNavBar">
                <li>
                    <a className="btnNav" aria-current="page" href="../../public/index.html">Inicio</a>
                </li>
                <li>
                    <a className="btnNav" href="../pages/productos.html">Productos</a>
                </li>
            </ul>
            <CartWidget/>
        </nav>
    );
}

export default NavBar;