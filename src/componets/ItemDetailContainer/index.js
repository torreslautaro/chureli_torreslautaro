import { useEffect, useState } from "react"
import getProductsDetails from "../../services/getProductsDetail"
import ItemDetail from "../ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([])
  const {idProduct} = useParams()

  useEffect(() => {
    getProductsDetails(idProduct)
    .then(
      res => setProduct(res)
      )
  }, [idProduct])

  return (
    <section className="flex justify-center items-center my-0 mx-auto w-full h-full md:h-5/6 md:py-5 md:px-10">
      {product ? <ItemDetail {...product} /> : 'Cargando...'}
    </section>
  )

}

export default ItemDetailContainer