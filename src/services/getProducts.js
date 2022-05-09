import db from "./firebase"
import {collection, query, getDocs, where, startAt, endAt, orderBy} from 'firebase/firestore'

const getProducts = (idCategory, search) => {
  const productsRef = collection(db, 'products')
  const q = idCategory ? query(productsRef,where('category','==',idCategory))
            : productsRef
  
  const results = getDocs(q)
                  .then(res => {
                    const products = res.docs.map(doc => {
                      return {id: doc.id, ...doc.data()}
                    })
                    return search ? products.filter(prod => prod.title.toLowerCase().includes(search.toLowerCase())) : products
                  })

  return results
}


export default getProducts