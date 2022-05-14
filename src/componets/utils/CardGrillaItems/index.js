import './style.scss'

const CardGrillaItems = ({item, isBuyOrder, removeItem = ''}) => {

  const inLineStyle = isBuyOrder ? {gridTemplateColumns: 'repeat(4,1fr)'} : {}

  return(
    <div className='cardGrillaContainer' style={inLineStyle}>
      <div className='cardGrillaContainer--item'>
        <span>Producto</span>
        <div className='cardGrillaContainer--item__product'>
          <img src={item.image} alt={item.title}></img>
          {item.title}
        </div>
      </div>
      <div className='cardGrillaContainer--item'>
        <span>Cantidad</span>
        {item.quantity}
      </div>
      <div className='cardGrillaContainer--item'>
        <span>Precio Unitario</span>
        ${item.price}
      </div>
      <div className='cardGrillaContainer--item'>
        <span>Total</span>
        ${item.price * item.quantity}
      </div>
      {!isBuyOrder ? 
        <div className='cardGrillaContainer--item--actions'>
        <button className='buttonsBorrar' onClick={() => removeItem(item.id)}>Borrar Producto</button>
      </div> : ''}
    </div>
  )
}

export default CardGrillaItems