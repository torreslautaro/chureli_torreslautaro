import { useEffect, useState } from 'react'
import './style.scss'
import ItemCount from '../ItemCount'
import getProducts from '../../services/mock'
import ItemList from '../ItemList'

const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    getProducts().then(res => setProducts(res))
  },[])
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