import React, { Component } from 'react';
import { CardImg, CardImgOverlay, CardTitle,CardBody,CardText } from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
              dishselected:null    
                  
        }
        
    }
    onDishSelect(dish){
        this.setState({dishselected:dish})
    }
    renderDish(dish){
        if (dish!=null){
            return(
                <card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </card>

            );

        }
        else{
            return(
                <div></div>
            );
        }
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                  <card onClick={
                      ()=>this.onDishSelect(dish)
                      }>
                      <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                      <CardImgOverlay>
                          <CardTitle>{dish.name}</CardTitle>
                      </CardImgOverlay>
                  </card>
                
              </div>
            );
        });

        return (
          <div className="container">
            <div className="row">
              {menu}
            </div>
            <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.state.dishselected)}
                  </div>
                </div>
                </div>
        );
    }
}

export default Menu;