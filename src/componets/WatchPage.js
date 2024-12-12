import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { watch } from "../utils/ToggleApp";
import { useParams, useSearchParams } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import LiveChat from "./LiveChat";

  const CoomentsData =[
    {
      name:"sagar",
      text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi ",
      replies:[{
        name:"sagar",
        text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi ",
        replies:[
          {
            name:"sagar",
            text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi ",
            replies:[
              {
                name:"sagar",
                text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi ",
                replies:[]
              },
            ]
          },
        ]
      },]
    },
    {
      name:"sagar",
      text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi ",
      replies:[
        {
          name:"sagar",
          text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi ",
          replies:[]
        },
      ]
    },
    {
      name:"sagar",
      text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi ",
      replies:[
        
      ]
    },
    {
      name:"sagar",
      text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi ",
      replies:[
        {
          name:"sagar",
          text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi ",
          replies:[{
            name:"sagar",
            text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi ",
            replies:[{
              name:"sagar",
              text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi ",
              replies:[{
                name:"sagar",
                text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi ",
                replies:[{
                  name:"sagar",
                  text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi ",
                  replies:[]
                },]
              },]
            },]
          },]
        },
      ]
    }
  ]

const CommentsList =({comments})=>{
  // console.log('co',comments)
  return(
   <>
    {comments.map((commentt ,index)=>(
       
     
      <div key={index} className="">
        {/* {        console.log('replies',commentt.replies)} */}
         <Comments data={commentt}/>
         <div className="border-l-2 mt-2 pl-5">
          <CommentsList comments={commentt.replies}/>
         </div>
      </div>
   
     
))}
   </>
  )

}


const Comments =({data})=>{
  // console.log("comments", data)
  const {name,text} =data
  return (
    <>
   <div className="bg-slate-200 p-4 mb-4" >
   <div className="flex gap-2 items-center">
    <CgProfile/>
      {name}
      
    </div>
    <div>
      {text}
      
    </div>
   </div>

    </>
  )



}

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(watch());



  });
  return (

    <>
    <div className="flex flex-col p-10">
     <div className=" flex gap-5">
    <div className="">
    <iframe
     className="w-[70vw] h-[540px]"
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/"+searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>

      <LiveChat/>
     
     </div>

      <div className="text-bold text-2xl p-4" >
        Comments
        <CommentsList comments={CoomentsData}/>
        {/* <Comments data={CoomentsData[0]} /> */}
      </div>
    </div>
    </>
  );
};

export default WatchPage;
