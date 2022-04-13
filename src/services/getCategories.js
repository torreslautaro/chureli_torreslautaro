import categories from './mockCategories'

const getCategories = () => {
  return new Promise((resolve, reject) => {
    resolve(categories)
  })
}

export default getCategories