import React,  { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/Nav';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Testimonials from './pages/Testimonials';

const App = () => (
  <Router>
    <Fragment>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/testimonials" component={Testimonials} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </Fragment>
  </Router>
);

export default App;
