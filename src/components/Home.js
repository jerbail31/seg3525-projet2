import { Container, Row, Col } from 'react-bootstrap';
import cart from "./cart.png";

function Home() {
  return (
    <div className="home">
      <Container className="home-description">
        <Row>
          <Col md={6}>
            {/* Image */}
            <img src={cart} alt="cart" />
          </Col>
          <Col md={6}>
            {/* Content */}
            <div>Content on the right side</div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="home-side home-thirdbox">
            <div>
              Services
            </div>
          </Col>
          <Col className="home-middle home-thirdbox">
            <div>Section 2</div>
          </Col>
          <Col className="home-side home-thirdbox">
            <div>Section 3</div>
          </Col>
        </Row>
      </Container>
      <Container className="home-account">
        <Row>
          <Col md={6}>
            <div>
              Already a customer?
            </div>
          </Col>
          <Col md={6}>
            <div>
              <button>View my account</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;