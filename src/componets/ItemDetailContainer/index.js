import { useEffect, useState } from "react"
import getProductsDetails from "../../services/getProductsDetail"
import ItemDetail from "../ItemDetail"
import './style.scss'
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([])
  const {idProduct} = useParams()

  useEffect(() => {
    getProductsDetails(idProduct)
    .then(
      res => setProduct(res[0])
      )
  }, [idProduct])

  return (
    <section>
      {product ? <ItemDetail {...product} /> : 'Cargando...'}
    </section>
  )

}

export default ItemDetailContainer