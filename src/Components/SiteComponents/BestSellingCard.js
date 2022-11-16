import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Button, Card, CardBody, CardImg, CardText } from 'reactstrap';
import '../../Style/BestSellingCard.css'

function BestSellingCard(props) {
  
  const navigate = useNavigate()

  return (
    <Card style={{width: '15rem'}} className='p-0  col-lg-3 col-md-4 col-sm-6 col-6 '>
    <CardImg alt="photo" src={props.product.photo} />
        <CardBody className='text-muted best-body'>
            <CardText tag="h6" className='mb-2 tx-best' >{props.product.type}</CardText>
            <CardText tag="h6" className='tx-best'>{`${(props.product.price).toFixed(2)}$`}</CardText>

            <div className='d-flex justify-content-between best'>
            {/* <Button color="dark" size='sm'  outline   className='bt-details1' onClick={()=>navigate('/ProductDetails',{state : {shopProduct :props.product }})} >Details</Button> */}
            <Link to={`/productdetails/${props.product.id}`}>
                  <Button color="dark" size='sm'  outline   className='bt-details1' >Details</Button>
            </Link>

            <Button color="dark" outline  size="sm" className='bt-details1 bt-details2'  onClick={()=>navigate('/Shop')}  >Shop Now</Button>
            </div>

        </CardBody>
    </Card>
  )
}


export default BestSellingCard;
