import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './componets/Navbar';
import ItemListContainer from './componets/ItemListContainer';
import ItemDetailContainer from './componets/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes> 
          <Route path="/" element={<ItemListContainer greeting={'Bienvenido a ChureLi'} />} />
          <Route path="details/:idProduct" element={<ItemDetailContainer />} />
          <Route path="categories/:idCategory" element={<ItemListContainer greeting={'Bienvenido a ChureLi'} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
