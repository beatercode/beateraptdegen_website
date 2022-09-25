import { Container, Row, Col } from "react-bootstrap";

import "./Oniintro.css";

function Oniintro() {
  return (
    <Container className="Oniintro">
      <Row>
        <Col>
          <div className="wrapper">
            <div className="marquee">
              <h1 className="onih0">
                Experience loneliness&nbsp;
                <span className="onih0 italic">together.&nbsp;</span>
              </h1>
              <h1 className="onih0">
                Experience loneliness&nbsp;
                <span className="onih0 italic">together.&nbsp;</span>
              </h1>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col
          xs="1"
          sm="1"
          md="1"
          lg="2"
          xl="2"
          xxl="2"
          className="justify-content-start"
        ></Col>
        <Col xs="12" sm="12" md="12" lg="8" xl="8" xxl="8">
          <h3 className="onih3">
            We are building on the concept of being alone together. The oni
            holders will be able to experience this eerie feeling in a virtual
            space built in Unreal Engine 5.
          </h3>
          <h1 className="onih1">
            Each oni will play a different role in our world.
          </h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Oniintro;
