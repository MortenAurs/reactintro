import React from 'react';
import PropTypes from 'prop-types';
import RinFloor1 from "./Floorplans/riFloor1"

const FloorPlan = props => props.rooms.map((room) => {
  console.log(room.name);

   
   return(
      <RinFloor1 room={room.name} available={room.available} active={room.active} />
   )
})
  
 export default FloorPlan;