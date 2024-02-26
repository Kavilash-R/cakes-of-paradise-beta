import React from 'react'
import Content from './Content'
import { Link } from 'react-router-dom';


const Center = () => {
  return (
    <>
    <div className='contain'>
        <div className='smallCont'>
        <h1 className='greet'>Greetings</h1><br />
            <h1>See what we have</h1>
            <Link to="/target">
               <button  id='btn'>Explore </button>
            </Link>
            

        </div>
    </div>




    </>
  )
}

export default Center