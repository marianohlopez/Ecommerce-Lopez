import '../App.css';

function NavBar() {
    return (
        <nav className='navBar'>
            <a href="../../public/index.html"><img className="logo" src={require("../img/logo.png")}
                alt="Logo de empresa"/></a>
            <ul className="btnNavBar">
                <li>
                    <a className="btnNav" aria-current="page" href="../../public/index.html">Inicio</a>
                </li>
                <li>
                    <a className="btnNav" href="../pages/productos.html">Productos</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;