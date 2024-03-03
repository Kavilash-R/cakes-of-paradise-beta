import React from 'react'
import NavBar1 from './NavBar1'
import './Style.css'
const Puffs = () => {
  return (
    <>
    < NavBar1/>
    <div className='whole-img-container'>
      <div className='seperate-img-container'>
      
        <div className='img1'><img  className='blackforest' src="./images/veg puff1.jpg" alt="cakes" /></div>
        <div className='img-detail1'>
          <h3 className='titlename' >VEG PUFF</h3>
          <h3 className='titleprize' >Prize : 20 INR  </h3>

        </div>
      </div>

      <div className='seperate-img-container'>
        <div className='img2'><img className='whiteforest' src="./images/panner puff1.jpg" alt="cakes" /></div>
        <div className='img-detail2'>
        <h3 className='titlename1' >PANEER PUFF</h3>
          <h3 className='titleprize1' > Prize : 20 INR  </h3>
        </div>
      </div>
      
      <div className='seperate-img-container'>
        <div className='img3'><img className='choco1' src="./images/egg puff 1.jpg" alt="cakes" /></div>
        <div className='img-detail3'>
        <h3 className='titlename2' > EGG PUFF</h3>
          <h3 className='titleprize2' > Prize : 20 INR  </h3>
        </div>
      </div>
       
      <div className='seperate-img-container'>
        <div className='img4'><img className='red-velvet' src="./images/chicken puff 1.jpg" alt="cakes" /></div>
        <div className='img-detail4'>
          <h3 className='titlename3' > CHICKEN PUFF</h3>
          <h3 className='titleprize3' >Prize : 30 INR  </h3></div>
      </div>
      </div>
     

    
    </>
  )
}

export default Puffs