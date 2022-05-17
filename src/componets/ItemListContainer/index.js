import {useState } from 'react'
import getProducts from '../../services/getProducts'
import ItemList from '../ItemList'
import { useParams } from 'react-router-dom'
import { useAsync } from '../../hooks/useAsync'


const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const {idCategory} = useParams()

  useAsync(
    setLoading,
    () => getProducts(idCategory),
    setProducts,
    () => console.log('Error en Item List Container'),
    [idCategory]
  )

  return (
    <>
    <div>
      <div className='max-w-2xl my-0 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h2 className='sr-only'>{greeting}</h2>
        <ItemList products={products} loading={loading} />
      </div>
    </div>
    </>
  )
}

export default ItemListContainer