import db from "./firebase"
import {collection, query, getDocs, where} from 'firebase/firestore'

const getProducts = (idCategory) => {
  const productsRef = collection(db, 'products')
  const q = idCategory ? query(productsRef,where('category','==',idCategory)) : productsRef
  
  const results = getDocs(q)
                  .then(res => {
                    const products = res.docs.map(doc => {
                      return {id: doc.id, ...doc.data()}
                    })
                    return products
                  })

  return results
}


export default getProducts