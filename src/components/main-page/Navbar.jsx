import React from 'react'
import './Contact'
import Contact from './Contact'
import { Link } from 'react-router-dom'



const Navbar = () => {
 
  return (
    <>
    <div id="nav-bar">
     
      <h1><a  id='cake'href="#nav-bar">CAKES OF PARADISE</a></h1>
       
    
        <div className='nav-element'>
            <Link to="/about"  className='myA' > ABOUT US </Link>
            <a className='myA' href='#Contact-info'> CONTACT</a>
        </div>
    </div>


    </>
  )
}

export default Navbar