import './style.scss'
import ItemCount from '../ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({title, price, description, image, condition}) => {
  const [quantity, setQuantiy] = useState(0)
  const [goToCart, setGoToCart] = useState(false)
  const handleOnAdd = (cantidad) => {
    setQuantiy(cantidad)
    setGoToCart(true)
  }
  
  return (
    <article className="itemDetail-container">
      <div className="itemDetail-container--images">
        <picture>
          <img alt={title} src={image} />
        </picture>
      </div>
      <div className="itemDetail-container--details">
        <div className='itemDetail-container--details--title'>
          <p className='itemDetail-container--details--title__category'>{condition}</p>
          <h2>{title}</h2>
          <p className='itemDetail-container--details--title__price'>${price}</p>
        </div>
        <div>
        <p className='itemDetail-container--details__description'>{description}</p>
        </div>
        <div className='itemDetail-container--details__counter'>
          { goToCart ? <Link to={`/cart`} className="buttonGoToCart">Ir al carrito</Link> : <ItemCount stock={10} initial={0} onAdd={handleOnAdd} />}
        </div>
      </div>
    </article>
  )
}

export default ItemDetail