import React, { useState, useEffect} from "react";
import axios from "axios";


function FetchWithHooks() {

   const [rooms, setRooms] = useState([]);

   useEffect(() => {
      axios
      .get("http://localhost:8080/demo/all")
      .then(res => {
         
         setRooms(res.data);
      })
      .catch(err => {
         console.log(err);
      })
   
   });
 
   
   
   return (
      <div>
         <ul>
            {
               rooms.map(room => <li key={room.id}>{room.name}</li>)
            }
         </ul>
      </div>
   )
}

export default FetchWithHooks;