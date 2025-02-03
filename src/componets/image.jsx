import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function ShapeExample() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image width="100%" src="../img/about-bg.jpg" rounded />
        </Col>
        <Col xs={6} md={8}>
          <Image width="100%"  src="../img/about-03.jpg" roundedCircle />
        </Col>
        <Col xs={6} md={4}>
          <Image width="100%"  src="../img/intro.jpg" thumbnail />
        </Col>
      </Row>
    </Container>
  );
}

export default ShapeExample;