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
      <div className='max-w-2xl my-0 mx-auto sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h2 className=' text-indigo-500 text-center p-2 text-2xl font-semibold md:p-0 md:mb-6 md:text-4xl'>{greeting}</h2>
        <ItemList products={products} loading={loading} />
      </div>
    </div>
    </>
  )
}

export default ItemListContainer