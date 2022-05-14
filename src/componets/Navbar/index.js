import { useState,useEffect } from 'react'
import CartWidget from '../CartWidget'
import { Link,useNavigate, useLocation } from 'react-router-dom'
import getCategories from '../../services/getCategories'
import DropDownButton from '../utils/DropDownButton'
import Input from '../utils/Input'

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

    const button = document.querySelector('#menu-button'); // Hamburger Icon
const menu = document.querySelector('#menu'); // Menu

console.log(menu)
const handleClick = () => {
    menu.classList.toggle('hidden');
}
    return (
        <header className='h-1/5 bg-white border bottom-1 shadow-md text-sm md:text-lg font-mono'>
            <nav className='w-full flex flex-wrap justify-between items-center p-1 md:grid md:grid-cols-3 md:py-5 md:px-8'>
                <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" id="menu-button" className="h-6 w-6 cursor-pointer md:hidden block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <div>
                    <Link to='/' alt="Logo ChureLi">
                        <img className='w-28 md:w-40 rounded-lg' src='../logo3.png' alt='El logardo de churo' />
                    </Link>
                </div>
                <div  className='flex gap-1 md:col-start-3 md:col-end-4 md:items-center md:justify-end md:gap-10'>
                    <a href="#" alt="Opciones de cuenta del usuario" className='flex gap-1 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-w w-5 md:h-7 md:w-7 fill-purple-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                        </svg>
                        <span className='hidden md:block'>Lautaro</span>
                    </a>
                    <CartWidget />
                </div>
                <div id="menu" className='hidden w-full md:col-start-2 md:col-end-3 md:row-start-1 md:flex md:items-start'>
                    <ul className='flex flex-col pt-4 md:flex-row md:gap-10 md:pt-0'>
                        <li><DropDownButton category={category} className='text-left' /></li>
                        <li><a href="#">Ofertas</a></li>
                        <li><a href="#">Ayuda</a></li>
                        <li><a href="#" alt="Mis compras">Mis compras</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}


export default Navbar