import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Carousel from './carousel/carousel';
import Description from './description';
class App extends Component {
  componentDidMount() {
    this.props.fetchInfo();
  }

  render() {
    return (
      <div>
        <h3> {this.props.info.title} </h3>
        <div> (PRICE) $68</div>
        {console.log(this.props)}
        <Carousel></Carousel>
        <Description></Description>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { info: state.info };
}

export default connect(mapStateToProps, actions)(App);
