import './style.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './logo.png';
import CartWidget from '../cartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (

        <Navbar className='navBar' expand="lg">
            <Container className= 'backCont'>
                <Navbar.Brand><Link to={'/'}><img className="logo" src={logo} alt="Logo de empresa"/></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto ">
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
                        <Link to={'/cart'}><CartWidget/></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;