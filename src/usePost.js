import { useEffect, useState } from "react"


const usePost=(url)=>{
    
const[post,SetPost]=useState(null)
    useEffect(()=>{
        fetch(url).then(res=>{res.json().then(result=>{
SetPost(result.products)
console.log(result.products);
        })})

    },[])
    return post
}
export default usePost