import React from 'react';  
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/containers/home';  
import AboutPage from './components/containers/about';
import SavedPage from './components/containers/saved';
import LyricsPage from './components/containers/lyrics';

export default () => (
  <div>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/saved" component={SavedPage} />
      <Route path="/lyrics" component={LyricsPage} />
    </Switch>  
  </div>
);