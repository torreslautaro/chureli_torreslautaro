import { useState,createContext } from "react";

const CartContext = createContext()

export const CartContexProvider = ({children}) => {
  const [cart, setCart] = useState([])

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
  }

  const isInCart = (id) => {
    const resultado = cart.some(prod => prod.id === id)
    return resultado
  }

  const removeItem = (id) => {
    const products = cart.filter(prod => prod.id !== id)
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
      clearCart
      }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext

 