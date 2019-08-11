import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setFilter} from '../../../actions/actionTypes';



class GetLabel extends Component{
    render(){
        const valeur =  this.props.valeur;
      if(valeur < 100){
        return valeur + " cents";
      }
      else{
          if(valeur/100 === 1){
            return 1 + " euro"; 
          }
          else return "2 euros";
      }
    }
  }

class CommemorativeFilter extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {value : this.props.selectedValeur}
  }


  handleChange(e) {
    this.props.setFilter(this.props.selectedCountryId, this.props.isCommemorative, this.props.selectedYear, parseInt(e.target.value,10)); 
  }

  render() {  
    const valeurs = [200];
     return (   
      <div className="form-group col-md-2 col-sm-4">
        <label>Valeur</label>   
        <select className="form-control" onChange={this.handleChange} value={this.state.selectedValeur}>
          <option key='0' value='-1'>Toutes</option>
          {valeurs.map(function(item, key){
               return <option key={key} value={item}>{<GetLabel valeur={item}/>}</option>   
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
        selectedYear : state.selectedYear,
        selectedValeur :state.selectedValeur
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommemorativeFilter);

