import React from "react";
import {Button,TextField, Typography} from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";
// import {inject
import {inject,observer} from 'mobx-react';
// import Parser from 'react';
class Quantity extends React.Component {
  // let  {price}=this.props
  state = { counter: 0 };
 
  handleIncrement = () => {
    this.setState(state => ({ counter: state.counter + 1 }));
  };

  handleDecrement = () => {
    this.setState(state => ({ counter: state.counter - 1 }));
  };

  Value = () =>{
    this.props.handleChange('1000')
  }
  render() {
    
    let  {startingStore:{cart}}=this.props;
    const displayCounter = this.state.counter > -1;
    console.log(this.state.counter.toString(),"quantity")
    let {price,handleChange}=this.props;
    // let totalPrice ={price}
    // let total = totalPrice * this.state.counter
    let total = this.props.price * this.state.counter
    cart.setProperty("product_TotalAmount",total)
    return (
      <div>
    <Typography variant='p'><span>Total : </span>&#8369; {total}.00</Typography>
      <ButtonGroup size="small" aria-label="small outlined button group">
         <Button onClick={this.handleIncrement}>+</Button>
        {displayCounter && <TextField  value={this.state.counter.toString()} onChange={
           cart.setProperty("product_Quantity",this.state.counter.toString())
           
        }/>}
                 {displayCounter && <Button onClick={this.handleDecrement}>-</Button>}
      </ButtonGroup>
      </div>
    );
    
  }
}

export default inject("startingStore")(observer(Quantity));