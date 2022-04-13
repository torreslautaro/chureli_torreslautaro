import Item from "../Item"
import './style.scss'
import { Link } from 'react-router-dom'

const ItemList = ({products}) => {
  return (
    <div className="itemList--container">
      <ul>
      {products.map(prod => <li key={prod.id}><Link to={`/details/${prod.id}`}><Item {...prod} /></Link></li>)}
      </ul>
    </div>
  )
}

export default ItemList