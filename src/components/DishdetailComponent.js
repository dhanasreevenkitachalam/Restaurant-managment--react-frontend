import React,{Component} from 'react';
import {Card, CardImg, CardTitle,CardBody,CardText, ListGroup, ListGroupItem ,BreadcrumbItem,Breadcrumb} from 'reactstrap';
import {Link} from 'react-router-dom';



import { Button ,Modal,ModalBody,ModalHeader,Label,Row,Col} from 'reactstrap';
import {LocalForm,Control,Errors} from 'react-redux-form';



const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component{

    constructor(props){
        super(props);
        this.state={
         
            isModalOpen:false
        }
  
        this.toggleModal=this.toggleModal.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this)
  
    }

    handleSubmit(values){
        this.toggleModal();
        this.props.addComment(this.props.dishId,values.rating,values.name,values.comment)

    }
  
    toggleModal(){
        this.setState({
            isModalOpen:!this.state.isModalOpen
        })
    }

render(){
    return(
        <React.Fragment>
        <Button outline color="secondary" onClick={this.toggleModal}><span className="fa fa-pencil" ></span><bold> Submit Comment</bold></Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
        <ModalHeader isOpen={this.state.isModalOpen} toggle={this.toggleModal}> Submit Comment</ModalHeader>
        <ModalBody>
        <LocalForm onSubmit={this.handleSubmit}>
        <Row className="form-group">
        <Label htmlFor="rating" sm={12}>Rating</Label>
        <Col sm={12}>
                                    <Control.select model=".rating" name="rating"
                                          className="form-control"  >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                    </Control.select>
                                    
                                </Col>
                             
            </Row>
        <Row className="form-group">
        <Label htmlFor="name" sm={12}>Your Name</Label>  
        <Col sm={12}>
            <Control.text model=".name" id ="name" placeholder="Your Name" className="form-control"
               validators={{
                required, minLength: minLength(3), maxLength: maxLength(15)
            }}></Control.text>
            <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />

        </Col>


        </Row>

        <Row className="form-group">
                <Label htmlFor="comment" sm={12}>Comment</Label>
                     <Col sm={12}>
                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="6" className="form-control"
                         />
                    </Col>
         </Row>

         <Row className="form-group">
            <Col md={12}>
                <Button type="submit" color="primary">
                                      Submit
                 </Button>
             </Col>
         </Row>
        </LocalForm>

            </ModalBody>

            </Modal>
            </React.Fragment>
    )
}
}


 
  function  RenderComments({comments,addComment,dishId}){
 
      if (comments !=null){
     const comment= comments.map(
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
         
        return (
            <div>
                {comment}
                <CommentForm addComment={addComment} dishId={dishId} />
            </div>


        )
     
        }
        else {
            return(<div>
                  <CommentForm addComment={addComment} dishId={dishId} />
            </div>)
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
                                            <Breadcrumb>
                                                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                                                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                                            </Breadcrumb>
                                            <div className="col-12">
                                                <h3>{props.dish.name}</h3>
                                                    <hr />
                                            </div>                
                                        </div>
            
                                <div className="row">
                                    <div className="col-12 col-md-5 m-1">
                                        <RenderDish dish={props.dish}></RenderDish>
                                    </div> 
                                   <div className="col-12 col-md-5 m-1">
                                          <h4>Comments</h4>
                                         <RenderComments comments={props.comments} addComment={props.addComment}   dishId={props.dish.id}>    </RenderComments>
                                         
                                    
                                       
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