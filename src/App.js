import './App.css';
import Navbar from './NavBar/NavBar';
import ItemListContainer from './ListConteiner/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Camisetas from './Components/Camisetas';
import Championes from './Components/Championes';
import Canilleras from './Components/Canilleras';
import Medias from './Components/Medias';
import Error from './Components/Error';
import CartWidget from './NavBar/CartWidget';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting  ='Bienvenidos a J-Bonito - Indumentaria Deportiva'/>}/>
        <Route path='/camisetas' element={<Camisetas/>}/>
        <Route path='/championes' element={<Championes/>}/>
        <Route path='/canilleras' element={<Canilleras/>}/>
        <Route path='/medias' element={<Medias/>}/>
        <Route path='/cartWidget' element={<CartWidget/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
