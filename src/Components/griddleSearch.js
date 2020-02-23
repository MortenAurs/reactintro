import React from "react";
import Griddle, {plugins, RowDefinition, ColumnDefinition} from "griddle-react";
import updateState from "./svgHandler";
import '../Styles/styles.css';
import SvgHandler from "./svgHandler";

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

const CustomColumn = ({value}) => <span style={ {color: "red", backgroundColor: "grey"} }>{value}</span>;
const CustomHeading = ({title}) => <span style={{ color: '#AA0000' }}>{title}</span>;
const customLocationComponent = ({value}) => <a href={`public/Plan2.svg/${value}/>`} target="_blank">{value}</a>

const styleConfig = {
   icons: {
      TableHeadingCell: {
         width: 100,
         sortDescendingIcon: ' ﹀',
         sortAscendingIcon: ' ︿' 
      },
   },
   classNames: {
      Row: 'row-class',
    },
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
   constructor(props) {
      super(props);
      this.state = {
        selectedRowId: 0,
      };
    }
   onRowClick(row) {
     console.log("her");
     
   }
  
   render(){
      console.log("from griddlesearch.js");
      console.log(this.props.rooms);
      return (
      <div>
         <Griddle
            data={this.props.rooms}
            plugins={[plugins.LocalPlugin]}
            styleConfig={styleConfig}
            components={{
               CellEnhancer: OriginalComponent =>
                 props => (
                   <OriginalComponent
                     {...props}
                     onClick={() => { this.onRowClick(props.value); console.log(`Click Row ${props.value}`)}}
                     onMouseEnter={() => console.log(`MouseEnter Row ${props.value}`)}
                     onMouseLeave={() => console.log(`MouseLeave Row ${props.columnId}`)}
                     />
                 ),
               /* CellEnhancer: OriginalComponent =>
                 props => (
                   <OriginalComponent
                     {...props}
                     onClick={() => console.log(`Click ${props.value}`)}
                     onMouseEnter={() => console.log(`MouseEnter ${props.value}`)}
                     onMouseLeave={() => console.log(`MouseLeave ${props.value}`)}
                     />
                 ), */
             }}
            pageProperties={{
               currentPage: 1,
               pageSize: 10,
               
             }}
         >
            <RowDefinition>
               <ColumnDefinition id="name" title="Room Name" width={100}  />
               <ColumnDefinition id="code" title="Room Code" width={100} customHeadingComponent={CustomHeading} />
               <ColumnDefinition id="seats" title="Seats" width={70} />
               <ColumnDefinition id="campus" visible={false}  /> 
               <ColumnDefinition id="campus.name" title="Campus" width={100} />
               <ColumnDefinition id="building" visible={false} /> 
               <ColumnDefinition id="building.name" title="Building" width={200}/>
               <ColumnDefinition id="floor" visible={false} />
               <ColumnDefinition id="floor.floornumber" title="Etasje" width={70} />
            </RowDefinition>
         </Griddle>
      </div>
      )
  }
}

export default GriddleSearch;