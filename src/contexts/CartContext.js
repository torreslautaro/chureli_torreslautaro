import { useState,createContext } from "react";

const CartContext = createContext()

export const CartContexProvider = ({children}) => {
  const [cart, setCart] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  const getCartQuantity = () => {
    let count = 0
    if (cart.length === 0) return 0
    cart.forEach(prod => {
      count += prod.quantity
    })
    return count
  }

  const addItem = (product) => {
    setCart([...cart,product])
    setTotalPrice(totalPrice + (product.price * product.quantity))
  }

  const isInCart = (id) => {
    const resultado = cart.some(prod => prod.id === id)
    return resultado
  }

  const removeItem = (id) => {
    const products = cart.filter(prod => prod.id !== id)
    const productForPrice = cart.find(prod => prod.id === id)
    setTotalPrice(totalPrice - (productForPrice.price * productForPrice.quantity))
    setCart(products)
    
  }

  const clearCart = () => {
    setCart([])
  }
  

  return(
    <CartContext.Provider value={{
      cart,
      getCartQuantity, 
      addItem,
      isInCart,
      removeItem,
      clearCart,
      totalPrice
      }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext

 