import React from "react";
import SvgHandler from "./svgHandler";

class Map extends React.Component{
   constructor(props){
      super(props);
      this.state = {name: "Morten"}
   }
   render(){
      return (
      <div>
         <h1>Hello, { this.state.name }</h1>
         <p>Choose the floor</p>
         <SvgHandler />
      </div>
      )
  }
}

export default Map;