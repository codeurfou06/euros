import React, { Component } from 'react';
import './CoinItem.css';

class Commemorative extends Component{
    render(){
      if(this.props.IsCommemorative){
        return <div>Commémorative</div>
      }
        return null;
    }
  }

class CoinItem extends Component {

    constructor(props){
      super(props)
      this.state = {redirect : false,
                    id : null};
    }
  
    handleOnClick = (id) => {
      this.setState({redirect: true,
                     id : id});
    }
  
    render() {
      // if (this.state.redirect) {
      //    return <Redirect push to={'/coin/' + this.state.id}/>;
      // }
  
      const {Id, Year, IsCommemorative, Country, Url, Name} = this.props.datas;
        return (
            <div className="coins-item" key={Id} /*onClick={ (e) => this.handleOnClick(Id)}*/>
              <div className="picture-coin-item" style={{ backgroundImage: 'url("' + Url + '")' }}></div>
                {Year} - {Country.Name} <br/>
                <b className="name">{Name}</b>
                <Commemorative IsCommemorative={IsCommemorative}/>
                  
            </div>
        )
    }
  }

  
export default CoinItem;