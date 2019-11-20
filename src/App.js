import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import Layout from './hoc/Layout/Layout';
import Personal from './containers/Personal/Personal';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/personal" exact component={Personal} />
            <Redirect from="/" to="/personal" />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
