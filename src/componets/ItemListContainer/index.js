import { useEffect, useState } from 'react'
import './style.scss'
import ItemCount from '../ItemCount'
import getProducts from '../../services/getProducts'
import ItemList from '../ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([])
  const {idCategory} = useParams()

  useEffect(() => {
    getProducts(idCategory).then(res => setProducts(res))
  },[idCategory])

  return (
    <>
    <main>
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </main>
    </>
  )
}

export default ItemListContainer