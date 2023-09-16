import './App.css';
import Navbar from './NavBar/NavBar';
import ItemListContainer from './ListConteiner/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting  ='Bienvenidos a J-Bonito - Indumentaria Deportiva'/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
