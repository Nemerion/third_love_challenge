import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Form, FormGroup, Label, Button, Input } from 'reactstrap';
import Swatches from '../swatches/swatches';
import './customization_style.scss';

// Concerning to the dropdowns, i thougt that a component should be made to save code and promote modularization, but i will skip that in order to faster
// Did a Form, but i just decide to keep it simple and no
class Customizations extends Component {
  onSubmit = (e) => {
    e.stopPropagation();
    alert('it works!');
  }
  
  render() {
    return (
      <Form className="form" onSubmit={this.onSubmit}>
        <Row>
          <Col xs="12">
            <p className="color-font">COLOR: NAKED</p>
            <Swatches></Swatches>
            <p className="stock-font">STOCK: 20</p>
          </Col>
          <Col xs>
            <FormGroup>
              <Label className="band-size-label" for="bandSize">BAND SIZE</Label>
              <Input className="band-size-input" type="select" name="band" id="bandSize">
              </Input>
            </FormGroup>
          </Col>
          <Col xs>
            <FormGroup>
              <Label className="cup-size-label" for="cupSize">CUP SIZE</Label>
              <Input className="cup-size-input" type="select" name="cup" id="cupSize">
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Button size="lg" block className="add-button">Add to Bag</Button>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return { swatch: state.swatch };
}

export default connect(mapStateToProps)(Customizations);
