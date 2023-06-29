import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import ServiceCard from './ServiceCard.js';


function Services() {

  //Occurence rbl
  const [selectedOccurence, setselectedOccurence] = useState('');

  const handleRadioChange = (event) => {
    setselectedOccurence(event.target.value);
  };

  //ckb
  const [isCheckedGrass, setIsCheckedGrass] = useState(false);
  const [isCheckedTrim, setisCheckedTrim] = useState(false);
  const [IsCheckedAeration, setIsCheckedAeration] = useState(false);
  const [IsCheckedLeaf, setIsCheckedLeaf] = useState(false);

  const handleCheckboxChangeGrass = () => {
    setIsCheckedGrass(!isCheckedGrass);
  };

  const handleCheckboxChangeTrim = () => {
    setisCheckedTrim(!isCheckedTrim);
  };

  const handleCheckboxChangeAeration = () => {
    setIsCheckedAeration(!IsCheckedAeration);
  };
  const handleCheckboxChangeLeaf = () => {
    setIsCheckedLeaf(!IsCheckedLeaf);
  };

  // id[0], occurence[1], type[2]{0:grass, 1:trim, 2:aeration, 3:leaf}
  const yearGrass = ["cardYearGrass", "seasonal", [true, false, false, false]];
  const yearTrim = ["cardYearTrim", "seasonal", [true, true, false, false]];
  const yearFull = ["cardYearFull", "seasonal", [true, true, true, true]];
  const oneGrass = ["cardOneGrass", "oneTime", [true, false, false, false]]

  const serviceList = [yearGrass, yearTrim, yearFull, oneGrass];
  useEffect(() => {
    filterCards();
  });

  const clearFilterClick = () => {
    showAll();
    clearFilter();
  }

  const clearFilter = () => {
    setselectedOccurence('');
    setIsCheckedGrass(false);
    setisCheckedTrim(false);
    setIsCheckedLeaf(false);
    setIsCheckedAeration(false);
  };

  const filterCards = () => {
    for (var i = 0; i < serviceList.length; i++) {
      if (noFilters()) {
        document.getElementById(serviceList[i][0]).style.display = 'block';
      }
      else if (filterService(serviceList[i])) {
        document.getElementById(serviceList[i][0]).style.display = 'block';
      }
      else {
        document.getElementById(serviceList[i][0]).style.display = 'none';
      }
    }
  };
  const noFilters = () => {
    return (!(isCheckedGrass || isCheckedTrim || IsCheckedAeration || IsCheckedLeaf || !(selectedOccurence === '')));
  }
  const filterService = (service) => {
    if (!(selectedOccurence === '' || selectedOccurence === service[1])) {
      return false;
    }
    else if (isCheckedGrass || isCheckedTrim || IsCheckedAeration || IsCheckedLeaf) {
      if (isCheckedGrass) {
        if (service[2][0] === false) {
          return false;
        }
      }
      if (isCheckedTrim) {
        if (service[2][1] === false) {
          return false;
        }
      }
      if (IsCheckedAeration) {
        if (service[2][2] === false) {
          return false;
        }
      }
      if (IsCheckedLeaf) {
        if (service[2][3] === false) {
          return false;
        }
      }
    }
    return true;
  }

  const compareClick = () => {
    var noneSelected = true;
    for (var i = 0; i < serviceList.length; i++) {
      var parent = document.getElementById(serviceList[i][0]);
      var card = parent.firstChild;
      if (card.style.borderColor === 'rgb(59, 180, 75)') {
        parent.style.display = 'block';
        noneSelected = false;
      }
      else {
        parent.style.display = 'none';
      }
    }
    if (noneSelected) {
      showAll();
      document.getElementById('msgComapre').style.display = 'block';
    }
    else {
      document.getElementById('msgComapre').style.display = 'none';
    }
    clearFilter();
  }

  const showAll = () => {
    for (var i = 0; i < serviceList.length; i++) {
      var parent = document.getElementById(serviceList[i][0]);
      parent.style.display = 'block';
    }
  }

  return (
    <div className="services">
      <Container>
        <Row>
          <Col md={3}>
            <Card className='services-filter'>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className='services-filterTitle'>
                      <Card.Title>Filters</Card.Title>
                    </Col>
                    <Col  className='services-clearFilters'>
                      <Button variant='secondary' onClick={clearFilterClick}>Clear Filters</Button>
                    </Col>
                  </Row>
                  <div className='services-filterGroup'>
                    <Card.Subtitle>Occurence</Card.Subtitle>
                    <div className='services-filterItems'>
                      <Form.Check
                        type="radio"
                        id="radioSeasonal"
                        label="Seasonal"
                        value="seasonal"
                        checked={selectedOccurence === 'seasonal'}
                        onChange={handleRadioChange}
                      />

                      <Form.Check
                        type="radio"
                        id="radioOneTime"
                        label="One-Time"
                        value="oneTime"
                        checked={selectedOccurence === 'oneTime'}
                        onChange={handleRadioChange}
                      />
                    </div>
                  </div>
                  <div className='services-filterGroup'>
                    <Card.Subtitle>Service Type</Card.Subtitle>
                    <div className='services-filterItems'>
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
                    </div>
                  </div>

                  <Card.Text className='services-filterText'>
                    *Prices vary according to yard size. An estimate will be determined during the booking phase.
                  </Card.Text>
                </Form>
              </Card.Body>
            </Card>
            <Button variant='success' onClick={compareClick} style={{ width: '100%' }}>Compare selected services</Button>
            <label id='msgComapre' className='services-msgCompare'>Click on service cards to select services</label>
          </Col>
          <Col md={9}>
            <Container id='cardContainer' className='services-cardContainer'>

              <ServiceCard id="cardYearGrass" title='Basic Seasonal Package' price='400$' includes={yearGrass[2]}></ServiceCard>
              <ServiceCard id="cardYearTrim" title='Advanced Seasonal Package' price='50$' includes={yearTrim[2]}></ServiceCard>
              <ServiceCard id="cardYearFull" title='Super Seasonal Package' price='50$' includes={yearFull[2]}></ServiceCard>
              <ServiceCard id="cardOneGrass" title='Basic One-Time Service' price='50$' includes={oneGrass[2]}></ServiceCard>


            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Services;