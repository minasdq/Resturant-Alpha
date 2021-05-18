import React, { useRef,useEffect,useState } from "react";
import whitelogo from "../../../img/logo-white.png"
import blacklogo from "../../../img/logo-black.png"
import { NavLink, Link ,useHistory} from "react-router-dom"
import "./Navbar.scss"
const Navbar = (e) => {
  const [showNavbar,setShowNavbar]=useState('')
  const barMenuEl = useRef(null)
  const toggleMenuEl = useRef(null)
  const navbarmenuEl = useRef(null)
  const SearchBoxEl = useRef(null)
  const navbarEl = useRef(null)
  const history = useHistory() 
  useEffect(()=>{
    return history.listen((location) => { 
      if(location.pathname==='/'){
        setShowNavbar('')
      }
      else{
        setShowNavbar('active')
      }
   }) 
  },[history])
  const openMenu = () => {
    barMenuEl.current.style.display = "none"
    toggleMenuEl.current.style.display = "block"
    navbarmenuEl.current.classList.add("open")
  }
  const closeMenu = () => {
    barMenuEl.current.style.display = "block"
    toggleMenuEl.current.style.display = "none"
    navbarmenuEl.current.classList.remove("open")
  }
  const showSearchBar=()=>{
    SearchBoxEl.current.classList.add('active') 
  }
  const closeSearchBox=()=>{
    SearchBoxEl.current.classList.remove('active') 
  }
  window.addEventListener('scroll',()=>{
    if (!navbarEl.current && window.location.pathname!=='/'){
      return
    }
    if(window.scrollY>navbarEl.current.offsetHeight){
      setShowNavbar('active')
    }
    else{
      setShowNavbar('')
    }
})
  return (
    <div className={`navbar ${showNavbar}`} id="navbar" ref={navbarEl}>
      <div className="search-box" ref={SearchBoxEl}>
        <div className="container">
          <div className="serch-container">
            <i className="fas fa-search"></i>
            <input type="text" id="text" placeholder="Search" />
          </div>
          <div className="toggle">
            <i className="fas fa-times" onClick={closeSearchBox}></i>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="toggle-menu">
          <i className="fas fa-bars" ref={barMenuEl} onClick={openMenu}></i>
          <i className="fas fa-times" ref={toggleMenuEl} onClick={closeMenu}></i>
        </div>
        <div className="nav-brand">
          <Link to="/" className="white-logo logo">
            <img src={whitelogo} alt="logo" />
          </Link>
          <Link to="#" className="black-logo logo">
            <img src={blacklogo} alt="logo" />
          </Link>
        </div>
        <div className="navbar-nav">
          <div className="nav-menu" ref={navbarmenuEl}>
            <nav>
              <ul>
                <li>
                  <NavLink exact to="/" activeClassName="active">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact
                    activeClassName="ListFoods"
                    to="/ListFoods"
                    id="list-menu1"
                  >
                    Menu
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/order">Order</NavLink>
                </li>
                <li>
                  <NavLink to="#gallery">Gallery</NavLink>
                </li>
                <li>
                  <NavLink exact to="#footer">
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="#footer" id="list-menu2">
                    About
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="shop icon">
            <NavLink to="/order">
              <i className="fas fa-shopping-bag"></i>
            </NavLink>
          </div>
          <div className="search icon" >
            <i onClick={showSearchBar} className="fas fa-search" id="search"></i>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Navbar
