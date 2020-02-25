import React from 'react';
import {
   fitToViewer,
   INITIAL_VALUE,
   ReactSVGPanZoom,
   TOOL_PAN,
 } from 'react-svg-pan-zoom';
 import {ReactSvgPanZoomLoader} from 'react-svg-pan-zoom-loader'
 import '../Styles/styles.css';

import GriddleSearch from './griddleSearch';
import IconUmbrella from './iconUmbrella';


class NewToolbar extends React.Component{
    render(){ 
       return <span></span>
    }
}

class NewNavigation extends React.Component{
    render(){
        return <span></span>
    }
}


export default class SvgHandler extends React.PureComponent {
   constructor(props) {
      super(props)
    
      this.state = {
         tool: TOOL_PAN, 
         value: INITIAL_VALUE, 
         img_url: "floor_plan_without_map.svg",
      };
      this.handler = this.handler.bind(this);
   }

   Viewer = null

   handler() {
      this.setState({
         img_url: "cake.svg"
      })
   }
  
   changeTool(nextTool) {
      console.log("NEXTTOOL")
    this.setState({tool: nextTool})
  }

  changeValue(nextValue) {
     console.log("NEXTVALUE:")
     console.log(nextValue)
     this.setState({value: nextValue})//, img_url: "cake.svg"})
 }

 changeFloor(floor) {
   switch(floor){
      case 1:
         this.setState({img_url: "floor_plan_without_map.svg"})
         break;
      case 2:
         this.setState({img_url: "floor_plan_with_map.svg"})
         break;
      default:
         this.setState({img_url: "dd"})
   } 
}

fitToViewer() {
   this.setState(state => ({value: fitToViewer(state.value)}))
 }

 



 
  render() {
   console.log("THISSTATEVALUE")
   console.log(this.state.value)
   
    return (
      <div>
        <button className="btn" onClick={() => this.changeFloor(1)}>1 etg</button>
        <button className="btn" onClick={() => this.changeFloor(2)}>2 etg</button>
        <button className="btn" onClick={() => this.fitToViewer()}>Tilpass vindu</button>
        <hr/>
        
         
               <ReactSVGPanZoom 
                  
                  width={1000}
                  height={700}
                  tool={this.state.tool} onChangeTool={tool=>this.changeTool(tool)}
                  value={this.state.value} onChangeValue={value => this.changeValue(value)}
                  customToolbar={NewToolbar} // Removes toolbar
                  customMiniature={NewNavigation} // Removes miniature map
               >
                  <svg width={1000} height={700} >
                     <IconUmbrella />
                  </svg>  
                  
               </ReactSVGPanZoom>         
      </div>
    );
  }
}