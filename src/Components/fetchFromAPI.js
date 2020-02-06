import React from "react";
import axios from "axios";

class FetchFromAPI extends React.Component{
   constructor(props) {
      super(props);
      this.state = {
         name: "Default Name",
         email: "Default Email",
         isLoaded: false,
         error: null
      };
   }

   componentDidMount(){
      const url = "http://localhost:8080/demo/all";
      axios.get(url)
         .then(res => {
            this.setState({
               isLoaded: true,
               name: res.data[0].name,
               email: res.data[0].email
            });
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
      const { name, email, isLoaded, error } = this.state;
      if(error) {
         return <div>Error: {error.message}</div>
      } else if (!isLoaded) {
         return <div>Loading..</div>
      } else {
         return (
            <div>
               <h1>Navn som er hentet fra API: {name}</h1>
               <p>Email:{email}</p>
            </div>
         )
      }
  }
}

export default FetchFromAPI;