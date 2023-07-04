import React from 'react'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import MainPage from './pages/mainPage/MainPage'
import AboutPage from './pages/aboutPage/AboutPage'
import ContactPage from './pages/contactPage/ContactPage'
import ShopPage from './pages/shopPage/ShopPage'
import DonatePage from './pages/donatePage/DonatePage'
import { Routes, Route } from 'react-router-dom';
import ItemDetailsPage from './pages/itemDetailsPage/ItemDetailsPage'
import NavbarTest from './components/navbartest/NavbarTest'
import CategoryPage from './pages/categoryPage/CategoryPage'
import CovidResponse from './pages/covidresponse/CovidResponse'
import CartPage from './pages/cartPage/CartPage'

function App() {
  return (
    <div className="App">
      <NavbarTest />
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/donations" element={<DonatePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/covid-response" element={<CovidResponse />} />
        <Route path="/product/:itemId" element={<ItemDetailsPage />} />
        <Route path="/category/:itemsCategory" element={<CategoryPage />} />
      </Routes>
      <Footer />

      <NavbarTest />
    </div>
  );
}

export default App;
