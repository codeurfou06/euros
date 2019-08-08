import React, { Component } from 'react';
import CountriesFilter from './Filters/CountriesFilter'
import CommemorativeFilter from './Filters/CommemorativeFilter'

class CoinsFilters extends Component {
  render() {  
     return (  
         <div>
            <CountriesFilter/>
            <CommemorativeFilter/>
         </div>
    );
  }
}

export default CoinsFilters;
