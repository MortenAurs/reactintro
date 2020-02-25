import React from "react";
import Home from "./Components/home";
import Search from "./Components/search";
import Map from "./Components/map";
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
 } from "react-router-dom";
import FloorPlan from "./Components/floorPlan";


class App extends React.Component{
   render(){
      return (
         <Router>
            <div>
               <nav>
                  <ul>
                     <li>
                     <Link to="/">Home</Link>
                     </li>
                     <li>
                     <Link to="/map">Map</Link>
                     </li>
                     <li>
                     <Link to="/search">Search</Link>
                     </li>
                     <li>
                     <Link to="/svg">Svg</Link>
                     </li>
                  </ul>
               </nav>

               <Switch>
                  <Route path="/search">
                     <Search />
                  </Route>
                  <Route path="/map">
                     <Map />
                  </Route>
                  <Route path="/svg">
                     <FloorPlan />
                  </Route>
                  <Route path="/">
                     <Home />
                  </Route>
               </Switch>
            </div>
         </Router>
      )};
}


    
      
export default App;