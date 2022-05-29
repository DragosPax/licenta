import React from 'react'
import '../styles/Categories.css'
import {Link} from 'react-router-dom'
import Hamburger from '../assets/hamburger.svg'

function Categories() {
  return (
    <div className='categories'>
        <Link to='/pizza' className='categories-list'>PIZZA</Link>
        <Link to='/paste' className='categories-list'>PASTE</Link>
        <Link to='/burgeri' className='categories-list'>BURGERI</Link>
        <Link to='/desert' className='categories-list'>DESERT</Link>
        <Link to='/bauturi' className='categories-list'>BAUTURI</Link>
        <div className='short-nav'>
          <h1>Vezi meniul</h1>
        <img src={Hamburger} alt='hamburger' className='hamburger'/>
        </div>
     

    </div>
  )
}

export default Categories