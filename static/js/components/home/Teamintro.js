import { Container, Row, Col } from "react-bootstrap";

import "./Team.css";

function Team() {
  return (
    <Container className="Team">
      <Row>
        <Col>
          <div className="wrapper">
            <div className="marquee">
              <h1 className="onih0">
                Welcome to the&nbsp;<span className="onih0 italic">sixth</span>
                &nbsp;stage.&nbsp;
              </h1>
              <h1 className="onih0">
                Welcome to the&nbsp;<span className="onih0 italic">sixth</span>
                &nbsp;stage.&nbsp;
              </h1>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Team;
