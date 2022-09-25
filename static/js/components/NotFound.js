import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import "../components/NotFound.css";

function NotFound() {
  return (
    <Container className="error">
      <Row>
        <Col>
          <h1 className="onih1 italic">
            Wait how did you get here? Please return.
          </h1>
          <Link className="button" to="/">
            okay, sorry
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default NotFound;
