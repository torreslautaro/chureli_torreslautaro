import './style.scss'
import { useState,useEffect } from 'react'
import CartWidget from '../CartWidget'
import { Link,useNavigate, useLocation } from 'react-router-dom'
import getCategories from '../../services/getCategories'
import Select from '../utils/Select'

const Navbar = () => {
    const [category, setCategory] = useState([])
    
    const navigate = useNavigate()

    const location = useLocation()

    useEffect(() => {
        getCategories()
            .then(res => setCategory(res))
    }, [])

    const handleSubmit = (evt) => {
        evt.preventDefault()
        const search = evt.target[0].value
        navigate(`/${search}`)
    }
    return (
        <header>
            <div className='header-first'>
                <Link to='/' alt="Logo ChureLi">
                    <img src='../logo3.png' alt='El logardo de churo' />
                </Link>
                <div className='header-first--formandoffer'>
                    <form onSubmit={handleSubmit}>
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