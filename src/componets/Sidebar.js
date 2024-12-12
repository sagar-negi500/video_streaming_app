import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const isOpen=useSelector((store)=>store.app.toggleMenu)

  // console.log(isOpen)
  
  if(!isOpen){
    return null;
  }
  return (
    <div className='shadow-2xl p-14'>
      <ul className='p-4'>
        <li>Home</li>
        <li>Subscrition</li>
        <li>Shorts</li>
       
      </ul>

      <ul className='p-4'>
        <h1 className='font-bold'>Subscrition</h1>
        <li>Home</li>
        <li>Subscrition</li>
        <li>Shorts</li>
       
      </ul>
    </div>
  )
}

export default Sidebar
