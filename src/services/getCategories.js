import db from './firebase'
import { getDocs, collection } from 'firebase/firestore'

const getCategories = () => {
  const results = getDocs(collection(db,'categories'))
  .then(res => {
    const categories = res.docs.map(doc => {
      return {id: doc.id, ...doc.data()}
    })
    return categories
  })
  return results
}

export default getCategories