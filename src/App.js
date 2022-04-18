import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './componets/Navbar';
import ItemListContainer from './componets/ItemListContainer';
import ItemDetailContainer from './componets/ItemDetailContainer';
import Cart from './componets/Cart';
import { CartContexProvider } from "./contexts/CartContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartContexProvider>
        <Navbar />
        <Routes> 
            <Route path="/" element={<ItemListContainer greeting={'Bienvenido a ChureLi'} />} />
            <Route path="details/:idProduct" element={<ItemDetailContainer />} />
            <Route path="categories/:idCategory" element={<ItemListContainer greeting={'Bienvenido a ChureLi'} />} />
            <Route path="cart" element={<Cart/>} />
        </Routes>
      </CartContexProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
