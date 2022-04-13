import './style.scss'
import { useState,useEffect } from 'react'
import CartWidget from '../CartWidget'
import { Link } from 'react-router-dom'
import getCategories from '../../services/getCategories'
import Select from '../utils/Select'

const Navbar = () => {
    const [category, setCategory] = useState([])
    useEffect(() => {
        getCategories()
            .then(res => setCategory(res))
    }, [])
    return (
        <header>
            <div className='header-first'>
                <Link to='/' alt="Logo ChureLi">
                    <img src='../logo3.png' alt='El logardo de churo' />
                </Link>
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
                                <Select category={category} className='selectNavbar' />
                            </li>
                            <li>
                                <a href="#">Ofertas</a>
                            </li>
                            <li>
                                <a href="#">Ayuda</a>
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
                                <CartWidget />
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}


export default Navbar