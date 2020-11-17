import React from 'react';
import './App.css';

import MyMap from './components/Amap';
import GeoHash from './pages/GeoHash'
import Login from './pages/Login'
import S2 from './pages/S2'

import { Button } from 'antd'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/map" component={MyMap}></Route>
        <Route path="/geohash" component={GeoHash}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/s2" component={S2}></Route>
      </Router>
      <Button type="primary">Button</Button>
    </div>
  );
}

export default App;
