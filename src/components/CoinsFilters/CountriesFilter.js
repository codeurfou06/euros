import React, { Component } from 'react';
import Loader from '../Loader';

class CountriesFilter extends Component {

  // constructor(props){
  //   super(props)
  // }


  render() {  
    const datas = this.props.datas;
     if(datas.pending || datas.countries == null) return <Loader/>
     return (      
      <select>    
        {console.log(this.props)}
          {datas.countries.map(function(item, key){
                return <option key={key}>{item.Name}</option>
          })}          
      </select>
    );
  }
}

export default CountriesFilter;
