import CardGrillaItems from "../CardGrillaItems"
import { Link } from "react-router-dom"

const CardGrilla = ({cart,totalPrice, clearCart = '',removeItem = '', isBuyOrder = '' }) => {
  return (
    <div className='flex flex-col w-full gap-y-6'>
      {
        cart.map(item => <CardGrillaItems key={item.id} item={item} isBuyOrder={isBuyOrder} removeItem={removeItem} />)
      }
      {!isBuyOrder ?
      <>
      <p className='flex justify-between w-full font-medium text-lg'>Total a pagar: <span className="font-semibold">${totalPrice}</span></p>
      <button className='flex justify-center items-center bg-red-400 px-4
        py-1 rounded shadow-md shadow-gray-400 hover:opacity-70
        transition-all active:transform active:translate-y-1' onClick={() => clearCart()}>
        <span className="text-white font-medium text-md">Borrar todos los productos</span>
      </button>
      <Link to="/buyorder" className='flex justify-center items-center bg-indigo-400 px-4
        py-1 rounded shadow-md shadow-gray-400 hover:opacity-70
        transition-all active:transform active:translate-y-1'>
        <span className="text-white font-medium text-md">Ir a finalizar compra</span>
      </Link>
      </> : ''
      }
    </div>
  )
}

export default CardGrilla