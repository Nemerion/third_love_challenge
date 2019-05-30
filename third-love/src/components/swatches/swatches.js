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
    this.groupByColorName();
  }

  // This creates a new array of arrays using the 'variants' field, but taking
  // only those objects which have an 'inventory_quantity' superior or 
  // equal than 10 and groups it by 'option1 color name' fields.
  groupByColorName() {
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
        //console.log(this.state.inventoryArray);
      }
    };
  }

  // This function configures the given array into an object squashing
  // the 'inventory_quantity' numbers, 'price' values and 'option1' colors.
  // The 'option2' fields are grouped into a single array for better handling
  squashSelectedArr(arr) {
    var newArr = {};

    newArr.color = arr[0].option1;
    newArr.price = arr[0].price;
    // This for sums the quantity of available products, but it's not exactly accurate by product.
    // It also creates an array with all the sizes.  
    newArr.stock = arr[0].inventory_quantity; // Just to initialize
    newArr.sizes = [];
    for(var i = 0; i < arr.length; i++) {
      newArr.sizes.push(arr[i].option2);
      newArr.stock = (newArr.stock <= arr[i].inventory_quantity) ? newArr.stock : arr[i].inventory_quantity;
    }
    return newArr;
  }

  onChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.name
    });
    let configuredArr = this.squashSelectedArr(this.state.inventoryArray[changeEvent.target.value]);
    this.props.saveSwatchData(configuredArr);
    //console.log(this.state.inventoryArray[changeEvent.target.value]);
    console.log(configuredArr);
  }

  renderSwatches() {
    return this.state.inventoryArray.map((data, i) => {
      return (
        <Col xs key={i}>
          <FormGroup check>
            <Label check>
              <Input
                className="swatch"
                type="radio"
                name={"product-number-" + i}
                value={i}
                checked={this.state.selectedOption === "product-number-" + i}
                onChange={this.onChange}
              />
            </Label>
          </FormGroup>
        </Col>
      );
    });
  }

  render() {
    return (
      <Row>
        {this.renderSwatches()}
      </Row>
    );
  }
}

const mapStateToProps = state => {
  return { info: state.info };
}

export default connect(mapStateToProps, actions)(Swatches);
