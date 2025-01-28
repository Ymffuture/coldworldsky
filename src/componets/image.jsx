import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import React, {useState} from "react";


const ImageDisplay = ({ title, largeImage, smallImage,num,id }) => {

const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };


  return (
    <Container activeIndex={index} onSelect={handleSelect}>
      <Row >
        <Col xs={6} md={4}>
<div className="hover-bg-oo">
          <Image src={largeImage} title={title}  rounded />
      <div className="hover-text-oo">
          
        <h4> {id} - {title}</h4>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.
          
        </p>
              </div>
</div>
        </Col>
      </Row>
    </Container>
  );
}

export  default ImageDisplay;
