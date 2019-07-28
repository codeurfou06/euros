import {
    BrowserRouter as Router,
    Link,
    Route
} from 'react-router-dom';
import React, { Component } from 'react';
import Coins from './components/Coins';
import './Routes.css';

class BtnLink extends Component {
    render() {
        return (
            <li>
                <Link to={this.props.path}>
                    <button className="btn btn-dark"> {this.props.name}</button>
                </Link>
            </li>
        )
    }
}

export const Routes = () =>
    (
        <Router>
            <div>
                {/* <ul className="links">
                    <BtnLink path="/" name="Pièces"/>
                    
                </ul> */}

                <Route exact path="/" component={Coins} />
                {/* <Route path="/coin/:id" component={Coin}/> */}

            </div>
        </Router>
    );

export default Routes;