import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
        <Link to='/' className="home">Home</Link>
        <Link to='product' className="products">Products</Link>
        <Link to='accout' className="accout">Account</Link>
    </header>
  )
}

export default Header
