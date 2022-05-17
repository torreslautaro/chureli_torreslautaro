import { useContext, useState } from 'react'
import CartContext from '../../contexts/CartContext'
import addBuyOrder from '../../services/addBuyOrder'
import { Link } from 'react-router-dom'
import Input from '../utils/Input'
import Card from '../utils/Card'
import CardGrilla from '../utils/CardGrilla'

const BuyOrder = () => {
  const {cart, totalPrice, clearCart} = useContext(CartContext)
  const [messageOk, setMessageOk] = useState(null)
  const [messageFail, setMessageFail] = useState(null)
  const [productsWithoutStock, setProductsWithoutStock] = useState([])
  const [loading, setLoading] = useState(false)


  const handleSubmit = (evt) => {
    setLoading(true)
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
      setLoading(false)
      })
  }
  const conditionalStyles = cart.length > 1 ? 'md:flex md:flex-col md:justify-between' : '' 
  return (
    <Card title='Generar Orden de compra' isBuyOrder={true}>
      <form onSubmit={handleSubmit} className=' bg-white md:grid md:grid-cols-2 md:gap-10'>
      <h4 className='text-lg text-center font-semibold text-red-500 col-start-1 col-end-3'>Por favor completa tus datos personales</h4>
        <div className={`grid grid-cols-2 gap-6 mb-10 md:h-full md:mb-0 ${conditionalStyles}`}>
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
        <CardGrilla cart={cart} isBuyOrder={true} />
          <p className='flex justify-between mt-6 font-xl font-semibold col-start-1 col-end-3'>Total a pagar: <span>${totalPrice}</span></p>
          {messageOk ? 
            <p className='bg-emerald-300 p-4 rounded mt-6 text-md font-semibold text-center col-start-1 col-end-3'>{messageOk}</p> : 
            messageFail ? 
            <div className='bg-red-400 p-4 rounded mt-6 text-md font-semibold text-center col-start-1 col-end-3'>
            <p>{messageFail}</p>
            {
              
              productsWithoutStock.map(prod => <li key={prod.id}>{prod.title}</li>)
            }
            </div>
             : ''
          }
          {messageOk ? 
            <Link className='flex justify-center w-full mt-6 items-center bg-indigo-400 px-4
            py-1 rounded shadow-md shadow-gray-400 hover:opacity-70
            transition-all active:transform active:translate-y-1 col-start-1 col-end-3' to="/" onClick={() => clearCart()}>
             <span className='text-white font-medium text-md'>Volver al inicio</span>
            </Link>
            : messageFail ? <Link className='flex justify-center w-full mt-6 items-center bg-indigo-400 px-4
            py-1 rounded shadow-md shadow-gray-400 hover:opacity-70
            transition-all active:transform active:translate-y-1 col-start-1 col-end-3' to="/cart">
              <span className='text-white font-medium text-md'>Volver al carrito</span>
            </Link>
            : <button type='submit' className='flex justify-center w-full mt-6 items-center bg-indigo-400 px-4
            py-1 rounded shadow-md shadow-gray-400 hover:opacity-70
            transition-all active:transform active:translate-y-1 col-start-1 col-end-3'>
              {
                loading ?
                <svg className="border-t-transparent w-8 h-8 border-4 border-white border-solid rounded-full animate-spin mx-3" viewBox="0 0 24 24">
                </svg> : ''
              }
            <span className='text-white font-medium text-md'>{loading ? 'Procesando' : 'Generar orden de compra'}</span>
            </button>
          }
      </form>
    </Card>
  )
}

export default BuyOrder