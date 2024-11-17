import { useEffect, useState } from "react"
import axios from "axios"
function Head (){
    
    var [visible,setVisible] = useState(false);
    var [searchValue,setSearchValue] = useState("");
    var [searchSuggestions,setSearchSuggestions] = useState([]);

    const getLocalStorage = ()=>{
        const addLocalStorage = localStorage.getItem("key");
        return addLocalStorage ? JSON.parse(addLocalStorage) : {mainText:"dummy",secondaryText:"dummy"}
    }
    var {mainText,secondaryText}= getLocalStorage()
    var [address,setAddress] = useState({mainText,secondaryText})
    
    useEffect(()=>{
        if(searchValue){
            axios.get(`https://www.swiggy.com/dapi/misc/place-autocomplete?input=${searchValue}&types=`)
            .then((res)=>{
                // console.log(res?.data?.data)
                setSearchSuggestions(res?.data?.data);
            })
        }else{
            setSearchSuggestions([])
        }
    },[searchValue])
    
    const handleChange=(e)=>{
        // console.log(e.target.value);
        setSearchValue(e.target.value)
    }

    const handleAddress = (place_id)=>{
        axios.get(`https://www.swiggy.com/dapi/misc/address-recommend?place_id=${place_id}`)
        .then((res)=>{
          let locality =  res?.data?.data[0]?.address_components.filter((item)=>{
                return(
                    item?.types.join("")==="locality"
                )
            })
            var mainText = locality[0]?.long_name || "other"
            var x = res?.data?.data[0]?.formatted_address;
            var secondaryText = 
            (x.split(",")[0]===mainText)?
            (x.split(",").splice(1).join(",")):
            x
            console.log()

            setAddress({mainText,secondaryText})
            localStorage.setItem("key",JSON.stringify({mainText,secondaryText}))
            

            // localStorage.setItem("address",JSON.stringify(mainText))
        })
    }

    const handleSlider = ()=>{
        // console.log(visible)
        setVisible(prev=>!prev)
        setSearchValue("")
        setSearchSuggestions([])
    }
   
    return(
    <>
    <div className="relative ">

          <div className={" "+(visible?"visible":"invisible")}>

              <div
                onClick={()=>{handleSlider()}}
                className="bg-black/25 h-full w-full fixed">
              </div>

                <div className={"h-full w-[35%] bg-black fixed duration-700 "+(visible ?"left-0":"-left-[100%]")}>
                    <div className="flex justify-center items-center mt-5">
                        <input type="text" value={searchValue} placeholder="enter city or restaurant..."
                        onChange={(e)=>{
                            handleChange(e)
                        }}
                        className="w-[400px] h-[45px] font-bold text-black"
                        ></input>
                    </div>
                    
                    <div className="w-[80%] ml-[40px]">
                        {
                            searchSuggestions.map((item=>{
                                let {place_id,structured_formatting:{main_text,secondary_text}} = item
                             return(
                                <div 
                                    onClick={()=>{
                                        handleAddress(place_id)
                                    }}
                                    className="border-2 border-white px-4 py-1 mb-2 mt-4 cursor-pointer"
                                    key={place_id}>
                                    <p className="text-white font-extrabold">{main_text}</p>
                                    <p className="text-white font-extralight">{secondary_text}</p>
                                </div>
                                )
                            }))
                        }
                    </div>
              </div>
          </div>
      
        <div 
            onClick={()=>{
                handleSlider()
            }}
            className="flex justify-center items-center gap-4 bg-white h-[70px] shadow-xl z-30">
            <img src=""/>
            <span className="font-bold hover:text-orange-500 hover:font-bold underline">{address.mainText}</span>
            <span className="font-semibold text-black/50">{address.secondaryText}</span>
            <i className="fi fi-br-angle-down text-orange-500 font-extrabold mt-2"></i>
        </div>
    </div>
    </>
   )
}

export default Head;