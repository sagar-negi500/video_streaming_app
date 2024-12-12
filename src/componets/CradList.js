import React, { useEffect, useState } from 'react'
import { ApiUrl } from '../utils/ApiUrl';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const CradList = () => {

    const [cardItem,setcardItem]=useState([]);

    const getVideos =async()=>{
        const data= await fetch(ApiUrl);
        const json=await data.json();

        //  console.log(json);
         setcardItem(json.items)

    }
    useEffect(()=>{
       getVideos()
    },[])

    // const {title,description,thumbnails}=cardItem.snippet;
    // const {viewCount,likeCount}=cardItem.statistics;
  return (
    cardItem.map((item)=>(
      
        <Link to={"/watch?v="+item.id }key={item.id} >< VideoCard  info={item}/></Link>
     
    ))

//    <VideoCard info={cardItem[0]}/>
//    <div>hello</div>
  )
}

export default CradList
