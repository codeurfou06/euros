import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setFilter} from '../../../actions/actionTypes';

class CommemorativeFilter extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {value : this.props.selectedYear}
  }


  handleChange(e) {
    this.props.setFilter(this.props.selectedCountryId, this.props.isCommemorative, parseInt(e.target.value,10)); 
  }

  render() {  
    const years = [];
    for(let i = 1999; i <= new Date().getFullYear(); i++){
        years.push(i);
    }
     return (   
      <div className="form-group col-md-2 col-sm-4">
        <label>Année</label>   
        <select className="form-control" onChange={this.handleChange} value={this.state.selectedYear}>
          <option key='0' value='-1'>Toutes</option>
          {years.map(function(item, key){
               return <option key={key} value={item}>{item}</option>   
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
        isCommemorative : state.isCommemorative,
        selectedCountryId : state.selectedCountryId,
        selectedYear : state.selectedYear
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommemorativeFilter);

