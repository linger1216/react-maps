import React, { Component } from 'react'

import { NavLink} from 'react-router-dom'
import './style.css'
export default class Nav extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><NavLink to="/map">map</NavLink></li>
          <li><NavLink to="/geohash">geohash</NavLink></li>
          <li><NavLink to="/login">login</NavLink></li>
          <li><NavLink to="/s2">s2</NavLink></li>
          <li><NavLink to="/geohash/ucenter">/geohash/ucenter</NavLink></li>
        </ul>
      </div>
    )
  }
}
