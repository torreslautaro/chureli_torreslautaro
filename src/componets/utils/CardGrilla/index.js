import CardGrillaItems from "../CardGrillaItems"
import { Link } from "react-router-dom"

const CardGrilla = ({cart,totalPrice, clearCart,removeItem}) => {
  return (
    <div className='cardContainer--grilla'>
      {
        cart.map(item => <CardGrillaItems key={item.id} item={item} isBuyOrder={false} removeItem={removeItem} />)
      }
      <p className='cardContainer--grilla__total'>Total a pagar: <span>{totalPrice}</span></p>
      <button className='buttonsBorrar' onClick={() => clearCart()}>Borrar todos los productos</button>
      <Link to="/buyorder" className='buttonSuccess'>Ir a finalizar compra</Link>
    </div>
  )
}

export default CardGrilla