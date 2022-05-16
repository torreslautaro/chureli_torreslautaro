import {useState} from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
  const [cantidad, setCantidad] = useState(initial)
  const [mensaje, setMensaje] = useState()
  const restarCantidad = () => {
    if (cantidad > 0) { 
      setCantidad(cantidad - 1)
      setMensaje('')
    }
  }

  const sumarCantidad = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1)
    } else {
      setMensaje('No hay mas stock')
    } 
  }


  const addItemsOnCart = () => {
    if (cantidad <= stock) {
      onAdd(cantidad)
      setCantidad(initial)
    } else {
      setMensaje('Ya agregaste todos los productos disponibles')
    }
  }

  return (
      <div className='grid content-center gap-y-2'>
        <div className='flex items-center justify-between'>
          <button className='flex justify-center items-center bg-indigo-400 px-4
           py-1 w-10 rounded shadow-md shadow-gray-400 hover:opacity-70
            transition-all active:transform active:translate-y-1' onClick={restarCantidad}>
            <span className='text-white font-medium text-xl'>-</span>
          </button>
          <p className='text-indigo-500 font-semibold text-xl'>{cantidad}</p>
          <button className='flex justify-center items-center bg-indigo-400 px-4
           py-1 w-10 rounded shadow-md shadow-gray-400 hover:opacity-70
           transition-all active:transform active:translate-y-1' onClick={sumarCantidad}>
          <span className='text-white font-medium text-xl'>+</span>
          </button>
        </div>
        {mensaje ? <p className='py-2 bg-red-400 rounded text-center font-semibold text-white'>{mensaje}</p> : ''}
        {stock ? <button className='flex justify-center items-center bg-indigo-400 px-4
        py-1 rounded shadow-md shadow-gray-400 hover:opacity-70
        transition-all active:transform active:translate-y-1' onClick={addItemsOnCart}>
          <span className='text-white font-medium text-md'>Agregar al Carrito</span>
        </button> : ''}
      </div>
  )
}

export default ItemCount