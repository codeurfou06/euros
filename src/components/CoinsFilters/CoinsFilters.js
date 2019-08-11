import React, { Component } from 'react';
import CountriesFilter from './Filters/CountriesFilter'
import CommemorativeFilter from './Filters/CommemorativeFilter'
import YearFilter from './Filters/YearFilter';
import ValeurFilter from './Filters/ValeurFilter';

class CoinsFilters extends Component {
  render() {  
     return (  
         <form>
           <div className="form-row">
              <CountriesFilter/>
              <CommemorativeFilter/>
              <YearFilter/>
              <ValeurFilter/>
            </div>
         </form>
    );
  }
}

export default CoinsFilters;
