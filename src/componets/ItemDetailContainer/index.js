import { useEffect, useState } from "react"
import getProductsDetails from "../../services/getProductsDetail"
import ItemDetail from "../ItemDetail"
import { useParams } from "react-router-dom"
import { useAsync } from "../../hooks/useAsync"
import LoadingSpinner from "../utils/LoadingSpinner"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(false)
  const {idProduct} = useParams()

  useAsync(
    setLoading,
    ()  => getProductsDetails(idProduct),
    setProduct,
    () => console.log('Error en product detail'),
    [idProduct]
  )
   if(loading) {
     return (
       <LoadingSpinner></LoadingSpinner>
     )
   }

  return (
    <section className="flex justify-center items-center my-10 mx-auto w-full h-full md:mt-32 md:py-5 md:px-10">
      <ItemDetail {...product} />
    </section>
  )

}

export default ItemDetailContainer