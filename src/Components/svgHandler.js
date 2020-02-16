import React from 'react';
import {
   fitSelection,
   fitToViewer,
   INITIAL_VALUE,
   ReactSVGPanZoom,
   TOOL_PAN,
   zoomOnViewerCenter
 } from 'react-svg-pan-zoom';
 import {ReactSvgPanZoomLoader} from 'react-svg-pan-zoom-loader'

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
export default class SvgHAndler extends React.PureComponent {
   state = {tool: TOOL_PAN, 
            value: INITIAL_VALUE, 
            img_url: "floorplan.svg",
         }
   

   Viewer = null

  
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
         this.setState({img_url: "floorplan.svg"})
         break;
      case 2:
         this.setState({img_url: "Plan2.svg"})
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
        
         <ReactSvgPanZoomLoader 
            src={this.state.img_url} 
            render= {(content) => (
               <ReactSVGPanZoom 
               
                  width={1000}
                  height={500}
                  tool={this.state.tool} onChangeTool={tool=>this.changeTool(tool)}
                  value={this.state.value} onChangeValue={value => this.changeValue(value)}
                  customToolbar={NewToolbar} // Removes toolbar
                  customMiniature={NewNavigation} // Removes miniature map
               >
                  <svg width={1000} height={500} >
                     {content}
                  </svg>  
                  
               </ReactSVGPanZoom>
            )}
         />
      </div>
    );
  }
}