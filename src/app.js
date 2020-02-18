import React from "react";
import Home from "./Components/home";
import Search from "./Components/search";
import Map from "./Components/map";
import FilterSearch from "./Components/filtersearch";
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
 } from "react-router-dom";
import FetchWithHooks from "./Components/fetchWithHooks";
import FetchFromAPI from "./Components/fetchFromAPI";

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
                     <Link to="/Map">Map</Link>
                     </li>
                     <li>
                     <Link to="/search">Search</Link>
                     </li>
                     <li>
                     <Link to="/filtersearch">Filter search</Link>
                     </li>
                     <li>
                     <Link to="/hookstest">Api call with Hooks</Link>
                     </li>
                  </ul>
               </nav>

               <Switch>
                  <Route path="/search">
                     <Search />
                  </Route>
                  <Route path="/filtersearch">
                     <FilterSearch />
                  </Route>
                  <Route path="/hookstest">
                     <FetchWithHooks />
                  </Route>
                  <Route path="/Map">
                     <Map />
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