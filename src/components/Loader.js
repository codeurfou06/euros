import React, { Component } from 'react';
import './Loader.css';

class Loader extends Component {

  render() {
    return (
        <div className="loader-position">
            <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
  }
}

export default Loader;
