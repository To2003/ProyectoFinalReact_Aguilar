import { NavBar } from './Componentes/NavBar/NavBar'
import { ItemListCont } from './Componentes/ItemListCont/ItemListCont';
import { Formulario } from './Componentes/Formulario/Formulario';
import { ItemDetailCont } from './Componentes/ItemDetailCont/ItemDetailCont';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { CartCont } from './Componentes/CartCont/CartCont';
import { CartContextProvider} from './context/CartContext';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  

  return (
  <CartContextProvider>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListCont greeting={"Bienvenidos a Flyrzk"} />} />
        <Route path="/categoria/:categoria" element={<ItemListCont />} />
        <Route path="/detail/:pid" element={<ItemDetailCont />} />
        <Route path="/cart" element={<CartCont />} />
      </Routes>
      <Formulario />
    </Router>
  </CartContextProvider>

    
  )
}

export default App
