import { Container, Row, Col } from "react-bootstrap";

import NFTCal from "../../svg/nftcalendar.svg";

import "./Featured.css";

function Featured() {
  return (
    <Container className="featured">
      <Row>
        <Col>
          <p>Featured on</p>
          <a href="https://nftcalendar.io/event/oni-nous-phase1-minting/">
            <img src={NFTCal} className="nftcalendar" alt="NFT Calendar logo" />
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Featured;
