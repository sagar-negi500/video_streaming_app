import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../utils/ChatSlice";
import { RandomName } from "../utils/Helper";

const LiveChat = () => {
   const dispatch=useDispatch()
   const [InputText,setInputText]=useState();

   const ChatMessage=useSelector((store)=>store.chat.message);

  useEffect(() => {
    const interval =setInterval(() => {
     

      dispatch(addChat({
        name:RandomName(),
        text:'hii how are you🙏'
      }))
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
   
      <div className="border-2  w-[24vw] h-[540px]  overflow-y-scroll flex flex-col-reverse">
        
      {/* <div className="shadow-2xl p-4">Live Chats</div> */}
        <div className="p-3">
         
          
{ChatMessage.map((chat, index) => (
          <div key={index} className="flex gap-3 p-1  items-center">
            <CgProfile /> {chat.name} {chat.text}
          </div>
        ))}

<form onSubmit={(e)=>{
  e.preventDefault();

  dispatch(addChat({
    name:'rashull',
    text:InputText
  }))
  setInputText('')

}}>
<div className="p-4 flex gap-4"> <input value={InputText} onChange={(e)=>setInputText(e.target.value)} className="border-[black] border-2 pl-2"></input>

<button className=" p-2 pl-2 bg-blue-300 rounded-lg">submit</button>
</div>
</form>
        
        </div>

      
      </div>
      
    </>
  );
};

export default LiveChat;
