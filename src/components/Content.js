
import './Content.css'
import React ,{ useEffect, useRef } from 'react';

const Content = () => {
  const targetRef = useRef(null);
  useEffect(() => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <>
    <div className='MainArea'>
        <div ref={targetRef} className='Searchbar'>
            <input id='search-bar' type="text"  placeholder='Search'/>
        </div>
       

        
        <div id='Main-Area1' className='OverAllArea'>
            <div className='CakeArea'></div>
            <div className='PuffArea'></div>
            <div className='OtherArea'></div>
        </div>
        <div className='Popular-Image'>
          <marquee behavior="scroll" direction="right" scrollamount="5">
          <div className='Image-Scroll'></div>
          <div className='Image-Scroll'></div>
          <div className='Image-Scroll'></div>
          <div className='Image-Scroll'></div>
          <div className='Image-Scroll'></div>
          <div className='Image-Scroll'></div>
          </marquee>
        </div>
    </div>

    </>
    
  )
}

export default Content