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
    <article className="grid grid-cols-1 row-auto py-5 px-10 gap-y-5 md:grid-cols-2 md:rounded  md:gap-x-10 md:shadow-lg">
      <picture className='flex justify-center items-center row-start-2 row-end-3 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-4 md:border-r-2'>
        <img className='w-3/5 md:w-2/5' alt={title} src={image} />
      </picture>
      <div className="row-start-1 row-end-2 md:col-start-2 md:col-end-3">
          <div className='flex flex-col gap-x-5'>
            <p className='bg-indigo-300 rounded-lg px-2 py-1 text-xs w-14 text-center font-semibold text-white'>{condition}</p>
            <h2 className='text-2xl font-semibold'>{title}</h2>
          </div>
          <p className='text-indigo-500 font-semibold text-xl'>${price}</p>
      </div>
      <div className='row-start-3 row-end-4 md:h-auto md:col-start-2 md:col-end-3  md:row-start-2 md:row-end-3'>
        <p className='text-sm text-justify font-normal'>{description}</p>
      </div>
      <div className='md:col-start-2 md:col-end-3 md:row-start-3 md:row-end-4'>
          { isInCart(id) 
            ? <Link to='/cart' className="flex justify-center items-center bg-indigo-400 px-4
            py-1 rounded shadow-md shadow-gray-400 hover:opacity-70
            transition-all active:transform active:translate-y-1">
              <span className='text-white font-medium text-md'>Terminar mi compra</span>
            </Link> 
            : <ItemCount stock={stock} initial={0} onAdd={handleOnAdd} />
          }
      </div>
    </article>
  )
}

export default ItemDetail