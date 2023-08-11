import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'




import './Nav.css'
function Navbar({size},{count}) {
  return (
    <div className="nav1">
    <nav>
    <div>  
       <ul id="n1">
      <li><a href="">Home</a></li>
      <li><a href="">About</a></li>
      <li><a href="">Product</a></li>
    </ul>
    </div>
    <div>
      <button>Cart
        {size}{count}
      </button>
      
    
    </div>
    </nav>
    </div>
  )
}

export default Navbar