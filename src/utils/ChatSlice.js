import { createSlice } from "@reduxjs/toolkit";

const ChatSlice =createSlice({
    name:'LiveChat',
    initialState:{
        message:[]
    },
    reducers:{
        addChat:(state,action)=>{
        //     if (state.message.length >= 10) {
        //     state.message.pop(); // 
        // }
         state.message.splice(20,1)
            state.message.push(action.payload);
        }
    }
})


export const {addChat} =ChatSlice.actions
export default ChatSlice.reducer