import { Container, Row, Col } from "react-bootstrap";
import Onipartsvideo from "../../videos/oniparts.webm";
import "./Oniparts.css";

function Oniparts() {
  return (
    <div className="oniparts">
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
            className="onipartsvideo"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1723"
              height="1180"
              viewBox="0 0 1723 1180"
              className="onipartsborder"
            >
              <g
                fill="none"
                stroke="var(--themecolour)"
                strokeWidth="3"
                data-name="Group 310"
                transform="translate(1.5 1.37)"
              >
                <path
                  d="M0 0H1451.462V904.19H0z"
                  data-name="Rectangle 157"
                  transform="translate(134.269 136.535)"
                ></path>
                <path
                  d="M0 0H1495.652V949.135H0z"
                  data-name="Rectangle 159"
                  transform="translate(112.174 114.063)"
                ></path>
                <path
                  d="M0 0H1539.842V994.08H0z"
                  data-name="Rectangle 161"
                  transform="translate(90.079 91.59)"
                ></path>
                <path
                  d="M0 0H1584V1039H0z"
                  data-name="Rectangle 163"
                  transform="translate(68 69.13)"
                ></path>
                <path
                  d="M0 0H1628.221V1083.97H0z"
                  data-name="Rectangle 165"
                  transform="translate(45.889 46.646)"
                ></path>
                <path
                  d="M0 0H1672.411V1128.915H0z"
                  data-name="Rectangle 167"
                  transform="translate(23.794 24.172)"
                ></path>
                <path
                  d="M0 0H1720V1177H0z"
                  data-name="Rectangle 172"
                  transform="translate(0 .13)"
                ></path>
              </g>
            </svg>
            <video
              src={Onipartsvideo}
              autoPlay={true}
              muted={true}
              loop={true}
            ></video>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Oniparts;
