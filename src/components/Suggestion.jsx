import React from 'react'
import { Avatar, charAt } from '@mui/material'

import usePost from '../usePost'

function Suggestion() {
  
  const data = usePost('https://dummyjson.com/products')
  console.log(data);
  return (
    
<div style={{marginTop:"60px"}}>
<h3>Suggestions for you</h3>
      <div className='mt-3'>
  {data?.length > 0 ?
                  data?.map((item) => (
                      
  
                          
  
  
                             
  
                                  <div className='d-flex mb-3 ' style={{marginLeft:"110px"}}><Avatar>{item.title.charAt(0).toUpperCase()}</Avatar><h6 className='ms-2 '>{item.title.slice(0, 10)} </h6><span></span></div>)):<p>loading.....</p>}
</div>

    </div>
  )
}

export default Suggestion