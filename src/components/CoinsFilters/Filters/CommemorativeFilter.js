import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setFilter} from '../../../actions/actionTypes';

class CommemorativeFilter extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {value : this.props.isCommemorative}
  }


  handleChange(e) {
    this.props.setFilter(this.props.selectedCountryId, parseInt(e.target.value,10), this.props.selectedYear, this.props.selectedValeur); 
  }

  render() {  
     return (   
      <div className="form-group col-md-2 col-sm-4">
        <label>Commémorative</label>   
        <select className="form-control" onChange={this.handleChange} value={this.state.isCommemorative}>
          <option key='0' value='-1'>Tous</option>
          <option key='1' value='1'>Oui</option>
          <option key='2' value='0'>Non</option>       
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
        isCommemorative : state.isCommemorative,
        selectedCountryId : state.selectedCountryId,
        selectedYear : state.selectedYear,
        selectedValeur : state.selectedValeur
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommemorativeFilter);

