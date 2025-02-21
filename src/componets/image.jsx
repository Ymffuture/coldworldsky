import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function ShapeExample() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image width="100%" src="../img/unisa.jpg" rounded />
        </Col>
        <Col xs={4} md={2}>
          <Image width="100%"  src="../img/uj-1.jpg" roundedCircle />
        </Col>
   
      </Row>
      
    </Container>
  );
}

export default ShapeExample;