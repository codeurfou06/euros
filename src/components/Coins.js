import React, { Component } from 'react';
import './Coins.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Loader from './Loader';
import CoinItem from './CoinItem';
import fetchUserCoinsByLogin from '../actions/fetchUserCoinsByLogin';
import fetchCountriesAction from '../actions/countriesActions';
import CoinsFilters from './CoinsFilters/CoinsFilters';

class Coins extends Component {

  componentWillMount() {
    this.props.fetchUserCoinsByLogin('bnk-57');
    this.props.fetchCountries();
  }

  shouldComponentRender() {
      if(this.props.pending === true || this.props.allCoins === null) return false;
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
          <div className='card-deck'>              
              {this.props.filteredCoins.map(function(item, key){
                return <CoinItem datas={item} key={key}/>
              })} 
              <div className="card card-invisible"></div>
              <div className="card card-invisible"></div>
              <div className="card card-invisible"></div>
              <div className="card card-invisible"></div>
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
  fetchUserCoinsByLogin: fetchUserCoinsByLogin,
  fetchCountries: fetchCountriesAction
}, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Coins);
