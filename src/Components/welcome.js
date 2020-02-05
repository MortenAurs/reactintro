import React from "react";

class Welcome extends React.Component{
   constructor(props){
      super(props);
      this.state = {name: "Morten"}
   }
   render(){
      return (
      <div>
         <h1>Hello, { this.state.name }</h1>
         <p>This is a welcome message</p>
      </div>
      )
      
  }
}

export default Welcome;