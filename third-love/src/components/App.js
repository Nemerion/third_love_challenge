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
          <Col xs="12" sm="12" className="title-wrapper pad-left-right">
            <h3 className="title-name"> {this.props.info.title} </h3>
            <p className="title-price"> ${this.props.swatch.price}</p>
          </Col>
          <Col xs="12" sm="12" lg="5 order-1 offset-lg-1" className="carousel-container pad-left-right">
            <Carousel></Carousel>
          </Col>
          <Col xs="12" sm="12" lg="3 order-3" className="pad-left-right">
            <Customizations></Customizations>
          </Col>
          <Col xs="12" sm="12" lg="5 order-12 offset-lg-1" className="details-col pad-left-right">
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
