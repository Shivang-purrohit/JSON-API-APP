import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <header>
           <h1>JODHPUR PRINTS</h1>
           
           <nav>
            <ul>
                <li><Link to="/">Home</Link><i className="fa-solid fa-house"></i></li>
               <li><Link to="/">Categories</Link> <i className="fa-solid fa-list"></i></li>
                <li><Link to="/adddetails">MyAccount</Link><i className="fa-solid fa-star"></i></li>
                <li><Link to="/">Support</Link><i className="fa-solid fa-download"></i></li>
            </ul>
        </nav> 
        </header>
    </div>
  )
}

export default Navbar
