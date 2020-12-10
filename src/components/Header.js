import React, { Component } from 'react';
import logo from '../logo.svg';
export default class Header extends Component {
  render() {
    return (
      <div className="row">
        <div className="logo">
        <img src={`${process.env.PUBLIC_URL}banner.jpg`}
            />
        </div>
      </div>
    );
  }
} 