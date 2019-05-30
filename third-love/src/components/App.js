import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Carousel from './carousel/carousel';
import Description from './descriptions/description';
import Customizations from './customizations/customizations';
import { Container, Row, Col } from 'reactstrap';
import './App_style.scss';

class App extends Component {
  componentDidMount() {
    this.props.fetchInfo();
  }

  render() {
    return (
      <Container fluid={true}>
        <Row>
          <Col xs="12" sm="12" className="pad-left-right">
            <h3 className="title-name"> {this.props.info.title} </h3>
          </Col>
          <Col xs="12" sm="12" className="pad-left-right">
            <p className="title-price"> ${this.props.swatch.price}</p>
          </Col>
        </Row>
        <Row>
          <Col xs="auto" className="carousel-container pad-left-right">
            <Carousel></Carousel>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="12" className="pad-left-right">
            <Customizations></Customizations>
          </Col>
        </Row>
        <Row>
          <Col xs sm className="details-col pad-left-right">
            <Description></Description>
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return { info: state.info, swatch: state.swatch };
}

export default connect(mapStateToProps, actions)(App);
