import React from "react";
import axios from "axios";
import Griddle, { plugins } from 'griddle-react';

class FetchFromAPI extends React.Component{
   constructor(props) {
      super(props);
      this.state = { 
         isLoaded: false,
         rooms: []
      }
   }

   componentDidMount(){
      const url = "http://localhost:8080/demo/all";
      axios.get(url)
         .then(response => response.data)
         .then(data => {
            this.setState({
               isLoaded: true,
               rooms: data
            });
            //console.log(this.state);
         },
            error => {
               this.setState({
                  isLoaded: true,
                  error
               });
            }
         );       
   }
   
   render(){ 
      const { rooms, isLoaded, error } = this.state;
      return(
         <Griddle
            data={rooms}
            plugins={[plugins.LocalPlugin]}
         />
      )}
}

export default FetchFromAPI;