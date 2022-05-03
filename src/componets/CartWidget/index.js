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
      <Link to='/cart' alt="Carrito de compras">
        <span className='user-cart'><b>{getCartQuantity()}</b></span>
      </Link>
    </>
  )
}

export default CartWidget