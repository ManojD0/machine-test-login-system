import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Index  from  '../../src/components/index';
import Home  from  '../../src/components/home';
import ProfileView  from  '../../src/components/profileView';
import UpdateView  from  '../../src/components/updatePage';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        
        
        <Switch>
          <Route exact path="/" component={Index} />
        </Switch>
        <Switch>
          <Route exact path="/Home" component={Home} />
        </Switch>

        <Switch>
          <Route exact path="/Profile-View" component={ProfileView} />
        </Switch>
        <Switch>
          <Route exact path="/Update-View" component={UpdateView} />
        </Switch>
        
      </Router>
    );
  }
}

export default App;
