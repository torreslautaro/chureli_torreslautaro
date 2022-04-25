import db from "./firebase"
import { getDoc, doc } from "firebase/firestore"

const getProductsDetails = (idProduct) => {
 

  const results = getDoc(doc(db,'products',idProduct))
                  .then(res => {
                    const product = {id: res.id, ...res.data()}
                    return product
                  })
  return results
}

export default getProductsDetails