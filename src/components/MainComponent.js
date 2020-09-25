import React, { Component } from 'react';
import{Navbar, NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';
import DishDetail from './DishdetailComponent';

class Main extends Component {
  constructor(props){
    super(props);
    this.state={
     dishes:DISHES,
     dishselectedid:null
    }
  }
  onDishSelect(dishid){
    this.setState({dishselectedid:dishid})
}
viewDishDetail(){
    if (this.state.dishselectedid!=null){
 return(
    
    <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.dishselectedid)[0]} />
 );
    }

    else{
        return (<div></div>)
    }
}
  render() {
    return (
      <div >
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} onClick={(dishid)=>{this.onDishSelect(dishid)}}/>
        <div>{this.viewDishDetail()}</div>
      </div>
    );
  }
}

export default Main;
