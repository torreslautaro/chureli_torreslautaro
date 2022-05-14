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
    <article className="grid grid-cols-1 md:grid-cols-2 p-10">
      <picture className='flex justify-center items-center'>
        <img className='w-3/5 md:w-2/5' alt={title} src={image} />
      </picture>
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