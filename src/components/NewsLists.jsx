import React from "react";
import SingleNews from "./SingleNews";

const NewsLists = ({ news,loading }) => {
  
  if(loading){
    return <div className="loading-div">Loading...</div>
  }
  
  return (
    <div className="news-lists">
      {news.map((currElem, index) => {
        return <SingleNews currElem={currElem} key={index} />;
      })}
    </div>
  );
};

export default NewsLists;
