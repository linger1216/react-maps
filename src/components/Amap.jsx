
import React from 'react'
import { Map } from 'react-amap';

export default class MyMap extends React.Component {
  render() {
    return (
      <div style={{ width: 800, height: 600 }}>
        <Map amapkey="db7805cbe94dda17da3738469c779db0" />
      </div>
    )
  }
}