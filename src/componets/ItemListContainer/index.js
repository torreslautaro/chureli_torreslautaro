import './style.scss'
import ItemCount from '../ItemCount'

const ItemListContainer = ({greeting}) => {

  const handleOnAdd = (cantidad) => {
    console.log(`Se agregaron ${cantidad} productos` )
  }

  return (
    <>
    <h1>{greeting}</h1>
    <ItemCount stock={10} initial={0} onAdd={handleOnAdd}></ItemCount>
    </>
  )
}

export default ItemListContainer