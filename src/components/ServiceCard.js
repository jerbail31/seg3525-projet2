import React from 'react';
import { Button } from 'react-bootstrap';

const CustomButton = ({ id, title, onClick, includes, price }) => {

  price = 'Price :' + price;
  return (
    <div id={id} className="services-card">
      <h4>{ title }</h4>
      <h5>Service includes</h5>
      <div>
        { includes }
      </div>
      <h5>{ price } </h5>
      <Button onClick={ onClick }> Book </Button>
    </div>
  );
};

export default CustomButton;