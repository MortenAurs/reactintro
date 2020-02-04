import React from 'react';
import {UncontrolledReactSVGPanZoom} from 'react-svg-pan-zoom';
import { ReactSVGPanZoom } from 'react-svg-pan-zoom';
import {ReactSvgPanZoomLoader} from 'react-svg-pan-zoom-loader'


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
                  height={500} 
                  width={500}
                  ref={Viewer => this.Viewer = Viewer}
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