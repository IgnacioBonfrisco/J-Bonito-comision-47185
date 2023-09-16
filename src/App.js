import './App.css';
import Navbar from './NavBar/NavBar';
import ItemListContainer from './ListConteiner/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar/> 
      <ItemListContainer greeting  ="Bienvenidos a J-Bonito - Indumentaria Deportiva"/>
    </div>
  );
}

export default App;
