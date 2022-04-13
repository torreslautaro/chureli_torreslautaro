import products from "./mockProducts"

const getProducts = (idCategory) => {
  return new Promise((resolve, reject) => {
    resolve(idCategory ? products.filter(prod => prod.category === idCategory) : products)
  })
}


export default getProducts