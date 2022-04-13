import products from "./mockProducts"

const getProductsDetails = (idProduct) => {
  return new Promise((resolve, reject) => {
    resolve(products.filter(p => p.id === idProduct))
  })
}

export default getProductsDetails