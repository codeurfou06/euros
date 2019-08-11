import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setFilter} from '../../../actions/actionTypes';
import Loader from '../../Loader';

class CountriesFilter extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {value : this.props.selectedCountryId}
  }


  handleChange(e) {
    this.props.setFilter(parseInt(e.target.value,10), this.props.isCommemorative, this.props.selectedYear, this.props.selectedValeur); 
  }

  render() {  
    if(this.props.pending === true || this.props.countries === null) return <Loader/>
     return (   
      <div className="form-group col-md-4 col-sm-6">
        <label>Pays</label>   
        <select className="form-control" onChange={this.handleChange} value={this.state.selectedCountryId}>
          <option key='0' value='0'>Tous</option>
            {this.props.countries.sort((a, b) => (a.Name > b.Name) ? 1 : -1).map(function(item){
                  return <option key={item.Id} value={item.Id}>{item.Name}</option>
            })}          
        </select>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  setFilter : setFilter
}, dispatch)

function mapStateToProps(state){
  return {
    selectedCountryId : state.selectedCountryId,
    isCommemorative : state.isCommemorative,
    countries : state.countries,
    selectedYear : state.selectedYear,
    selectedValeur : state.selectedValeur
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountriesFilter);

