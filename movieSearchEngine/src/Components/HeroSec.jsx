import React, { useEffect,useState } from 'react'
import axios from "axios"
function HeroSec() {
    
  useEffect(()=>{
    axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=68e094699525b18a70bab2f86b1fa706&language=hi-IN&region=IN&with_original_language=hi')
    .then((res)=>{
        setData((res?.data?.results).filter((item)=>{
            return(
                item?.original_language === "en"
            )
        }));
        // poster_path  id
        console.log((res?.data?.results).filter((item)=>{
            return(
                item?.original_language === "en"
            )
        }));
        
    })
},[])
var [data,setData] = useState([])
    return (

        <>
            {
                data.map((item)=>{
                    var {backdrop_path,id}=item
                    return(
                    <div
                    key={id}
                    className='h-[450px] mx-[60px] my-5 border-2 border-black  '>
                    <img
                    style={{transform:`translateX(-24%)`}}
                    src={`https://image.tmdb.org/t/p/w200/${backdrop_path}`}
                    className='object-fit h-full'/>
                    </div>
                )
            })
               }
        </>
   
  )
}

export default HeroSec