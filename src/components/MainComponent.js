import React, { Component } from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import {DISHES} from '../shared/dishes';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import { Switch, Route, Redirect } from 'react-router-dom';

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


  render() {

    const HomePage=()=>{
     return (

      
      <Home/>
   
     )
     
    }

    return (
      <div >
        <Header/>
        <Switch>
        <Route path="/home" component={HomePage}></Route>
        <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}/>}/>
        <Redirect to="/home" />
        </Switch>
        <Footer></Footer>
      </div>
    );
  }
}

export default Main;
