import React, { Component } from 'react';
import './CoinItem.css';

class Commemorative extends Component{
    render(){
      if(this.props.IsCommemorative){
        return <div>Commémorative</div>
      }
        return <div className="no-commemo"> </div>;
    }
  }

class CoinItem extends Component {  
    render() { 
      const {Id, Year, IsCommemorative, Country, Url, Name} = this.props.datas;
        return (
            <div className="card" key={Id}>
              <div className="picture-coin-item" style={{ backgroundImage: 'url("' + Url + '")' }}></div>
              <h5 className="card-title"></h5>
              <p className="card-text">
                <b>{Year} - {Country.Name}</b>
                <br/>
                {/* <div className="name">{Name ? Name: " "}</div> */}
              </p>
              <div className="card-footer">
                <small className="text-muted"> 
                  <Commemorative IsCommemorative={IsCommemorative}/>  
                </small>
              </div>              
            </div>
        )
    }
  }

  
export default CoinItem;