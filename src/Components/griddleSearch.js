import React from "react";
import Griddle, {plugins} from "griddle-react";

class GriddleSearch extends React.Component{
   render(){
      return (
      <div>
         <Griddle
               data={this.props.rooms}
               plugins={[plugins.LocalPlugin]}
            />
      </div>
      )
  }
}

export default GriddleSearch;