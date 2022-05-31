import React, { useState } from 'react'
import '../styles/Categories.css'
import {Link} from 'react-router-dom'
import Hamburger from '../assets/hamburger.svg'

function Categories() {
  
  const [showLinks,setShowLinks] = useState(false)
  function showMenu(){
 
  }

  return (
    <div className='categories-wrapper'>
    <div className='categories' >
         <div className='links' id={showLinks?"hidden":""}>
              <Link to='/pizza' >PIZZA</Link>
              <Link to='/paste' >PASTE</Link>
              <Link to='/burgeri' >BURGERI</Link>
              <Link to='/desert' >DESERT</Link>
              <Link to='/bauturi' >BAUTURI</Link>
          </div>
        <div className='short-nav' onClick={()=>{setShowLinks(!showLinks)}}>
          <h1>Vezi meniul</h1>
          <img src={Hamburger} alt='hamburger' className='hamburger' onClick={showMenu}/>
        </div>

    </div>
    </div>
  )
}

export default Categories