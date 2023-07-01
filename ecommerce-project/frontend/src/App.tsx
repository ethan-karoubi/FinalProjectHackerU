import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import HomePage from "./components/Home2";
import Register from "./components/Register";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import ShopPage from "./components/Shop";
import CartPage from "./components/cart";
import AboutUsPage from "./components/aboutUs";

function App() {
  let [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    sessionStorage.getItem("isLoggedIn") == "true" ? true : false
  );
  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/home" element={<HomePage />} />
          <Route
            path="/register"
            element={<Register setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
