import React,{useState} from 'react'
import poza1 from '../assets/despre1.jpg'
import poza2 from '../assets/despre2.jpg'
import poza3 from '../assets/despre3.jpg'
import '../styles/Despre.css'
import ArrowLeft from '../assets/arrow-left.svg'
import ArrowRight from '../assets/arrow-right.svg'


function Despre() {
  function goLeft(){
    if(poza>0)setPoza(poza-1)
    else (setPoza(2))
  }
  function goRight(){
    if(poza<2)setPoza(poza+1)
    else setPoza(0)
  } 

  const poze=[poza1,poza2,poza3];
  const [poza,setPoza]=useState(0)

  return (
    <div className='despre'>
        <div className='despre-top' style={{backgroundImage:`url(${poze[poza]})`}}>
          <img src={ArrowLeft} className='arrow' alt='arrow' style={{left:'6%',
          borderRadius:'20px 0px 0px 20px'}} onClick={goLeft}/>
          <img src={ArrowRight} className='arrow' alt='arrow' style={{right:'6%',
          borderRadius:'0px 20px 20px 0px'}} onClick={goRight}/>

        </div>
        <div className='despre-bottom'>
            <h1>DESPRE NOI</h1>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Restaurantul nostru este o poveste despre arome și pasiune, despre gustul perfect și arta gătitului,
    despre creativitatea si implicarea unor oameni dedicați care vor să vă împărtășească experiențe desăvârșite.<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aceste file scrise cu drag dar mai ales puse în scenă zi de zi de o echipă de oameni talentați, creativi și
    plini de zâmbete. O energie pozitivă care ne-a motivat și ne-a adus succesul în cei 19 ani de când suntem în
    peisajul ieșean.<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Diversitatea meniului nostru cuprinde o selecție amplă de peste 200 de preparate culinare, atât cele
    tradiționale românești, cât și preparatele din bucătaria internațională: cea italiană, mexicană, spaniolă, 
    franțuzească ...și asiatică. <br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pentru că timpul este ce mai importantă resursă pentru noi toți, te poți bucura în cel mai scurt timp de 
    mâncarea savuroasă chiar la tine acasă, caldă și atent pregatită de chefii noștri, împreună cu cele peste 1500
    de produse din noul nostru Market on-line, pentru că restaurantul nostru îți livrează GRATUIT la orice oră 
    din zi și din noapte. <br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O poveste pe care continuăm să o scriem împreună pentru a rămâne așa cum am promis, un nume apreciat,
    o garanție a bunului gust, recunoscut și de încredere în Iași.<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Incearca noile produse!</p>
        </div>
    </div>
  )
}

export default Despre