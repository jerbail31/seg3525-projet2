import { Container, Row, Col, Form } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import ServiceCard from './ServiceCard.js';
import { useNavigate } from 'react-router-dom';


function Services() {

  //Occurence rbl
  const [selectedOccurence, setselectedOccurence] = useState('');

  const handleRadioChange = (event) => {
    setselectedOccurence(event.target.value);
    //filterCards();
  };

  //ckb
  const [isCheckedGrass, setIsCheckedGrass] = useState(false);
  const [isCheckedTrim, setisCheckedTrim] = useState(false);
  const [IsCheckedAeration, setIsCheckedAeration] = useState(false);
  const [IsCheckedLeaf, setIsCheckedLeaf] = useState(false);

  const handleCheckboxChangeGrass = () => {
    setIsCheckedGrass(!isCheckedGrass);
    //filterCards();
  };

  const handleCheckboxChangeTrim = () => {
    setisCheckedTrim(!isCheckedTrim);
    //filterCards();
  };

  const handleCheckboxChangeAeration = () => {
    setIsCheckedAeration(!IsCheckedAeration);
    //filterCards();
  };
  const handleCheckboxChangeLeaf = () => {
    setIsCheckedLeaf(!IsCheckedLeaf);
    //filterCards();
  };

  const navigate = useNavigate();
  const book = () => {
    navigate('/seg3525-projet2/Booking');
  };

  // id[0], occurence[1], type[2]{0:grass, 1:trim, 2:aeration, 3:leaf}
  const yearGrass = ["cardYearGrass", "seasonal", [true, false, false, false]];
  const yearTrim = ["cardYearTrim", "seasonal", [true, true, false, false]];
  const yearFull = ["cardYearFull", "seasonal", [true, true, true, true]];

  const serviceList = [yearGrass, yearTrim, yearFull];
  useEffect(() => {
    debugger;
    filterCards();
  });

  const filterCards = () => {
    for (var i = 0; i < serviceList.length; i++) {
      if (noFilters()) {
        document.getElementById(serviceList[i][0]).style.display = 'block';
      }
      else if (filterService(serviceList[i])) { 
        document.getElementById(serviceList[i][0]).style.display = 'block';
      }
      else{
        document.getElementById(serviceList[i][0]).style.display = 'none';
      }
    }
  };
  const noFilters = () => {
    return (!(isCheckedGrass || isCheckedTrim || IsCheckedAeration || IsCheckedLeaf || !(selectedOccurence === '')));
  }
  const filterService = (service) => {
    if (!(selectedOccurence === '' || selectedOccurence === service[1])){
      return false;
    }
    else if(isCheckedGrass || isCheckedTrim || IsCheckedAeration || IsCheckedLeaf){
      if(isCheckedGrass){
        if(service[2][0] === false){
          return false
        }
      }
      if(isCheckedTrim){
        if(service[2][1] === false){
          return false
        }
      }
      if(IsCheckedAeration){
        if(service[2][2] === false){
          return false
        }
      }
      if(IsCheckedLeaf){
        if(service[2][3] === false){
          return false
        }
      }
    }
    return true;
  }

  return (
    <div className="services">
      <Container>
        <Row>
          <Col md={3}>
            <div className='services-filter'>

              <Form>
                <h4>Filters</h4>
                <h5>Occurence</h5>
                <Form.Check
                  type="radio"
                  id="radioseasonal"
                  label="Seasonal"
                  value="seasonal"
                  checked={selectedOccurence === 'seasonal'}
                  onChange={handleRadioChange}
                />

                <Form.Check
                  type="radio"
                  id="radioSingle"
                  label="Single"
                  value="single"
                  checked={selectedOccurence === 'single'}
                  onChange={handleRadioChange}
                />

                <Form.Check
                  type="radio"
                  id="radioAddon"
                  label="Add-ons"
                  value="addon"
                  checked={selectedOccurence === 'addon'}
                  onChange={handleRadioChange}
                />
                <h5>Service Type</h5>
                <Form.Check
                  type="checkbox"
                  id="checkboxGrass"
                  label="Grass"
                  checked={isCheckedGrass}
                  onChange={handleCheckboxChangeGrass}
                />

                <Form.Check
                  type="checkbox"
                  id="checkboxTrim"
                  label="Trimming"
                  checked={isCheckedTrim}
                  onChange={handleCheckboxChangeTrim}
                />

                <Form.Check
                  type="checkbox"
                  id="checkboxAeration"
                  label="Aeration"
                  checked={IsCheckedAeration}
                  onChange={handleCheckboxChangeAeration}
                />
                <Form.Check
                  type="checkbox"
                  id="checkboxLeaf"
                  label="Leaf Removal"
                  checked={IsCheckedLeaf}
                  onChange={handleCheckboxChangeLeaf}
                />
                <p>
                  Prices vary according to yard size. An estimate will be determined during the booking phase.
                </p>
              </Form>
            </div>
          </Col>
          <Col md={9}>
            <Container id='cardContainer' className='services-cardContainer'>

              <ServiceCard id="cardYearGrass" title='Basic Seasonal Package' onClick={book} price='50$' includes='nothing'></ServiceCard>
              <ServiceCard id="cardYearTrim" title='Advanced Seasonal Package' onClick={book} price='50$' includes='nothing'></ServiceCard>
              <ServiceCard id="cardYearFull" title='Super Seasonal Package' onClick={book} price='50$' includes='nothing'></ServiceCard>


            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Services;