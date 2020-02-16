import React from "react";
import FetchFromAPI from "./fetchFromAPI";

class Search extends React.Component{
   render(){
      return (
      <div>
         <input type="text"/>
         <input type="submit"/>
         <br/>
         <FetchFromAPI />
      </div>
      )
  }
}

export default Search;