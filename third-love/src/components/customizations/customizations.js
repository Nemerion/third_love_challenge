import React, { Component } from 'react';
import { connect } from 'react-redux';


class Customizations extends Component {
  
  render() {
    return (
      <div>
        <div className="round">
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox"></label>
        </div>
        <span>COLOR: NAKED</span>
        <span>STOCK: 20</span>
        <button> Add to Bag</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { info: state.info };
}

export default connect(mapStateToProps)(Customizations);
