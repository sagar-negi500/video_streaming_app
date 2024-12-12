import React from 'react'
import ButtonList from './ButtonList'
import CradList from './CradList'

const MainContainer = () => {
  return (
    <div className='p-4'>
      <ButtonList/>
      <div className='flex flex-wrap'>
      <CradList/>
      </div>
     
    </div>
  )
}

export default MainContainer
