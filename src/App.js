import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Nosotros } from './components/Nosotros/nosotros';
import { Reglamentos } from './components/Reglamentos/reglamentos';
import { Noticias } from './components/Noticias/Noticias';
import './Styles/styles.scss';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Torneos } from './components/Torneos/torneos';
import { Internacional } from './components/Internacional/internacional';
import { Shop } from './components/Shop/shop';
import { ItemDetailContainer } from './components/Shop/itemDetailContainer';
import { CartProvider } from './components/Shop/CartContext';
import { Cart } from './components/Shop/Cart';




function App() {

  return (
    <CartProvider>
      <BrowserRouter>

        <Header />

        <Routes>
          <Route path='/' element={<Noticias />}></Route>
          <Route path='/nosotros' element={<Nosotros />}></Route>
          <Route path='/reglamentos' element={<Reglamentos />}></Route>
          <Route path='/torneos' element={<Torneos />}></Route>
          <Route path='/internacional' element={<Internacional />}></Route>
          <Route path='/shop' element={<Shop />}></Route>
          <Route path='/shop/:catId' element={<Shop />}></Route>
          <Route path='/detail/:itemId' element={<ItemDetailContainer />}></Route>
          <Route path='*' element={<Navigate to={'/'} />}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
        </Routes>

        <Footer />


      </BrowserRouter>

    </CartProvider>
  )
}

export default App;
