import React from 'react'
import NavBar1 from './NavBar1'
import './AboutStyle.css'
import { Link } from 'react-router-dom'

const About = () => {
  
  return (
    <> 
    <div className='aboutnav'> <Link to='/' ><h1 className='h1aboutnav' > CAKES OF PARADISE</h1></Link></div>
    <h1 className='h1about' >ABOUT US : <br /><hr /></h1>
    <br />
    <br />
    <br />
    <h2 >Fresh and Delicious:</h2><br />
    <h3>At Cakes of Paradise, we take pride in making everything fresh, from our breads and cakes to buns, chat items, 
      cookies, and many more delectable treats. Our commitment to freshness ensures that every bite is a delightful experience for our customers.</h3><br />
    <h2 >Established Excellence:</h2><br />
    <h3>With a track record of success, we have been proudly serving our community for more than 1 year. During this time, we have earned a reputation for quality and taste, becoming a beloved destination for those seeking delicious baked goods.</h3><br />
    <h2 >Unwavering Dedication:</h2><br />
    <h3>Our bakery is open every day from 8 am to 9 pm, showcasing our dedication to providing our customers with freshly baked goods throughout the day. Whether you visit us in the morning for a fresh loaf of bread or stop by in the evening for a sweet treat, we are here to serve you with the same level of care and quality.</h3><br />
    <h2 > CUSTOMIZED CAKES :</h2><br />
    <h3>At our bakery, we specialize in creating customized cakes that are perfect for any occasion. Whether you're celebrating a birthday, anniversary, wedding, or any other special event, we have the expertise to design a cake that fits your vision and tastes. Our talented bakers and decorators work closely with each customer to create a unique and memorable cake that is sure to impress. From elegant wedding cakes to fun and festive birthday cakes, we take pride in creating beautiful and delicious cakes that are made with the finest ingredients. Let us help you make your next celebration truly special with a custom cake from our bakery.</h3><br />
    </>
  )
}

export default About