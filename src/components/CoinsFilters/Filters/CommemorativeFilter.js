import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import fetchCoinsAction from '../../../actions/coinsActions';
import {setFilter} from '../../../actions/actionTypes';
import './CountriesFilter.css'; 

class CommemorativeFilter extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {value : this.props.isCommemorative}
  }


  handleChange(e) {
    this.props.setFilter(this.props.selectedCountryId, parseInt(e.target.value,10)); 
  }

  render() {  
     return (   
       <div>
        <label>Commémorative</label>   
        <select className="select" onChange={this.handleChange} value={this.state.isCommemorative}>
          <option key='0' value='-1'>Tous</option>
          <option key='1' value='1'>Oui</option>
          <option key='2' value='0'>Non</option>       
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
        isCommemorative : state.isCommemorative,
        selectedCountryId : state.selectedCountryId
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommemorativeFilter);

