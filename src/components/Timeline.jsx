import React from 'react'

function Timeline() {
  return (
    <div>
        <div className="logo mt-5 ">
            <img style={{height:"50px" ,width:"80%",marginLeft:"25px"}} src="https://www.pngkey.com/png/full/28-287308_instagram-logo-text-white.png" alt="" />
        </div >
<div className='d-flex align-items-left justify-content-left flex-column p-5'>
    
            <div className='mt-3' >
            <i class="fa-solid fa-house"></i>
                <span>Home</span>
            </div>
    
            <div className='mt-3' >
            <i class="fa-solid fa-magnifying-glass"></i>
                <span  className='ms-2'>Search</span>
            </div>
            <div className='mt-3' >
            <i  class="fa-brands fa-wpexplorer"></i>
                <span  className='ms-2 '>Explore</span>
            </div>
    
            <div  className='mt-3'>
            <i class="fa-brands fa-instagram"></i>
                <span  className='ms-2 '>Reels</span>
            </div>
            <div  className='mt-3'>
            <i class="fa-solid fa-message"></i>
                <span  className='ms-2'>Messeges</span>
            </div>
    
            <div className='mt-3' >
            <i class="fa-regular fa-heart"></i>
                <span className='ms-2'>Notification</span>
            </div>
    
            <div className='mt-3'>
            <i class="fa-solid fa-house"></i>
                <span  className='ms-2'>create</span>
            </div>
</div>
    </div>
  )
}

export default Timeline