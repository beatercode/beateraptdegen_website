import { Container, Row, Col } from "react-bootstrap";

import "./Team.css";

function Team() {
  return (
    <Container>
      <Row className="teammembers">
        <Col
          xs="12"
          sm="12"
          md="12"
          lg="5"
          xl="5"
          xxl="5"
          className="teammember firstmember"
        >
          <p className="teamintro">made by</p>
          <h2 className="onih2">Zsolt</h2>
          <h5 className="onih5">
            chief executive officer
            <br></br>
            head of oni research department
          </h5>
          <p>
            Our Chief Executive Officer, Zsolt comes from a design and marketing
            background helping different brands for more than 10 years. As the
            Head of the Oni Research Department he's working closely with his
            team to deliver the highest quality of robotics available.
          </p>
          <a className="link" href="https://instagram.com/mr_barghest">
            Instagram
          </a>
        </Col>
        <Col xs="12" sm="12" md="12" lg="1" xl="1" xxl="1"></Col>
        <Col
          xs="12"
          sm="12"
          md="12"
          lg="5"
          xl="5"
          xxl="5"
          className="teammember"
        >
          <p className="teamintro">with the help of</p>
          <h2 className="onih2">Devon</h2>
          <h5 className="onih5">
            chief operating officer
            <br></br>
            head of oni resources
          </h5>
          <p>
            Our Chief Operating Officer, Devon is equipped with great human
            skills, such as communication and problem solving. As a head of Oni
            Resources he's handling all the upcoming disputes in our company as
            well as some of the oni behaviour issues.
          </p>
          <a className="link" href="https://www.instagram.com/sqvires/">
            Instagram
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Team;
