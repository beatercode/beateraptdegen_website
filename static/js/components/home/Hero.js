import "./Hero.css";
import { Container, Row, Col } from "react-bootstrap";
import Heroanim from "./Heroanim";
import "../themedbutton.css";

function Hero() {
  return (
    <div className="Hero">
      <Container>
        <Row>
          <Col
            xs="1"
            sm="1"
            md="1"
            lg="1"
            xl="1"
            xxl="1"
            className="justify-content-start"
          ></Col>
          <Col xs="10" sm="10" md="10" lg="10" xl="10" xxl="10">
            <Heroanim />
          </Col>
        </Row>
        <Row className="intro">
          <Col xs="1" sm="1" md="1" lg="1" xl="1" xxl="1"></Col>
          <Col xs="11" sm="11" md="11" lg="5" xl="5" xxl="5">
            {/* <Button className="themedbutton">WATCH TRAILER</Button> */}
          </Col>
          <Col xs="11" sm="11" md="11" lg="5" xl="5" xxl="5">
            <h3 className="onih3">
              <span>⛩️</span> A virtual park
            </h3>
            <h4 className="onih4">
              Inspired by Japanese folklore, the Oni-nous collection will
              introduce 6667 onis and their virtual world.
            </h4>
          </Col>
          <Col xs="12" sm="12" md="12" lg="1" xl="1" xxl="1"></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
