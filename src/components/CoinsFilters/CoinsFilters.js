import React, { Component } from 'react';
import CountriesFilter from './Filters/CountriesFilter'
import CommemorativeFilter from './Filters/CommemorativeFilter'
import YearFilter from './Filters/YearFilter';

class CoinsFilters extends Component {
  render() {  
     return (  
         <form>
           <div className="form-row">
              <CountriesFilter/>
              <CommemorativeFilter/>
              <YearFilter/>
            </div>
         </form>
    );
  }
}

export default CoinsFilters;
