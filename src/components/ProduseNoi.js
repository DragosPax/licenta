import React from 'react'
import '../styles/ProduseNoi.css'
import Burger from '../assets/1p.jpg'
import Creveti from '../assets/2p.jpg'
import Pui from '../assets/3p.jpg'
import Paste from '../assets/4p.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
 

function ProduseNoi() {


  return (
    <div className='produse-wrapper'>
        <h2>Incearca noile produse</h2>
        <div className='produse-container'>
        
            <img src={Burger} alt='burger'/>
            <img src={Creveti} alt='creveti'/>
            <img src={Pui} alt='pui'/>
            <img src={Paste} alt='Paste' className='hide-p'/>
            
        </div>

    </div>
  )
}

export default ProduseNoi