import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { productsArray } from '../ProductStore'

function Store() {
  return (
    <div>
        <h1>Welcome to the store</h1>
        <Row xs={1} md={3} className="g-4">
            {productsArray.map()}
            <Col align="center">
                <h1>Product</h1>
            </Col>
            
            
        </Row>
    </div>
  )
}

export default Store