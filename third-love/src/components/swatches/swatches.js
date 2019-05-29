import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { FormGroup, Label, Input, Col, Row } from 'reactstrap';
import './swatches_style.scss';

class Swatches extends Component {
  state = {
    inventoryArray: [],
    selectedOption : ''
  }

  componentDidUpdate() {
    this.organizeArray();
  }

  // This creates a new array of arrays using the 'variants' field, but taking
  // only those objects which have an 'inventory_quantity' superior or 
  // equal than 10 and groups it by 'option1' fields.
  organizeArray() {
    var arr = [[], [], [], [], []], // 5 groups, 1 by each 'option1' value
      {variants} = this.props.info;

    if (variants) { // To avoid unsigned errors
      for(let i = 0; i < variants.length; i++) {
        // Using a switch case instead of the for below
        // will optimize the order of the function
        for(let j = 0; j < 5; j++) {
          if(variants[i].inventory_quantity >= 10 &&
            variants[i].option1 === 'naked-' + (1+j)) {
              arr[j].push(variants[i]);
              break;
          }
        }
      }
      if(this.state.inventoryArray.length === 0) { // Write only 1 time
        this.setState( { inventoryArray: arr });
        console.log(arr);
      }
    };
  }

  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.name
    });
  }

  renderSwatches() {
    return this.state.inventoryArray.map((data, i) => {
      return (
        <Col xs key={i}>
          <FormGroup check >
            <Label check>
              <Input
                className="swatch"
                type="radio"
                name={"product-number-" + i}
                value={data}
                checked={this.state.selectedOption === "product-number-" + i}
                onChange={this.handleOptionChange /*&& this.props.saveSwatchData*/}
              />
            </Label>
          </FormGroup>
        </Col>
      );
    });
  }

  render() {
    return (
      <FormGroup tag="fieldset">
        <Row>
          {this.renderSwatches()}
        </Row>
      </FormGroup>
    );
  }
}

const mapStateToProps = state => {
  return { info: state.info };
}

export default connect(mapStateToProps, actions)(Swatches);
