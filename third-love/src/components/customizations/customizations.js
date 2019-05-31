import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Form, FormGroup, Label, Button, Input } from 'reactstrap';
import Swatches from '../swatches/swatches';
import PopulateOptions from '../populate/populate';
import './customization_style.scss';

// Concerning to the dropdowns, i thougt that a component should be made to save code and promote modularization, but i will skip that in order to faster
// Did a Form, but i just decide to keep it simple and no
class Customizations extends Component {
  state = {
    band_size: [],
    cup_size: []
  }

  componentDidUpdate() {
    this.sliceSizes();
  }
  /*+ '-' + <BAND SIZE> + <CUP SIZE> + 'to the cart'*/
  onSubmit(e) { // 'Added a 24/7™ Classic Perfect Coverage Bra - '
    alert('Added a ' + e.target.innerText.split('\n')[0] + ' - ' + e.target[5].value + e.target[6].value + ' to the cart');
    e.stopPropagation();
  }

  // This function slices the string from sizes in 2, so
  // it can be used by the 'PopulateOptions' component.
  // It avoid duplicated items
  // E.g. "32D" => "32" and "D"
  sliceSizes() {
    var firstPart = [],
      secondPart = [],
      { sizes } = this.props.swatch;

    if (sizes) {
      for(let i = 0; i < sizes.length; i++) {
        let isFirstDuplicated = false,
            isSecondDuplicated = false;

        for(let j = 0; j < firstPart.length; j++) {
          if (firstPart[j] === sizes[i].slice(0, 2)) {
            isFirstDuplicated = true;
            break;
          }
        }
        if (!isFirstDuplicated) {
          firstPart.push(sizes[i].slice(0, 2));
        }

        for(let j = 0; j < secondPart.length; j++) {
          if (secondPart[j] === sizes[i].slice(2)) {
            isSecondDuplicated = true;
            break;
          }
        }
        if (!isSecondDuplicated) {
          secondPart.push(sizes[i].slice(2));
        }
      }
    }
    // Use stringify to allow the comparison of objects by their content and not their reference
    if (JSON.stringify(this.state.band_size) !== JSON.stringify(firstPart) ||
    JSON.stringify(this.state.cup_size) !== JSON.stringify(secondPart)) {
      this.setState( { band_size: firstPart });
      this.setState( { cup_size: secondPart });
    }
  }
  
  render() {
    return (
      <Form className="form" onSubmit={this.onSubmit}>
        <Row>
          <Col xs="12" sm="12" className="title-price-wrapper">
            <h3 className="title-name"> {this.props.info.title} </h3>
            <p className="title-price"> ${this.props.swatch.price}</p>
          </Col>
          <Col xs="12" sm="12">
            <p className="color-font">COLOR: {this.props.swatch.color}</p>
            <div className="swatch-container">
              <Swatches></Swatches>
            </div>
            <p className="stock-font">STOCK: {this.props.swatch.stock}</p>
          </Col>
          <FormGroup className="band-size-form">
            <Label className="band-size-label" for="bandSize">BAND SIZE</Label>
            <Input className="band-size-input" type="select" name="band" id="bandSize">
              <PopulateOptions arrToPopulate={this.state.band_size}/>
            </Input>
          </FormGroup>
          <FormGroup className="cup-size-form">
            <Label className="cup-size-label" for="cupSize">CUP SIZE</Label>
            <Input className="cup-size-input" type="select" name="cup" id="cupSize">
              <PopulateOptions arrToPopulate={this.state.cup_size}/>
            </Input>
          </FormGroup>
        </Row>
        <Button size="lg" block className="add-button">Add to Bag</Button>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return { swatch: state.swatch, info: state.info };
}

export default connect(mapStateToProps)(Customizations);
