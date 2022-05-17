import Item from "../Item"
import { Link } from 'react-router-dom'
import LoadingSpinner from "../utils/LoadingSpinner"

const ItemList = ({products, loading}) => {
  if(loading) {
    return(
      <LoadingSpinner></LoadingSpinner>
    )
  }

  return (
    <div className="grid grid-cols-2 gap-8 p-4 sm:grid-cols-auto-fit sm:content-center sm:justify-center sm:p-0">
      {products.map(prod =>  <Link key={prod.id} className="group p-1 md:py-4" to={`/details/${prod.id}`}><Item {...prod} /></Link>)}
    </div>
  )
}

export default ItemList