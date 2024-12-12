import { createSlice } from "@reduxjs/toolkit";

const SearchSlice= createSlice({
    name:'Search',
    initialState:{},
    reducers:{

        // {"ip":["iphone,iphone11","iphone12"]}
          addCache:(state,action)=>{
              state= Object.assign(state, action.payload);
          }  
    }
})

export const {addCache}=SearchSlice.actions;
export default SearchSlice.reducer;

