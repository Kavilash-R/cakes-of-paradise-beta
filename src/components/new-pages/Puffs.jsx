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
          <h3 className='titlenameveg' >VEG PUFF</h3>
          <h3 className='titleprizeveg' >Prize : 20 INR  </h3>

        </div>
      </div>

      <div className='seperate-img-container'>
        <div className='img2'><img className='whiteforest' src="./images/panner puff1.jpg" alt="cakes" /></div>
        <div className='img-detail2'>
        <h3 className='titlename1' >PANEER PUFF</h3>
          <h3 className='titleprize1' > &nbsp; &nbsp; &nbsp; &nbsp;Prize : 20 INR  </h3>
        </div>
      </div>
      
      <div className='seperate-img-container'>
        <div className='img3'><img className='choco1' src="./images/egg puff 1.jpg" alt="cakes" /></div>
        <div className='img-detail3'>
        <h3 className='titlename2' > &nbsp; &nbsp; &nbsp; EGG PUFF</h3>
          <h3 className='titleprize2' > &nbsp; &nbsp; &nbsp; &nbsp;Prize : 20 INR  </h3>
        </div>
      </div>
       
      <div className='seperate-img-container'>
        <div className='img4'><img className='red-velvet' src="./images/chicken puff 1.jpg" alt="cakes" /></div>
        <div className='img-detail4'>
          <h3 className='titlename3' > CHICKEN PUFF</h3>
          <h3 className='titleprize3' >&nbsp; &nbsp; &nbsp; &nbsp; Prize : 30 INR  </h3></div>
      </div>
      <div className="seperate-img-container">
          <div className="img1">
            <img className="samosa"src="./images/samosa-1.jpeg" alt="cakes" />
          </div>
          <div className="img-detail1">
            <h3 className="titlename-sam">SAMOSA</h3>
            <h3 className="titleprize-sam">One Piece Prize : 18 INR </h3>
          </div>
        </div>
        <img
              className="pani-puri"
              src="./images/pani puri.jpg"
              alt="cakes"
            />
             <h3 className="titlename-pani">PANI PURI</h3>
            <h3 className="titleprize1-pani">Prize : 30 INR </h3>
            
       <div className="seperate-img-container">
          <div className="img-detail2">
           
          </div>
        </div>

       
            <img
              className="bhel-puri"
              src="./images/bhel puri.jpg"
              alt="cakes"
            />
          
          <div className="img-detail3">
            <h3 className="titlename-bhel">BHEL PURI</h3>
            <h3 className="titleprize-bhel">Prize : 40 INR </h3>
          </div>

          <img
              className="dahi-puri"
              src="./images/dahi puri.jpg"
              alt="cakes"
            />
          
          <div className="img-detail3">
            <h3 className="titlename-dahi">DAHI PURI</h3>
            <h3 className="titleprize-dahi">Prize : 45 INR </h3>
          </div>
        
 {/* 
        <div className="seperate-img-container">
          <div className="img4">
            <img
              className="red-velvet"
              src="./images/red velvet cake.jpg"
              alt="cakes"
            />
          </div>
          
          <div className="img-detail4">
            <h3 className="titlename3"> RED VELVET</h3>
            <h3 className="titleprize3">One Piece Prize : 60 INR </h3>
          </div>
        </div> */}
      </div>
     

    
    </>
  )
}

export default Puffs