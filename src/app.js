import React from "react";
import Search from "./Components/search";
import Welcome from "./Components/welcome";
import SvgHandler from "./Components/svgHandler";
import FetchFromAPI from "./Components/fetchFromAPI";


class App extends React.Component{
   render(){
      return (
      <div>
         <Welcome />
         <Search />
         <SvgHandler />
         <FetchFromAPI />
      </div>
      )
  }
}

export default App;