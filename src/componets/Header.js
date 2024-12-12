import React, { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../utils/ToggleApp";
import { YOUTUBE_SUGGESTION_API } from "../utils/ApiUrl";
import { addCache } from "../utils/SearchSlice";
// import { useEffect } from 'react';


const Header = () => {
  const dispatch = useDispatch();
  const [Search, setSearch] = useState("");
  const [Suggestion, setSuggestion] = useState([]);
  const [Showsuggestion, setShowSuggestion] = useState("false");
  console.log(Search);

  const SearchCache=useSelector((store)=>store.Search)

  useEffect(() => {
    const Timer = setTimeout(() =>{
      if(SearchCache[Search]){
        setSuggestion(SearchCache[Search]);
      }else{
        getSuggestion()
      }
     } , 200);

    return () => {
      clearTimeout(Timer);
    };
  }, [Search]);

  const getSuggestion = async () => {
    const data = await fetch(YOUTUBE_SUGGESTION_API + Search);
    const json = await data.json();
    console.log(json[1]);
    setSuggestion(json[1]);
    dispatch(addCache({
     [Search]:json[1],
    }))
  };
  const toggleMenu = () => {
    dispatch(toggle());
  };
  return (
    <div className="flex  items-center justify-between px-6 py-4 shadow-xl">
      <div className="flex items-center gap-4">
        <CiMenuBurger className="cursor-pointer" onClick={() => toggleMenu()} />
        <div>
          <img
            className="w-40"
            alt=""
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGJrpSqrv7Va8wkAJCoRTsHWDJyXJEe_ypDw&s"
          />
        </div>
      </div>

      <div>
        <div className="flex items-center">
          <input
            value={Search}
            onChange={(e) => setSearch(e.target.value)}
            className="border-2 w-80 rounded-l-full"
            type="text"
            onFocus={()=>setShowSuggestion(true)}
            onBlur={()=>setShowSuggestion(false)}
          />
          <CiSearch className=" text-2xl border-2  p=8 rounded-r-full" />
        </div>
        {Showsuggestion && (
          <div className="fixed shadow-2xl bg-white w-[20%] p-4">
            <ul>
              {Suggestion.map((item, index) => (
                <li key={index}>🔎 {item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div>
        <CgProfile className="text-2xl " />
      </div>
    </div>
  );
};

export default Header;
