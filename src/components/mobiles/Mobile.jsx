import React from 'react'
import { useState,useEffect } from 'react'
//import axios from "axios"
import { useSelector, useDispatch } from 'react-redux'
import { apiGetData } from '../../redux/mobile/action'




const Mobile = () => {
    const dispatch = useDispatch()
    const {data, loading}= useSelector((store)=>store.data)
    console.log(data)

    useEffect(()=>{
        dispatch(apiGetData())
    }, [dispatch])
  return (
    <>
     {
         data.map((e)=>(
           <div key={e.id}>
             <img src={e.img}  alt="photo" />
             <h1>{e.pattern_name}</h1>
             <p>price:{e.price}</p>
           </div>
         ))
       }
    </>
  )
}

export default Mobile