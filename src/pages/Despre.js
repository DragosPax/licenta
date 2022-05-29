import React from 'react'
import Main from '../assets/despre.jpg'
import '../styles/Despre.css'

function Despre() {
  return (
    <div className='despre'>
        <div className='despre-top' style={{backgroundImage:`url(${Main})`}}></div>
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