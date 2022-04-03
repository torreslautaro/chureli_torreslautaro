import Item from "../Item"
import './style.scss'
const ItemList = ({products}) => {
  return (
    <div className="itemList--container">
      <ul>
      {products.map(prod => <li key={prod.id}><Item {...prod} /></li>)}
      </ul>
    </div>
  )
}

export default ItemList