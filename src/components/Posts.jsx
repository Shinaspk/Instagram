import React from 'react'

import { Avatar, charAt } from '@mui/material'

import usePost from '../usePost'

function Posts() {

    const data = usePost('https://dummyjson.com/products')
    console.log(data);


    return (
        <>
            {data?.length > 0 ?
                data?.map((item) => (
                    <div className='ms-5' >

                        <div className="header d-flex mt-5">




                            <div className='d-flex ' style={{ marginLeft: "10px" }}><Avatar>{item.title.charAt(0).toUpperCase()}</Avatar><h4 className='ms-2'>{item.title.slice(0, 10)} </h4><span></span></div>

                            <div style={{ marginLeft: "230px" }}>
                                <i class="fa-solid fa-ellipsis"></i>

                            </div>


                        </div>
                        <div className='mt-3 d-flex align-items-left justify-content-left flex-column w-100 '>
                            <img style={{ height: "500px", width: "400px" }} src={item.thumbnail} alt="" />

                        </div>


                        <div className="footer mb-5 d-flex   " style={{ marginLeft: "60px" }}>
                            <div ><i class="fa-regular fa-heart"></i></div>
                            <div className='ms-2'> <i class="fa-regular fa-comment"></i></div>
                            <div className='ms-2'>
                                <i class="fa-regular fa-paper-plane"></i>
                            </div>
                        </div>
                    </div>))
                : <p>Loading.......</p>}
        </>
    )
}

export default Posts;