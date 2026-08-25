import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import Card from './Components/Card'
const App = () => {
  const [userData, setUserData] = useState([])
  const [index, setindex] = useState(1)
  const forData = async () => {
  try {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=21`
    )
    setUserData(response.data)
  } catch (error) {
    console.log("API Error:", error)
  }
}
  let printUserData = <h3 className='text-gray-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-xs'>Loading...</h3>
  useEffect(function(){
    forData()
  },[index])
  if(userData.length>0){
    printUserData = userData.map(function(elem,idx){

      return <div key={idx }>
        <Card elem={elem}/>
      </div>
    })
  }
  return (
    <div className=' bg-black h-screen  p-4 text-white overflow-auto' >
      <div className='flex flex-wrap  gap-3'>
        {printUserData}
      </div>
      <div className='flex gap-6 justify-center items-center p-4 '>
        <button onClick={()=>{
          if(index>1){
            setindex(index-1)
            setUserData([])
          }
        }
        } className='bg-amber-400 text-black px-4 font-semibold py-2 active:scale-95 cursor-pointer rounded'>Prev</button>
        <h4 >Page {index}</h4>
        <button onClick={()=>{
          setUserData([])
          setindex(index+1)
        }} className='bg-amber-400 text-black px-4 font-semibold py-2 active:scale-95 cursor-pointer rounded'>Next</button>
      </div>
    </div>
  )
}

export default App
