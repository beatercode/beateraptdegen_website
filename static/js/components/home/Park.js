import { Container, Row, Col } from "react-bootstrap";

import Levels from "../../svg/levels.svg";

import "./Park.css";

function Park() {
  return (
    <Container className="Park">
      <Row className="thepark-block">
        <div className="wrapper">
          <div className="marquee">
            <h2>
              Experience loneliness together. Introducing the Oni-nous park. Get
              your oni today.&nbsp;
            </h2>
            <h2>
              Experience loneliness together. Introducing the Oni-nous park. Get
              your oni today.&nbsp;
            </h2>
          </div>
        </div>
        <Col xs="12" sm="12" md="12" lg="6" xl="6" xxl="6" className="thepark">
          <img src={Levels} className="levelimage" alt="Oni Release" />
        </Col>
        <Col xs="12" sm="12" md="12" lg="6" xl="6" xxl="6" className="parktext">
          <div>
            <p>
              The Oni-nous park is a digital experience where the Oni holders
              can experience a digitally fabricated world through their onis
              eyes. Depending on the kind of oni they will be living in
              different areas of the Park and will be able to experience a
              strange loneliness together. Every oni will have a hose/place to
              stay in this experience that we will be dropping later this year.
              Come and experience loneliness together.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Park;
