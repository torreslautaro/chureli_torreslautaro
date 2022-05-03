import './style.scss'
import { useContext } from 'react'
import CartContext from '../../contexts/CartContext'
import { Link } from 'react-router-dom'

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
    <div className="cartContainer">
      <h2 className="cartTittle">Carrito de compras</h2>
      <div className='cartContainer--grilla'>
        {
            cart.map(item => {
              return(
                <div className='cartContainer--grilla--item' key={item.id}>
                  <div className='cartContainer--grilla--item--defaults'>
                    <span>Producto</span>
                    <div className='cartContainer--grilla--item--defaults__product'>
                      <img src={item.image} alt={item.title}></img>
                      {item.title}
                    </div>
                  </div>
                  <div className='cartContainer--grilla--item--defaults'>
                    <span>Cantidad</span>
                    {item.quantity}
                  </div>
                  <div className='cartContainer--grilla--item--defaults'>
                    <span>Precio Unitario</span>
                    ${item.price}
                  </div>
                  <div className='cartContainer--grilla--item--defaults'>
                    <span>Total</span>
                    ${item.price * item.quantity}
                  </div>
                  <div className='cartContainer--grilla--item--actions'>
                    <button className='buttonsBorrar' onClick={() => removeItem(item.id)}>Borrar Producto</button>
                  </div>
                </div>
              )
            })
          }
          <p className='cartContainer--grilla__total'>Total a pagar: <span>{totalPrice}</span></p>
          <button className='buttonsBorrar' onClick={() => clearCart()}>Borrar todos los productos</button>
          <Link to="/buyorder" className='buttonSuccess'>Ir a finalizar compra</Link>
      </div>
    </div>

  )
}

export default Cart