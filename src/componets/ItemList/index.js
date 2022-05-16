import Item from "../Item"
import { Link } from 'react-router-dom'

const ItemList = ({products}) => {
  return (
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-auto-fit sm:content-center sm:justify-center">
      {products.map(prod => <Link key={prod.id} className="group p-1 md:py-4" to={`/details/${prod.id}`}><Item {...prod} /></Link>)}
    </div>
  )
}

export default ItemList