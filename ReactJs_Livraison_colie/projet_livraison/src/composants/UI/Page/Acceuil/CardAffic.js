import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import img03 from "../../../../assets/img/03.png";

export default function CardAffic() {
  return (
    <>
      <Container>
        <Row>
          <Col className="col-8">
            <h2>NOUS SOMMES</h2>
            <p>
              {" "}
              cette qpplication est fait et realiser dans le but de rendre
              facile les service que les gens en besoin dans leur vie quotidient{" "}
            </p>
          </Col>
          <Col>
            <Image style={{ width: "100%", height: "60%" }} src={img03} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
