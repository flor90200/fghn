
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/Navbar/ItemListContainer/ItemListContainer';
import ItemCount from './components/Navbar/ItemCount/ItemCount';
function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting={'Bienvenidos'}/>
      <ItemCount initial ={1} stock={10} onAdd ={(quantity) => console.log('Cantidad agregada', quantity)}/>
     </div>
  );
}

export default App;
