import React from 'react';
import {Card, CardImg, CardTitle,CardBody,CardText, ListGroup, ListGroupItem } from 'reactstrap';



    

 
  function  RenderComments({comments}){
      if (comments !=null){
        return(
     comments.map(
            (com)=>{

                return (
                <ul key={com.id} className="list-unstyled">

            <li >{com.comment}</li>
            <li >
                <span>--</span>
                <span>{com.author}</span>
                <span>,</span>
                <span>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(com.date)))}</span>

            </li>
                </ul>
                );

            }

             )
        );
        
        }
        else {
            return(<div></div>)
        }
       
    }

 function RenderDish({dish}){

    return(
        <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
        </CardBody>
    </Card>


    );

  }

  const DishDetail= (props)=>{
    if (props.dish!=null){
          return(
    

                                <div className="container">
            
                                <div className="row">

                             <div className="col-12 col-md-5 m-1">

                              <RenderDish dish={props.dish}></RenderDish>
        
                             </div> 
                             <div className="col-12 col-md-5 m-1">
                                 <h4>Comments</h4>
                              
                             <RenderComments comments={props.dish.comments}></RenderComments>

                             
                            
                             </div>


                            </div>

                             </div>




        )

          }
else {return(
    <div></div>
)}
  }










export default DishDetail;