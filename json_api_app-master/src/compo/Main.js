import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Main.css'
import Card from './Card'


const Main = () => {
    const [show, setShow] = useState([])

    useEffect(() => {
      axios.get("http://localhost:3030/products")
      .then((res)=> {console.log(res.data); 
        setShow(res.data)
     
      })
     
    },[])




  return (
    <div>
    

       <div className="movies">
       {
        show.map((item)=>{
            return <div>
            {/* {item.name}

            <img src={item.image} alt='hello'/> */}
            <Card image={item.image} name={item.name} material={item.Material} price={item.price}/>
            </div>
            
})
      }

       </div>
        
    </div>
  )
}

export default Main
