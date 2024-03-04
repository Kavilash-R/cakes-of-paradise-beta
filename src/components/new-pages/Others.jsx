import React from 'react'
import NavBar1 from './NavBar1'
import './Style.css'
const Others = () => {
  return (
    <>
    < NavBar1/>
    <div className='whole-img-container'>
      <div className='seperate-img-container'>
      
        <div className='img1'><img  className='blackforest' src="./images/buttersalt cookies.jpeg" alt="cakes" /></div>
        <div className='img-detail1'>
          <h3 className='titlename' >ButterSalt  Biscuits</h3>
          <h3 className='titleprize' > &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Prize : 50 INR  </h3>

        </div>
      </div>

      <div className='seperate-img-container'>
        <div className='img2'><img className='whiteforest' src="./images/ragi-cookies.jpg" alt="cakes" /></div>
        <div className='img-detail2'>
        <h3 className='titlename1' > &nbsp; Ragi Biscuits</h3>
          <h3 className='titleprize1' > &nbsp; &nbsp; &nbsp; &nbsp; Prize : 50 INR  </h3>
        </div>
      </div>
      
      <div className='seperate-img-container'>
        <div className='img3'><img className='choco1' src="./images/coconut cookies.jpg" alt="cakes" /></div>
        <div className='img-detail3'>
        <h3 className='titlename2' > &nbsp; &nbsp;Coconut Biscuits</h3>
          <h3 className='titleprize2' >&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;Prize : 60 INR  </h3>
        </div>
      </div>
       
      <div className='seperate-img-container'>
        <div className='img4'><img className='red-velvet' src="./images/chocochip cookies.jpeg" alt="cakes" /></div>
        <div className='img-detail4'>
          <h3 className='titlename3' > ChocoChip Biscuits</h3>
          <h3 className='titleprize3' >&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;Prize : 60 INR  </h3></div>
      </div>
      </div>
      <div className="seperate-img-container">
          <div className="img1">
            <img className="samosa"src="./images/plain bun.jpg" alt="cakes" />
          </div>
          <div className="img-detail1">
            <h3 className="titlename-sam">Plain Bun</h3>
            <h3 className="titleprize-sam">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prize : 12 INR </h3>
          </div>
        </div>
        <img
              className="pani-puri"
              src="./images/custard bun.jpg"
              alt="cakes"
            />
             <h3 className="titlename-pani">Custard Bun</h3>
            <h3 className="titleprize1-pani">Prize : 20 INR </h3>
            
       <div className="seperate-img-container">
          <div className="img-detail2">
           
          </div>
        </div>

       
            <img
              className="bhel-puri"
              src="./images/wheat bread.jpg"
              alt="cakes"
            />
          
          <div className="img-detail3">
            <h3 className="titlename-bhel">Wheat Bread</h3>
            <h3 className="titleprize-bhel">Prize : 30 INR </h3>
          </div>

          <img
              className="dahi-puri"
              src="./images/garlic bread.webp"
              alt="cakes"
            />
          
          <div className="img-detail3">
            <h3 className="titlename-dahi">Garlic Bread</h3>
            <h3 className="titleprize-dahi"> &nbsp;Prize : 45 INR </h3>
          </div>
        

     

    
    
    </>
  )
}

export default Others