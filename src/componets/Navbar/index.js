import { useState,useEffect } from 'react'
import CartWidget from '../CartWidget'
import { Link } from 'react-router-dom'
import getCategories from '../../services/getCategories'
import DropDownButton from '../utils/DropDownButton'
import Logo from '../../logo.webp'


const Navbar = () => {
    const [category, setCategory] = useState([])



    useEffect(() => {
        getCategories()
            .then(res => setCategory(res))
    }, [])

    const menu = document.querySelector('#menu')

    const handleClick = () => {
        menu.classList.toggle('hidden')
    }
    return (
        <header className='h-fit bg-white border bottom-1 shadow-md text-sm md:text-md lg:text-lg'>
            <nav className='w-full flex flex-wrap justify-between items-center p-1 md:grid md:grid-cols-3 md:py-5 md:px-8'>
                <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" id="menu-button" className="h-6 w-6 cursor-pointer md:hidden block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <div>
                    <Link to='/' alt="Logo ChureLi">
                        <img className='w-28 md:w-40 rounded-lg' src={Logo} alt='El logardo de churo' />
                    </Link>
                </div>
                <div  className='flex gap-1 md:col-start-3 md:col-end-4 md:items-center md:justify-end md:gap-10'>
                    <a href="#" alt="Opciones de cuenta del usuario" className='flex gap-1 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-w w-5 md:h-7 md:w-7 fill-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                        </svg>
                        <span className='hidden md:block'>Lautaro</span>
                    </a>
                    <CartWidget />
                </div>
                <div id="menu" className='hidden w-full md:col-start-2 md:col-end-3 md:row-start-1 md:flex md:items-start'>
                    <ul className='flex flex-col pt-4 md:flex-row md:gap-10 md:pt-0 md:w-full md:justify-between'>
                        <li className='p-1 w-max hover:bg-indigo-400 hover:rounded hover:text-white'><DropDownButton category={category} className='text-left' /></li>
                        <li className='p-1 w-max hover:bg-indigo-400 hover:rounded hover:text-white'><Link to='categories/28f5gww'>Ofertas</Link></li>
                        <li className='p-1 w-max hover:bg-indigo-400 hover:rounded hover:text-white'><a href="#">Ayuda</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}


export default Navbar