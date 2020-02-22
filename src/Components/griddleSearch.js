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
const customLocationComponent = ({value}) => <a href={`public/Plan2.svg/${value}/>`} target="_blank">{value}</a>

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
      console.log("from griddlesearch.js");
      console.log(this.props.rooms);
      return (
      <div>
         <Griddle
            data={this.props.rooms}
            plugins={[plugins.LocalPlugin]}
            styleConfig={styleConfig}
            pageProperties={{
               currentPage: 1,
               pageSize: 10,
               
             }}
         >
            <RowDefinition>
               <ColumnDefinition id="name" title="Room Name" width={70} customComponent={CustomColumn} />
               <ColumnDefinition id="code" title="Room Code" customHeadingComponent={CustomHeading} />
               <ColumnDefinition id="seats" filterable={true} title="Seats" />
               <ColumnDefinition id="campus.name" nested={true} filterable={true} title="Campus" />
               <ColumnDefinition id="building.name" nested={true} title="Building" />
               <ColumnDefinition id="floor.floornumber" nested={true} title="Etasje" />
            </RowDefinition>
      </Griddle>
      </div>
      )
  }
}

export default GriddleSearch;