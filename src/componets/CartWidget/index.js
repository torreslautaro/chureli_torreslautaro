import './style.scss'
import CartContext from '../../contexts/CartContext'
import { useContext } from 'react'

const CartWidget = () => {
  const {getCartQuantity} = useContext(CartContext)

  if(getCartQuantity() === 0) {
    return null
  }

  return(
    <>
      <a href="#" alt="Carrito de compras">
        <span className='user-cart'><b>{getCartQuantity()}</b></span>
      </a>
    </>
  )
}

export default CartWidget