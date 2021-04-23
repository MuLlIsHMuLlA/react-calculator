import React from 'react'
import Button from './components/Button';
import Col from './components/Col';
import Container from './components/Container';
import Displayscreen from './components/Displayscreen'
import Row from './components/Row';

function App() {
  return (
    <Container>

      <Displayscreen />
      
      <Row>
        <Col size={3}>
          <Button style={Styles.grayButton} block >
            AC
          </Button>
        </Col>
        <Col size={3}>
          <Button style={Styles.grayButton} block >
            +/-
          </Button>
        </Col>
        <Col size={3}>
          <Button style={Styles.grayButton} block >
            %
          </Button>
        </Col>
        <Col size={3}>
          <Button style={Styles.goldButton} block >
            /
          </Button>
        </Col>
      </Row>
      <Row>
        <Col size={3}>
          <Button style={Styles.grayButton} block >
            7
          </Button>
        </Col>
        <Col size={3}>
          <Button style={Styles.grayButton} block >
            8
          </Button>
        </Col>
        <Col size={3}>
          <Button style={Styles.grayButton} block >
            9
          </Button>
        </Col>
        <Col size={3}>
          <Button style={Styles.goldButton} block >
            X
          </Button>
        </Col>
      </Row>
      <Row>
        <Col size={3}>
          <Button style={Styles.grayButton} block >
            4
          </Button>
        </Col>
        <Col size={3}>
          <Button style={Styles.grayButton} block >
            5
          </Button>
        </Col>
        <Col size={3}>
          <Button style={Styles.grayButton} block >
            6
          </Button>
        </Col>
        <Col size={3}>
          <Button style={Styles.goldButton} block >
            -
          </Button>
        </Col>
      </Row>
      <Row>
        <Col size={3}>
          <Button style={Styles.grayButton} block >
            1
          </Button>
        </Col>
        <Col size={3}>
          <Button style={Styles.grayButton} block >
            2
          </Button>
        </Col>
        <Col size={3}>
          <Button style={Styles.grayButton} block >
            3
          </Button>
        </Col>
        <Col size={3}>
          <Button style={Styles.goldButton} block >
            +
          </Button>
        </Col>
      </Row>
      <Row>
        <Col size={6}>
          <Button style={Styles.grayButton} block >
            0
          </Button>
        </Col>

        <Col size={3}>
          <Button style={Styles.grayButton} block >
            .
          </Button>
        </Col>
        <Col size={3}>
          <Button style={Styles.goldButton} block >
            =
          </Button>
        </Col>
      </Row>

    </Container>

  );
}

const Styles = {
  goldButton: { backgroundColor: "gold", color: "white", borderRadius: "0", borderColor: "black" },
  grayButton: { backgroundColor: "gray", color: "black", borderRadius: "0", borderColor: "black"}
}

export default App;
