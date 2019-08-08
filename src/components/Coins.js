import React, { Component } from 'react';
import './Coins.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Loader from './Loader';
import CoinItem from './CoinItem';


import fetchCoinsAction from '../actions/coinsActions';
import fetchCountriesAction from '../actions/countriesActions';
// import {getCoins} from '../reducers/coinsReducer';
// import {getCountries} from '../reducers/countriesReducer';
import CoinsFilters from './CoinsFilters/CoinsFilters';

class Coins extends Component {

  componentWillMount() {
    const {fetchCoins, fetchCountries} = this.props;
    fetchCoins();
    fetchCountries();
  }

  shouldComponentRender() {
      if(this.props.pending === true) return false;
      // more tests
      return true;
  }

  render() {
      // Pour tester le loader
      // if(true) return <Loader/>
      if(this.props.pending || this.props.allCoins === null) return <Loader/>
      return (          
        <div>
          <CoinsFilters/>
          <div className="count">Nombre : {this.props.filteredCoins.length}</div>        
          <div className='product-list-wrapper'>              
              {this.props.filteredCoins.map(function(item, key){
                return <CoinItem datas={item} key={key}/>
              })} 
          </div>
        </div>)
  }
}

const mapStateToProps = state => ({
  allCoins : state.allCoins,
  filteredCoins : state.filteredCoins,
  pending : state.pending,
  selectedCountryId : state.selectedCountryId
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchCoins: fetchCoinsAction,
  fetchCountries: fetchCountriesAction
}, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Coins);
