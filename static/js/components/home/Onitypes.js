import { Container, Row, Col } from "react-bootstrap";
import "./Onitypes.css";

function Onitypes() {
  return (
    <div className="onitypes">
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
          <Col
            xs="12"
            sm="12"
            md="12"
            lg="10"
            xl="10"
            xxl="10"
            className="onitypesholder"
          >
            <ul>
              <li>
                <h2 className="onih2">Soulstealer</h2>
                <span></span>
                <h2 className="onih2">Silenced</h2>
              </li>
              <li>
                <h2 className="onih2">Warlord</h2>
                <span></span>
                <h2 className="onih2">Shadow</h2>
              </li>
              <li>
                <h2 className="onih2">Almighty</h2>
                <span></span>
                <h2 className="onih2">Assassin</h2>
              </li>
            </ul>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1720"
              height="894.047"
              viewBox="0 0 1720 894.047"
              className="onitypesbg"
            >
              <g data-name="Group 294">
                <path
                  d="M0 0v894.047h243.141l325.486-325.42V325.486L243.141 0z"
                  data-name="Path 199"
                ></path>
                <path
                  d="M383.608 0v894.047L709.1 568.627V325.486z"
                  data-name="Path 200"
                  transform="translate(322.396)"
                ></path>
                <path
                  d="M649.169 0v894.047L890.5 568.627V325.486z"
                  data-name="Path 201"
                  transform="translate(545.582)"
                ></path>
                <path
                  d="M869 0v894.047l120.661-325.42V325.486z"
                  data-name="Path 202"
                  transform="translate(730.337)"
                ></path>
              </g>
            </svg>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Onitypes;
