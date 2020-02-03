import React from "react";
import Search from "./Components/search";
import Welcome from "./Components/welcome";

class App extends React.Component{
   render(){
      return (
      <div>
         <Welcome name="Morten"/>
         <Search />
      </div>
      )
      
  }
}

export default App;