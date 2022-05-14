import './style.scss'
import { useContext } from 'react'
import CartContext from '../../contexts/CartContext'
import { Link } from 'react-router-dom'
import CardGrilla from '../utils/CardGrilla'
import Card from '../utils/Card'

const Cart = () => {
  
  const {cart, removeItem, totalPrice, clearCart} = useContext(CartContext)
  
  if(cart.length === 0) {
    return(
      <div className='cartEmpty'>
        <h2>El carrito de compras esta vacio!</h2>
        <Link className='buttonPrimary' to="/">Volver al inicio</Link>
      </div>
    )
  }
  return (
    <Card title='Carrito de compras'>
      <CardGrilla cart={cart} removeItem={removeItem} totalPrice={totalPrice} clearCart={clearCart} />
    </Card>

  )
}

export default Cart