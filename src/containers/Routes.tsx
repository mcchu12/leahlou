import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Layout from './Layout';
import WorkList from './Works';
import Work from './Work';
import Contact from './Contact';
import About from './About';

const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/works" exact component={WorkList} />
          <Route path="/works/:id" exact component={Work} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Redirect from="/" to="/works" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;
