import React, { Component } from 'react';
import './Coins.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Redirect } from 'react-router';
import Loader from './Loader';


import fetchCoinsAction from '../actions/coinsActions';
import {getCoinsError, getCoins, getCoinsPending} from '../reducers/coinsReducer';

class Commemorative extends Component{
  constructor(props){
    super(props)
  }

  render(){
    if(this.props.IsCommemorative){
      return <div>Pièce commémorative</div>
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
    if (this.state.redirect) {
       return <Redirect push to={'/coin/' + this.state.id}/>;
    }

    const {Id, Year, IsCommemorative, Country, Diffusion} = this.props.datas;
      return (
          <div className="coins-item" key={Id} /*onClick={ (e) => this.handleOnClick(Id)}*/>
              <div className="picture-coin-item" style={{ backgroundImage: 'url("pictures/' + Id + '.jpg")' }}></div>
              {Year} - {Country.Name} <br/>
              Diffusion : {Diffusion}
              <Commemorative IsCommemorative={IsCommemorative}/>
                
          </div>
      )
  }
}


class Coins extends Component {

  constructor(props) {
      super(props);

      this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentWillMount() {
      const {fetchCoins} = this.props;
      fetchCoins();
  }

  shouldComponentRender() {
      if(this.props.coins.pending === true) return false;
      // more tests
      return true;
  }

  render() {
      const {coins, pending} = this.props.coins;
      // Pour tester le loader
      // if(true) return <Loader/>
      if(pending || coins == null) return <Loader/>
      return (          
          <div className='product-list-wrapper'>              
              {coins.map(function(item, key){
                return <CoinItem datas={item} key={key}/>
              })} 
          </div>)
  }
}

const mapStateToProps = state => ({
  error: getCoinsError(state),
  coins: getCoins(state),
  pending: getCoinsPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchCoins: fetchCoinsAction
}, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Coins);
