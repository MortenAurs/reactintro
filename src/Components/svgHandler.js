import React from 'react';
import {UncontrolledReactSVGPanZoom} from 'react-svg-pan-zoom';
import { ReactSVGPanZoom } from 'react-svg-pan-zoom';
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

  Viewer = null

  componentDidMount() {
    this.Viewer.fitToViewer();
  }

  render() {
    return (
      <div>
         <ReactSvgPanZoomLoader 
            src="cake.svg" 
            render= {(content) => (
               <UncontrolledReactSVGPanZoom 
                  width={500}
                  height={500}
                  ref = {ref => this.Viewer = ref}
                  customToolbar={NewToolbar} // Removes toolbar
                  customMiniature={NewNavigation} // Removes miniature map
               >
                  <svg width={500} height={500} >
                     {content}
                  </svg>  
               </UncontrolledReactSVGPanZoom>
            )}
         />
      </div>
    );
  }
}