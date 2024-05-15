import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardImg, CardText, CardTitle} from 'react-bootstrap';
import Rating from './Rating'

const Product = ({product}) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <CardImg src={product.image} variant="top"></CardImg>
      </Link>
      <Card.Body>
      <Link to={`/product/${product._id}`}>
        <CardTitle as="div" className='product-title'>
          <strong>{product.name}</strong>
        </CardTitle>
      </Link>
      <CardText as='div'>
        <Rating value={product.rating} text={`${product.numReviews} reviews`}></Rating>
      </CardText>
      <CardText as='h3'>${product.price}</CardText>
      </Card.Body>
    </Card>
  )
}

export default Product
