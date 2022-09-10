import './style.css';
import logo from './logo.png';
import CartWidget from '../cartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='navBar'>
            <Link to={'/'}><img className="logo" src={logo} alt="Logo de empresa"/></Link>
            <ul className="btnNavBar">
                <li>
                    <NavLink className={({isActive}) => (isActive? 'btnNavActive' :  'btnNav')} to={'/'}>Inicio</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => (isActive? 'btnNavActive' :  'btnNav')} to={'/category/Guitarra'}>Guitarras</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => (isActive? 'btnNavActive' :  'btnNav')} to={'/category/Piano'}>Pianos</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => (isActive? 'btnNavActive' :  'btnNav')} to={'/contact'}>Contacto</NavLink>
                </li>
            </ul>
            <CartWidget/>
        </nav>
    );
}

export default NavBar;