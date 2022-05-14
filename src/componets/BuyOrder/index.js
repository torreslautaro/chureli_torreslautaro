import './style.scss'
import { useContext, useState } from 'react'
import CartContext from '../../contexts/CartContext'
import addBuyOrder from '../../services/addBuyOrder'
import { Link } from 'react-router-dom'
import CardGrilla from '../utils/CardGrilla'
import Input from '../utils/Input'
import Card from '../utils/Card'
import CardGrillaItems from '../utils/CardGrillaItems'

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
    <Card title='Generar Orden de compra'>
      <form onSubmit={handleSubmit} className='cardContainer--grilla'>
      <h4>Por favor completa tus datos personales para continuar</h4>
        <div className='cardContainer--grilla--form'>
            <Input 
              placeholder='Ej: Juan' 
              required={true} 
              textLabel='Nombre:' 
              isForForm={true}
              className='inputForm'
            />
            <Input 
              placeholder='Ej: Perez' 
              required={true} 
              textLabel='Apellido:' 
              isForForm={true} 
              className='inputForm'
            />
            <Input 
              type='email' 
              placeholder='Ej: juan.perez@gmail.com' 
              required={true} textLabel='E-mail:' 
              isForForm={true} 
              className='inputForm'
            />
            <Input 
              type='number'
              placeholder='Ej: 03814785236'
              required={true} 
              textLabel='Télefono:' 
              isForForm={true} 
              className='inputForm'
            />
        </div>
        {
            cart.map(item => <CardGrillaItems key={item.id} item={item} isBuyOrder={true} />)
          }
          <p className='cardContainer--grilla__total'>Total a pagar: <span>{totalPrice}</span></p>
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
    </Card>
  )
}

export default BuyOrder