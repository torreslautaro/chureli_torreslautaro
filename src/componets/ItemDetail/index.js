import './style.scss'
import ItemCount from '../ItemCount'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../contexts/CartContext'

const ItemDetail = ({id,title, price, description, image, condition, stock}) => {
  const {addItem, isInCart} = useContext(CartContext)
  const handleOnAdd = (quantity) => {
    const newProduct = {
      id,title,price, quantity, image
    }
    addItem(newProduct)
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
          { isInCart(id) 
            ? <Link to='/cart' className="buttonGoToCart">Terminar mi compra</Link> 
            : <ItemCount stock={stock} initial={0} onAdd={handleOnAdd} />
          }
        </div>
      </div>
    </article>
  )
}

export default ItemDetail