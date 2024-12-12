import { createSlice } from "@reduxjs/toolkit";

const ToggleApp=createSlice({
    name:"app",
    initialState:{
        toggleMenu:true,
    },
    reducers:{
        toggle:(state)=>{
            state.toggleMenu=!state.toggleMenu;
        },
        watch:(state)=>{
                state.toggleMenu=false;
        }
    }
});
  
export const {toggle,watch}=ToggleApp.actions;

export default ToggleApp.reducer;