import './style.scss'
const Navbar = () => {

    return (
        <header>
            <div className='header-first'>
                <a href='#' alt="Logo ChureLi">
                    <img src='./logo3.png' alt='El logardo de churo' />
                </a>
                <div className='header-first--formandoffer'>
                    <form>
                        <input type="text"></input>
                        <button></button>
                    </form>
                    <a href='#'>
                        <span></span>
                        Envíos gratis en 24hs a partir de $4000
                    </a>
                </div>
            </div>
            <div className="header-second">
                <div>
                    
                </div>
                <div className='header-second--navigation'>
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
                <div className="header-second--account">
                    <nav>
                        <ul>
                            <li>
                                <a href="#" alt="Opciones de cuenta del usuario" className='user-account'>
                                    <span className='user-pic'></span>
                                    Lautaro
                                </a>
                            </li>
                            <li>
                                <a href="#" alt="Mis compras">Mis compras</a>
                            </li>
                            <li>
                                <a href="#" alt="Carrito de compras">
                                    <span className='user-cart'></span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}


export default Navbar