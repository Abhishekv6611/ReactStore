import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import View from './pages/View'
import Footer from './components/Foots'
import './App.css' 
import Pnf from './pages/Pnf'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/whishlist" element={<Wishlist />} />
        <Route path="/:id/view" element={<View />} />
        <Route path="/" element={<Pnf />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
