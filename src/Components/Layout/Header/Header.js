import React from "react"
import {Link} from 'react-router-dom'
import './Header.scss'
const Header = () => {
  return (
    <header id="header">
      <div className="overlay-dark">
        <div className="content">
          <h3>Welcome to</h3>
          <h1>Our Restaurant</h1>
          <button className="btn">
            <Link to="/order">Make a RESERVATION</Link>
          </button>
        </div>
      </div>
    </header>
  )
}
export default Header
