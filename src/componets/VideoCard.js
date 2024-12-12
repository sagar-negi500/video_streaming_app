import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info)
    const {snippet,statistics}=info;
    const {title,thumbnails}=snippet;
  return (
    <div className='shadow-xl mt-4 w-96 p-3'>
    <div>
      <img className='w-80 p-4' src={thumbnails.high.url} alt=''/>
    </div>

    <ul className='p-4'>
      <li>hahkahs</li>
      <li>{title}</li>
      <li>likes {statistics.viewCount}</li>
      
    </ul>
  </div>
  )
}

export default VideoCard
