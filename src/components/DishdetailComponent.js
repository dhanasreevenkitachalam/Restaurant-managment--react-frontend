import React from 'react';
import {Card, CardImg, CardTitle,CardBody,CardText, ListGroup, ListGroupItem } from 'reactstrap';



    

 
  function  RenderComments({comments}){
      if (comments !=null){
        return(
     comments.map(
            (com)=>{

                return (
                <ListGroup key={com.id}>

            <ListGroupItem className="border-0">{com.comment}</ListGroupItem>
            <ListGroupItem  className="border-0">
                <span>--</span>
                <span>{com.author}</span>
                <span>,</span>
                <span>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(com.date)))}</span>

            </ListGroupItem>
                </ListGroup>
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
    function  dishrender(){ 
          return(

           
            
                                <div className="row">

                             <div className="col-12 col-md-5 m-1">

                              <RenderDish dish={props.dish}></RenderDish>
        
                             </div> 
                             <div className="col-12 col-md-5 m-1">
                                 <h4>Comments</h4>
                              
                             <RenderComments comments={props.dish.comments}></RenderComments>

                             
                            
                             </div>


                    

                             </div>




        );

     }
 
     return(
 <div className="container">
    
         {dishrender()}

 </div>

     );

  }










export default DishDetail;