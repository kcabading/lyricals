import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './components/containers/home'
import MorePage from './components/containers/more'
import AboutPage from './components/containers/about'
import SavedPage from './components/containers/saved'
import LyricsPage from './components/containers/lyrics'
import CreatePage from './components/containers/create'
import SettingsPage from './components/containers/settings'

export default () => (
  <div>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/more" component={MorePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/saved" component={SavedPage} />      
      <Route path="/lyrics" component={LyricsPage} />
      <Route path="/create" component={CreatePage} />
      <Route path="/settings" component={SettingsPage} />
    </Switch>  
  </div>
);