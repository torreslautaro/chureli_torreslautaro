import db from './firebase'
import { getDocs, collection, query, where } from 'firebase/firestore'

const getCategories = () => {
  const categoriesRef = collection(db, 'categories')

  const q = query(categoriesRef,where('name','!=','Ofertas'))

  const results = getDocs(q)
  .then(res => {
    const categories = res.docs.map(doc => {
      return {id: doc.id, ...doc.data()}
    })
    return categories
  })
  return results
}

export default getCategories