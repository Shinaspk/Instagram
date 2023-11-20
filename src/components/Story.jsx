import React from 'react'
import { Avatar } from '@mui/material'
import usePost from '../usePost'
import './story.css'
function Story() {
    const data = usePost('https://dummyjson.com/products')
    console.log(data);
    
  return (
   <>
   
        <div className='d-flex  story' >
        <div><Avatar style={{height:"100px" ,width:"100px", marginLeft:"90px", marginTop:"20px"}}><span 
> + Add your Story</span></Avatar></div>
            {data?.length > 0 ?
            <div className='d-flex mb-3 mt-3' style={{marginLeft:"130px"}}>
              
              
              <div>
                
                <Avatar  style={{height:"100px" ,width:"100px", marginRight:"20px"}}><img style={{height:"100%", width:"100%"}}  src={data?.[Math.floor(Math.random()*data?.length)].thumbnail} alt="" /></Avatar>
              
              </div>
            
            
            <Avatar style={{height:"100px" ,width:"100px", marginRight:"20px"}}><img style={{height:"100%", width:"100%"}}  src={data?.[Math.floor(Math.random()*data?.length)].thumbnail} alt="" /></Avatar>

            <Avatar style={{height:"100px" ,width:"100px", marginRight:"20px"}}><img style={{height:"100%", width:"100%"}}  src={data?.[Math.floor(Math.random()*data?.length)].thumbnail} alt="" /></Avatar>

            <Avatar style={{height:"100px" ,width:"100px", marginRight:"20px"}}><img style={{height:"100%", width:"100%"}}  src={data?.[Math.floor(Math.random()*data?.length)].thumbnail} alt="" /></Avatar>

            <Avatar style={{height:"100px" ,width:"100px", marginRight:"20px"}}><img style={{height:"100%", width:"100%"}}  src={data?.[Math.floor(Math.random()*data?.length)].thumbnail} alt="" /></Avatar>

            <Avatar style={{height:"100px" ,width:"100px", marginRight:"20px"}}><img style={{height:"100%", width:"100%"}}  src={data?.[Math.floor(Math.random()*data?.length)].thumbnail} alt="" /></Avatar>

            <Avatar style={{height:"100px" ,width:"100px", marginRight:"20px"}}><img style={{height:"100%", width:"100%"}}  src={data?.[Math.floor(Math.random()*data?.length)].thumbnail} alt="" /></Avatar>

            <Avatar style={{height:"100px" ,width:"100px", marginRight:"20px"}}><img style={{height:"100%", width:"100%"}}  src={data?.[Math.floor(Math.random()*data?.length)].thumbnail} alt="" /></Avatar>

            <Avatar style={{height:"100px" ,width:"100px"}}><img style={{height:"100%", width:"100%"}}  src={data?.[Math.floor(Math.random()*data?.length)].thumbnail} alt="" /></Avatar>
            </div>
            

            
          
            
          
            
                    : <p>Loading......</p>}
                    
        </div>
   </>
  )
}

export default Story