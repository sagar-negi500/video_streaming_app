import React from 'react'
import Sidebar from './Sidebar'

import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Body = () => {
  // const isOpen=useSelectortor((store)=>store.app.toggleMenu);  
  
  return (
    <div className='flex'>
      <Sidebar/>
    <div><Outlet/></div>
    </div>
  )
}

export default Body;
