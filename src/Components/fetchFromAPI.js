import React from "react";
import axios from "axios";

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
         .then((data) => {
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
      console.log("THIS STATE");
      console.log(this.state.rooms);
      if(error) {
         return (
            <div>
               <p>Error:  <br/>
               Check and see if you have started the api program</p>
            </div>
         );
      } else if (!isLoaded) {
         return <div>Loading..</div>
      } else {
         return (
            <div>
               {rooms.map((room) => (
               <ul key={room.id}>
                  <li>
                     <p>Code: {room.code }</p>
                     <p>Name: {room.name }</p>
                     <p>Seats: {room.seats }</p>
                     <p>Campus: {room.campus.name}</p>
                     <p>Building: {room.building.name}</p>
                     <p>Floor: {room.floor.floornumber}</p>
                     <hr/>
                  </li>
               </ul>
               ))}
            </div>
         )
      }
  }
}

export default FetchFromAPI;