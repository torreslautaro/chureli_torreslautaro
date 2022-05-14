import Item from "../Item"
import { Link } from 'react-router-dom'

const ItemList = ({products}) => {
  return (
    <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-4 gap-x-6 lg:grid-cols-6 xl:grid-cols-6 xl:gap-x-10">
      {products.map(prod => <Link key={prod.id} className="group" to={`/details/${prod.id}`}><Item {...prod} /></Link>)}
    </div>
  )
}

export default ItemList