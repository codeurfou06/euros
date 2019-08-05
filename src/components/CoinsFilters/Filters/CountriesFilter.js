import React, { Component } from 'react';
import Loader from '../../Loader';
import {getCountries} from '../../../reducers/countriesReducer';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import fetchCoinsAction from '../../../actions/coinsActions';
import {setSelectedCountryId} from '../../../actions/actionTypes';
import './CountriesFilter.css'; 

class CountriesFilter extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {value : this.props.selectedCountryId}
  }


  handleChange(e) {
    this.props.setSelectedCountryId(e.target.value); 
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
  setSelectedCountryId : setSelectedCountryId
}, dispatch)


const mapStateToProps = state => ({
  countries: getCountries(state),
  selectedCountryId : state.selectedCountryId
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountriesFilter);

