import React from 'react'
import './Content.css'

const Content = () => {
  return (
    <>
    <div className='MainArea'>
        <div className='Searchbar'>
            <input id='search-bar' type="text"  placeholder='Search'/>
        </div>
        
        <div className='OverAllArea'>
            <div className='CakeArea'></div>
            <div className='PuffArea'></div>
            <div className='OtherArea'></div>
        </div>
    </div>

    </>
    
  )
}

export default Content