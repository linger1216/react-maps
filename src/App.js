import React from 'react';
import './App.css';

import MyMap from './components/Amap';
import GeoHash from './pages/GeoHash'
import Login from './pages/Login'
import S2 from './pages/S2'
import UCenter from './pages/UCenter'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NotFound from './pages/NotFound'
import Nav from './components/Nav'
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/map" strict exact component={MyMap}></Route>
          <Route path="/geohash" strict exact component={GeoHash}></Route>
          <Route path="/login" strict exact component={Login}></Route>
          <Route path="/s2/:id" strict exact component={S2}></Route>
          <Route path="/geohash/ucenter" strict exact component={UCenter}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
