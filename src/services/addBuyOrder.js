import db from "./firebase"
import { addDoc, collection,doc, runTransaction } from "firebase/firestore"
import { async } from "@firebase/util"


const verifyStockTransaction = (id, quantity) => {
  const docRef = doc(db,'products',id)
  const getStock = async () => {
    let stockPrueba
    await  runTransaction(db, async (transaction) => {
    const docu = await transaction.get(docRef)
    
    const stock = await docu.data().stock
    stockPrueba = stock >= quantity ? stock : null
  })
  return stockPrueba
  } 
  
  return getStock().then(res => res)
}

const updateStockTransaction = async (id, quantity,stock) => {
  const docRef = doc(db,'products',id)
  await  runTransaction(db, async (transaction) => {
    transaction.update(docRef,{
    stock: stock - quantity
    })
  })
}
const addBuyOrder = async (data) => {
  const ordersRef = collection(db,'buyorders')
  let id = ''
  const verifyStock = () => { 
    let productsWithStock = []
    let productsWithoutStock = []
    const results = data.items.map(async item => {
      const haveStock = await verifyStockTransaction(item.id, item.quantity).then(res => res)
      const product = {...item, stock : haveStock}
      
      if (haveStock !== null) {
        productsWithStock.push(product)  
      } else {
        productsWithoutStock.push(product)
      }
      return {productsWithStock, productsWithoutStock}
    })
    return results
  }
  const resultsAddBuyOrder = verifyStock()[0].then( async res => {
    if(res.productsWithoutStock.length > 0) {
      return {
        status : 500,
        productsWithoutStock: res.productsWithoutStock,
        message : 'La compra no se pudo realizar. Los siguientes productos se encuentran sin stock:'
      }
    } else {
      if(res.productsWithStock.length > 0) {
        await addDoc(ordersRef,data)
          .then(res => id = res.id)
        await res.productsWithStock.forEach(async prod => {
          await updateStockTransaction(prod.id, prod.quantity, prod.stock)
        }) 
        return {
          status : 200,
          productsWithoutStock: [],
          message : `La compra se realizo con exito! El codigo de orden es : ${id}`
        }
      }
    }
  })
  return resultsAddBuyOrder
}


export default addBuyOrder

