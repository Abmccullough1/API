/*public:e9ad643135fd033699220f64b3b81e6b
  private: f67545ccaf24623b9c40f31abf3cd3fde91a9d53
1f67545ccaf24623b9c40f31abf3cd3fde91a9d53e9ad643135fd033699220f64b3b81e6b
hash:0fd19ed03a2c74ddbe40c5201d33c660
url:  http://gateway.marvel.com/v1/public/comics?ts=1&apikey=e9ad643135fd033699220f64b3b81e6b&hash=0fd19ed03a2c74ddbe40c5201d33c660
*/
import React, { useEffect } from "react";
import card from "./card";
import axios from "axios";
import { useState } from "react";
export const main = () => {
    const [url,setUrl]=useState("http://gateway.marvel.com/v1/public/comics?ts=1&apikey=e9ad643135fd033699220f64b3b81e6b&hash=6111e72d48eb85fa8a112ca310256be7");
    const [item,setItem]=useState();
    useEffect(()=>{
        const fetch=async()=>{
          const res=await axios.get(url)
          setItem(res.data.data.results);
        }
        fetch();
      },[url])
      return(
       <>
       <div className="content">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
       </div>
       </>
      )

     





  }   
