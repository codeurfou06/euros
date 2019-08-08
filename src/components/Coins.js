import React, { Component } from 'react';
import './Coins.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Loader from './Loader';
import CoinItem from './CoinItem';


import fetchCoinsAction from '../actions/coinsActions';
import fetchCountriesAction from '../actions/countriesActions';
import {getCoins} from '../reducers/coinsReducer';
import {getCountries} from '../reducers/countriesReducer';
import CoinsFilters from './CoinsFilters/CoinsFilters';

class Coins extends Component {

  constructor(props) {
      super(props);
      this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentWillMount() {
    const {fetchCoins, fetchCountries} = this.props;
    fetchCoins();
    fetchCountries();
  }

  shouldComponentRender() {
      if(this.props.coins.pending === true) return false;
      // more tests
      return true;
  }

  shouldComponentUpdate(nextProps) {
    if(this.props.coins.selectedCountryId === null) return true;
    return nextProps.coins.selectedCountryId !== this.props.coins.selectedCountryId;
  }

  render() {
      // Pour tester le loader
      // if(true) return <Loader/>
      if(this.props.coins.pending || this.props.coins.filteredCoins == null) return <Loader/>
      //if(pending || countries == null) return <Loader/>
      return (          
        <div>
          <CoinsFilters/>
          <div className="count">Nombre : {this.props.coins.filteredCoins.length}</div>        
          <div className='product-list-wrapper'>              
              {this.props.coins.filteredCoins.map(function(item, key){
                return <CoinItem datas={item} key={key}/>
              })} 
          </div>
        </div>)
  }
}

const mapStateToProps = state => ({
  coins: getCoins(state),
  countries: getCountries(state),
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchCoins: fetchCoinsAction,
  fetchCountries: fetchCountriesAction
}, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Coins);
