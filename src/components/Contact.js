import React from 'react'
import './Contact.css'

const Contact = () =>{
  return (
    <>
    <div className='Contact-cont' id='Contact-info'>
        <div className='Contact-elem'>
            <h2 className='myh2'>CONTACT</h2>
            <br /><hr />
            <div className='Con-Cat'>
                <p className='myp1'>Email :</p>
                <a className='mya1'  type='email' href="cakes.of.paradise96@gmail.com"> cakes.of.paradise96@gmail.com</a><br />
               
            </div>
            <div className='myp3'> <br /><p className='myp2'>To Contact us Call : +91 8610075003</p></div>

        </div>
    </div>

    </>
  )
}

export default Contact