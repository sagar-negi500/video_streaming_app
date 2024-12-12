import { configureStore } from "@reduxjs/toolkit";
import ToggleAppReducer  from "./ToggleApp";
import SearchSlice  from "./SearchSlice";
import ChatSlice from "./ChatSlice";



const AppStore= configureStore({
   reducer:{
    app:ToggleAppReducer,
    Search:SearchSlice,
    chat: ChatSlice,
   }
});

export default AppStore;