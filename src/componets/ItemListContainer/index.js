import { useEffect, useState } from 'react'
import getProducts from '../../services/getProducts'
import ItemList from '../ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([])
  const {idCategory, search} = useParams()

  useEffect(() => {
    getProducts(idCategory, search).then(res => setProducts(res))
  },[idCategory,search])

  return (
    <>
    <div>
      <div className='max-w-2xl my-0 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h2 className='sr-only'>{greeting}</h2>
        <ItemList products={products} />
      </div>
    </div>
    </>
  )
}

export default ItemListContainer