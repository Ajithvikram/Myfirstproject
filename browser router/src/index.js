import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter , Route, Switch} from "react-router-dom";
import  "./index.css";
import Home from "./component/Home";
import About from "./component/about";
import Navigation from "./component/navigation";
import Error from "./component/Error"
import Data from "./component/data";
import SearchComponent from "./component/contact";

const routing = (
  <BrowserRouter>
      <div>
          <div class="route">
          <Switch>
            <Route exact path ="/" component={Home}/>
            <Route path ="/about" component={About}/>
            <Route path ="/contact" component={SearchComponent}/>
            <Route path="/data" component={Data}/>
            <Route component={Error}/>
            </Switch>
            <Navigation/>
            </div>
            
        </div>
        </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('root'))


