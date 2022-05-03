import './style.scss'
import { useContext, useState } from 'react'
import CartContext from '../../contexts/CartContext'
import addBuyOrder from '../../services/addBuyOrder'
import { Link } from 'react-router-dom'

const BuyOrder = () => {
  const {cart, totalPrice, clearCart} = useContext(CartContext)
  const [messageOk, setMessageOk] = useState(null)
  const [messageFail, setMessageFail] = useState(null)
  const [productsWithoutStock, setProductsWithoutStock] = useState([])


  const handleSubmit = (evt) => {
    evt.preventDefault()
    const data = {
      buyer: {
        nombre: evt.target[0].value,
        apellido : evt.target[1].value,
        email : evt.target[2].value,
        telefono : evt.target[3].value
      },
      items : cart,
      date : new Date(),
      total : totalPrice
    }
    addBuyOrder(data)
      .then(res => {
        res.status === 200 
      ? setMessageOk(res.message) 
      : setMessageFail(res.message); setProductsWithoutStock(res.productsWithoutStock);
      })
  }
  
  return (
    <div className="cartContainer">
      <h2 className="cartTittle">Generar Orden de compra</h2>
      <form onSubmit={handleSubmit} className='cartContainer--grilla'>
      <h4>Por favor completa tus datos personales para continuar</h4>
        <div className='cartContainer--grilla--form'>
            <label>
              <span>Nombre:</span>
              <input required type="text" placeholder='Ej: Juan'/>
            </label>
            <label>
              <span>Apellido:</span>
              <input required type="text" placeholder='Ej: Perez'/>
            </label>
            <label>
              <span>E-Mail:</span>
              <input required type="email" placeholder='Ej: juan.perez@gmail.com'/>
            </label>
            <label>
              <span>Télefono:</span>
              <input required type="number" placeholder='Ej: 03814785236'/>
            </label>
        </div>
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
                </div>
              )
            })
          }
          <p className='cartContainer--grilla__total'>Total a pagar: <span>{totalPrice}</span></p>
          {messageOk ? 
            <p className='message--success'>{messageOk}</p> : 
            messageFail ? 
            <div className='message--error'>
            <p>{messageFail}</p>
            {
              
              productsWithoutStock.map(prod => <li key={prod.id}>{prod.title}</li>)
            }
            </div>
             : ''
          }
          {messageOk ? 
            <Link className='buttonPrimary' to="/" onClick={() => clearCart()}>Volver al inicio</Link>
            : messageFail ? <Link className='buttonPrimary' to="/cart">Volver al carrito</Link>
            : <button type='submit' className='buttonSuccess'>Generar orden de compra</button>
          }
      </form>
    </div>

  )
}

export default BuyOrder