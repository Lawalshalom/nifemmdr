import React from "react";
import { Route, Switch } from 'react-router-dom';
import Homepage from "./Pages/Homepage";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Error from "./Error";

export default class App extends React.Component {
    render(){
    return (
        <>
          <Switch>
              <Route path="/" component={Homepage} exact />
              <Route path="/about" component={About} />
              <Route path="/services" component={Services} />
              <Route path="/contact" component={Contact} />
              <Route component={Error} />
          </Switch>
          </>
    )
    }
}