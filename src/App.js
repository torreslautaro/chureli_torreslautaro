import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './componets/Navbar';
import ItemListContainer from './componets/ItemListContainer';
import ItemDetailContainer from './componets/ItemDetailContainer';
import Cart from './componets/Cart';
import { CartContexProvider } from "./contexts/CartContext";
import BuyOrder from "./componets/BuyOrder";

function App() {
  return (
    <div className="md:flex md:flex-col justify-center ">
      <BrowserRouter>
      <CartContexProvider>
        <Navbar />
        <Routes> 
            <Route path="/" element={<ItemListContainer greeting={'Bienvenido a ChureLi'} />} />
            <Route path="/:search" element={<ItemListContainer greeting={'Bienvenido a ChureLi'} />} />
            <Route path="details/:idProduct" element={<ItemDetailContainer />} />
            <Route path="categories/:idCategory" element={<ItemListContainer greeting={'Bienvenido a ChureLi'} />} />
            <Route path="cart" element={<Cart/>} />
            <Route path="buyorder" element={<BuyOrder/>} />
        </Routes>
      </CartContexProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
