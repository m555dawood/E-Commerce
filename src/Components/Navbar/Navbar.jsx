import React, { useState } from 'react'
import { Link } from 'react-router-dom'  // Import Link from react-router-dom
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>Shopper</p>
      </div>

      <ul className="nav-menu">
        <li className={menu === "shop" ? "active" : ""} onClick={() => setMenu("shop")}>
          <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>
        </li>
        <li className={menu === "mens" ? "active" : ""} onClick={() => setMenu("mens")}>
          <Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link>
        </li>
        <li className={menu === "women" ? "active" : ""} onClick={() => setMenu("women")}>
          <Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link>
        </li>
        <li className={menu === "kids" ? "active" : ""} onClick={() => setMenu("kids")}>
          <Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>
        </li>
      </ul>


      <div className="nav-login-cart">
        <Link to='/login'><button className="login-btn">Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="Cart" /></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar;
