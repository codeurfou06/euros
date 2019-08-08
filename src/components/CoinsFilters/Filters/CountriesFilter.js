import React, { Component } from 'react';
import Loader from '../../Loader';
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
    this.props.setFilter(parseInt(e.target.value,10), this.props.isCommemorative); 
  }

  render() {  
     if(this.props.pending || this.props.countries == null) return <Loader/>
     return (   
       <div>
        <label>Pays</label>   
        <select className="select" onChange={this.handleChange} value={this.state.selectedCountryId}>
          <option key='0' value='0'>Tous</option>
            {this.props.countries.map(function(item){
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
  return {
    pending : state.pending,
    selectedCountryId : state.selectedCountryId,
    isCommemorative : state.isCommemorative,
    countries : state.countries
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountriesFilter);

