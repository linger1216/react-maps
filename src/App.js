import React from 'react';
import './App.css';

import MyMap from './components/Amap';
import { Button } from 'antd'

function App() {
  return (
    <div className="App">
      <MyMap/>,
      <Button type="primary">Button</Button>
    </div>
  );
}

export default App;
