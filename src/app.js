import React from "react";
import Search from "./Components/search";
import Welcome from "./Components/welcome";
import SvgHandler from "./Components/svgHandler";

class App extends React.Component{
   render(){
      return (
      <div>
         <Welcome />
         <Search />
         <SvgHandler />
      </div>
      )
  }
}

export default App;