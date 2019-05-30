import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import { Col } from 'reactstrap';
import './description_style.scss';

// Use react-html-parser to translate the HTML string from the backend into a React component.
// For more information, go to https://www.npmjs.com/package/react-html-parser
class Description extends Component {
  render() {
    const parser = new DOMParser();
    let htmlDoc = parser.parseFromString(this.props.info.body_html,'text/html');
    let htmlString = htmlDoc.getElementsByTagName("body")[0].innerHTML;

    return (
      <div className="details-container">
        <h3 className="details">DETAILS</h3>
        <hr/>
        <div className="text">{ ReactHtmlParser(htmlString)}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { info: state.info };
}

export default connect(mapStateToProps)(Description);
