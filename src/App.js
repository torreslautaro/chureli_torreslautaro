import logo from './logo.svg';
import './App.css';
import Navbar from './componets/Navbar';
import ItemListContainer from './componets/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting={'Bienvenido a ChureLi'}/>
    </div>
  );
}

export default App;
