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
    //this.state = {value : this.props.isCommemorative}
  }


  handleChange(e) {
      console.log(this.props)
      console.log(this.state)
    this.props.setFilter(this.props.selectedCountryId, e.target.value); 
  }

  render() {  
     return (   
       <div>
        <label>Commémorative</label>   
        <select className="select" onChange={this.handleChange} value={this.props.isCommemorative}>
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


function mapStateToProps(state) {
    const { selectedCountryId, isCommemorative } = state
    console.log(state)
    return {
        isCommemorative : isCommemorative,
        selectedCountryId : selectedCountryId
    }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommemorativeFilter);

