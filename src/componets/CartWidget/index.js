import './style.scss'
import CartContext from '../../contexts/CartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  const {getCartQuantity} = useContext(CartContext)

  if(getCartQuantity() === 0) {
    return null
  }

  return(
    <>
      <Link className='flex gap-1 items-center justify-center' to='/cart' alt="Carrito de compras">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-6 md:w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        <p className='text-base md:text-xl font-medium text-purple-500'>{getCartQuantity()}</p>
      </Link>
    </>
  )
}

export default CartWidget