import React from 'react'
import NavBar1 from './NavBar1'
import './Style.css'
const Others = () => {
  return (
    <>
    < NavBar1/>
    <div className='whole-img-container'>
      <div className='seperate-img-container'>
      
        <div className='img1'><img  className='blackforest' src="./images/blackforest.jpg" alt="cakes" /></div>
        <div className='img-detail1'>
          <h3 className='titlename' >BLACKFOREST</h3>
          <h3 className='titleprize' >One Piece Prize : 45 INR  </h3>

        </div>
      </div>

      <div className='seperate-img-container'>
        <div className='img2'><img className='whiteforest' src="./images/white-forest-cake.jpg" alt="cakes" /></div>
        <div className='img-detail2'>
        <h3 className='titlename1' >WHITEFOREST</h3>
          <h3 className='titleprize1' >One Piece Prize : 50 INR  </h3>
        </div>
      </div>
      
      <div className='seperate-img-container'>
        <div className='img3'><img className='choco1' src="./images/choco turffle.jpeg" alt="cakes" /></div>
        <div className='img-detail3'>
        <h3 className='titlename2' > CHOCO TRUFFLE</h3>
          <h3 className='titleprize2' >One Piece Prize : 60 INR  </h3>
        </div>
      </div>
       
      <div className='seperate-img-container'>
        <div className='img4'><img className='red-velvet' src="./images/red velvet cake.jpg" alt="cakes" /></div>
        <div className='img-detail4'>
          <h3 className='titlename3' > RED VELVET</h3>
          <h3 className='titleprize3' >One Piece Prize : 60 INR  </h3></div>
      </div>
      </div>

     

    
    
    </>
  )
}

export default Others