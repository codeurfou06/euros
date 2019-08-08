import React, { Component } from 'react';
import Loader from '../../Loader';
import {getCountries} from '../../../reducers/countriesReducer';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import fetchCoinsAction from '../../../actions/coinsActions';
import {setFilter} from '../../../actions/actionTypes';
import './CountriesFilter.css'; 

class CountriesFilter extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {value : this.props.selectedCountryId}
  }


  handleChange(e) {
    console.log(this.props)
    this.props.setFilter(e.target.value, this.props.isCommemorative); 
  }

  render() {  
    const datas = this.props;
     if(datas.countries.pending || datas.countries.countries == null) return <Loader/>
     return (   
       <div>
        <label>Pays</label>   
        <select className="select" onChange={this.handleChange} value={this.props.selectedCountryId}>
          <option key='0' value='0'>Tous</option>
            {datas.countries.countries.map(function(item){
                  return <option key={item.Id} value={item.Id}>{item.Name}</option>
            })}          
        </select>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchCoins: fetchCoinsAction,
  setFilter : setFilter
}, dispatch)

function mapStateToProps(state){
  const { selectedCountryId, isCommemorative, coins } = state
  console.log(state);
  console.log(coins.selectedCountryId)
  return {
    countries: getCountries(state),
    isCommemorative : isCommemorative,
    selectedCountryId : coins.selectedCountryId
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountriesFilter);

