import React from 'react';
import Layout from "./hoc/layout/layout";
import { Switch, Route } from "react-router-dom";
import Home from './pages/home/home';
import Talecity from './pages/talecity/talecity';
import PostContainer from './containers/postContainer/postContainer';
function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/talecity" exact component={Talecity} />

          <Route path="/:page/:id" exact component={PostContainer} />
        </Switch>
      </Layout>
    </>
  );
}

export default App;
