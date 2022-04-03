import './style.scss'
import {useState} from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
  const [cantidad, setCantidad] = useState(initial)
  const [stockState, setStockState] = useState(stock)
  const [mensaje, setMensaje] = useState()


  const restarCantidad = () => {
    if (cantidad > 0) { 
      setCantidad(cantidad - 1)
      setMensaje('')
    }
  }

  const sumarCantidad = () => {
    if (cantidad < stockState) {
      setCantidad(cantidad + 1)
    } else {
      setMensaje('No hay mas stock')
    } 
  }


  const addItemsOnCart = () => {
    if (cantidad <= stockState) {
      onAdd(cantidad)
      setStockState(stockState - cantidad)
      setCantidad(initial)
    } else {
      setMensaje('Ya agregaste todos los productos disponibles')
    }
  }

  return (
      <div className='itemCount-Container'>
        <div className='itemCount-Container--counter'>
          <button onClick={restarCantidad}>-</button>
          <p>{cantidad}</p>
          <button onClick={sumarCantidad}>+</button>
        </div>
        {mensaje ? <p className='message-error'>{mensaje}</p> : ''}
        {stockState ? <button className='button-add' onClick={addItemsOnCart}>Agregar al Carrito</button> : ''}
      </div>
  )
}

export default ItemCount