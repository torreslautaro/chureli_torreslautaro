import { useEffect, useState } from "react"
import { getProductsDetails } from "../../services/mock"
import ItemDetail from "../ItemDetail"
import './style.scss'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([])

  useEffect(() => {
    getProductsDetails(5)
    .then(
      res => setProduct(res[0])
      )
  }, [])
  return (
    <section>
      <ItemDetail {...product} />
    </section>
  )

}

export default ItemDetailContainer