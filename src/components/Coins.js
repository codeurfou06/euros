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
import CountriesFilter from './CoinsFilters/CountriesFilter';

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
      if(this.props.coinsStore.pending === true) return false;
      // more tests
      return true;
  }

  render() {
      // Pour tester le loader
      // if(true) return <Loader/>
      if(this.props.coins.pending || this.props.coins.coins == null) return <Loader/>
      //if(pending || countries == null) return <Loader/>
      return (          
        <div>  
          <div>Filtres
            <CountriesFilter datas={this.props.countries}/>
          </div>
          <h4>Nombre : {this.props.coins.coins.length}</h4>        
          <div className='product-list-wrapper'>              
              {this.props.coins.coins.map(function(item, key){
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
