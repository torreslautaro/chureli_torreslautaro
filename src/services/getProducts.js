import db from "./firebase"
import {collection, query, getDocs, where, orderBy} from 'firebase/firestore'

const getProducts = (idCategory) => {
  const productsRef = collection(db, 'products')
  const q = idCategory ? query(productsRef,where('category','==',idCategory))
            : query(productsRef,where('category','!=','28f5gww'))
  
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