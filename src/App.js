import logo from './logo.svg';
import './App.css';
import Navbar from './componets/Navbar';
import ItemListContainer from './componets/ItemListContainer';
import ItemDetailContainer from './componets/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting={'Bienvenido a ChureLi'}/>
      <ItemDetailContainer />
    </div>
  );
}

export default App;
