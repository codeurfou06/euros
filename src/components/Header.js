import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

  // constructor(props){
  //   super(props)
  // }


  render() {
    return (
      <div className="header">
        <div className="col-8">
            <h1>Collection de pièce</h1>
        </div>
      </div>
    );
  }
}

export default Header;
