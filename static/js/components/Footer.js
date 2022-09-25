import { Container, Row, Col } from "react-bootstrap";

import "./Footer.css";

function Footer() {
  return (
    <Container className="Footer">
      <Row className="contact">
        <Col className="social">
          <h1 className="onih1 italic">STAY UPDATED</h1>
          <div className="divider"></div>
          <a href="https://twitter.com/OninousProject">
            <h1 className="onih1">FOLLOW US ON TWITTER</h1>
          </a>
          <br />
          <a href="mailto:hello@oninous.com">
            <h3 className="onih3">OR SEND US AN EMAIL</h3>
          </a>
        </Col>
      </Row>
      <Row className="copyright">
        <Col>
          <p>COPYRIGHT 2022 the sixth stage \ Version 2.3.4</p>
          <div className="awesome">
            <p>Stay Awesome </p>
            <div className="footertoggle">
              <span className="one">👹</span>
              <span className="two">🖤</span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
