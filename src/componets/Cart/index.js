import { useContext } from 'react'
import CartContext from '../../contexts/CartContext'
import { Link } from 'react-router-dom'
import CardGrilla from '../utils/CardGrilla'
import Card from '../utils/Card'

const Cart = () => {
  
  const {cart, removeItem, totalPrice, clearCart} = useContext(CartContext)
  
  if(cart.length === 0) {
    return(
      <div className='flex flex-col justify-center items-center mt-10'>
        <h2 className='text-xl font-semibold'>El carrito de compras esta vacio!</h2>
        <Link className='flex justify-center md:w-1/2 mt-6 items-center bg-indigo-400 px-4
            py-1 rounded shadow-md shadow-gray-400 hover:opacity-70
            transition-all active:transform active:translate-y-1' to="/">
          <span>Volver al inicio</span>
        </Link>
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