import React from 'react'
import { Container} from 'react-bootstrap'
import { Link } from 'react-router'
import "./nav.css"
const NavBar = () => {
  return (
    
     <div className='bg-dark' >
    <div className='container navbar'>
          <div>
          <h1 style={{color:"#fff"}}>Ecommerce</h1>
          </div>
          <nav>
            <ul className='d-flex gap-3 '>
              <li><Link to={"/"}  style={{color: "#fff", paddingLeft: 20, textDecoration: "none"}} >Home</Link></li>
              <li><Link to={"/about"} style={{color: "#fff", paddingLeft: 20, textDecoration: "none"}} >About</Link></li>
              <li><Link to={"/contact"}  style={{color: "#fff", paddingLeft: 20, textDecoration: "none"}} >Contact</Link></li>
              <li><Link to={"/login"} style={{color: "#fff", paddingLeft: 20, textDecoration: "none"}} >Login</Link></li>
            </ul>
          </nav>
        </div>
        </div>
  )
}

export default NavBar