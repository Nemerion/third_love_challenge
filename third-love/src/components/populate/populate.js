import React, { Component } from 'react';
import './populate_style.scss';

export default class PopulateOptions extends Component {
  render() {
      return this.props.arrToPopulate.map((data, i) => {
        return (
          <option key={i} value={data}>
            {data}
          </option>
        );
      });
  }
}
