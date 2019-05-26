import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends Component {
  componentWillMount() {
    this.props.fetchInfo();
  }

  render() {
    return (
      <div>
        <h3> (MOCK) Classic Perfect Coverage Bra </h3>
        <div> (PRICE) $68</div>
        {console.log(this.props)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { info: state.info };
}

export default connect(mapStateToProps, actions)(App);
