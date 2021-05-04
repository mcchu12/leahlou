import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Layout from './Layout';
import Work from './WorkView';
import Project from './ProjectView';
import Contact from './Contact';
import About from './About';

const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/works" exact component={Work} />
          <Route path="/works/:id" exact component={Project} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Redirect exact from="/" to="/works" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;
