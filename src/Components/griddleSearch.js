import React from "react";
import Griddle, {plugins, RowDefinition, ColumnDefinition} from "griddle-react";

const data = [
   {
     "id": 0,
     "name": "Mayer Leonard",
     "location": {
       "country": "United Kingdom",
       "city": "Kapowsin",
       "state": "Hawaii",
     },
     "company": "Ovolo",
     "favoriteNumber": 7
   }];

const CustomColumn = ({value}) => <span style={ {color: "yellow", backgroundColor: "blue"} }>{value}</span>;
const CustomHeading = ({title}) => <span style={{ color: '#AA0000' }}>{title}</span>;
const styleConfig = {
   styles: {
     Filter: { fontSize: 18 },
     Table: { border: "2px solid #555 "},
     TableBody: { 
        textAlign: "center",
        border: "1px solid #555 "
      }
   }
 }


class GriddleSearch extends React.Component{
   
   render(){
      console.log(data);
      return (
      <div>
         <Griddle
            data={data}
            plugins={[plugins.LocalPlugin]}
         >
           <RowDefinition>
               <ColumnDefinition id="name" />
               <ColumnDefinition id="location.state" title="State" />
            </RowDefinition>
      </Griddle>
      </div>
      )
  }
}

export default GriddleSearch;