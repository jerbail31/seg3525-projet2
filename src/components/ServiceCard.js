import React from 'react';
import { Button, Card } from 'react-bootstrap';

const CustomButton = ({ id, title, onClick, includes, price }) => {
  var includeObject = [];
  if (includes[0] === true) {
    includeObject.push('Grass');
  }
  if (includes[1] === true) {
    includeObject.push('Trimming');
  }
  if (includes[2] === true) {
    includeObject.push('Leaf removal');
  }
  if (includes[3] === true) {
    includeObject.push('Aeration');
  }


  price = 'Price: ' + price;
  return (
    <div id={id} className="serviceCard-main">
      <Card className='serviceCard-card'>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <div className='serviceCard-includes'>
            <Card.Subtitle>Service includes:</Card.Subtitle>
            <ul>
              {includeObject.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <Card.Subtitle className='serviceCard-price'>{price} </Card.Subtitle>
          <Button variant='success' className='serviceCard-button' onClick={onClick}> Book </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CustomButton;