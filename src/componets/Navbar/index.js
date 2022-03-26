import './style.scss'
const Navbar = () => {

    return (
        <header>
            <div className="header-logo">
                <img src='./logo3.png' alt='El logardo de churo' />
            </div>
            <div className="header-navegation">
                <div>
                    <button>Inicio</button>
                </div>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <a href="#">Componentes</a>
                            </li>
                            <li>
                                <a href="#">Combos Actualizacion</a>
                            </li>
                            <li>
                                <a href="#">Accesorios</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="header-login">
                <button>Inicio</button>
            </div>
        </header>
    )
}


export default Navbar