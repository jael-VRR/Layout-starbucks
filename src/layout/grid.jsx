import { Container, Row, Col, Nav, Figure } from "react-bootstrap";
import React, { useState } from "react";
import starbucks from "../image/starbucks.png";
import img1 from "../image/img1.png";
import thumb1 from "../image/thumb1.png";
import thumb2 from "../image/thumb2.png";
import thumb3 from "../image/thumb3.png";
import facebook from "../image/facebook (1).png";
import twitter from "../image/twitter.png";
import instagram from "../image/instagram.png";
import "../App.css";

const grid = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [figure, setFigure] = useState("../image/img1");

  const handleClick = (e) => {
    setFigure("../image/thumb2");
    console.log("hola");
  };
  return (
    
    <div>
      <Container>
        <div className="circle"></div>
        <Row>
          <Col>
            <Figure>
              <Figure.Image src={starbucks} />
            </Figure>
          </Col>
          <Col>
            <Nav>
              <Nav.Link className="item-nav" href="#deets">
                Home
              </Nav.Link>
              <Nav.Link className="item-nav" href="#deets">
                Menu
              </Nav.Link>
              <Nav.Link className="item-nav" href="#deets">
                What's New
              </Nav.Link>
              <Nav.Link className="item-nav" href="#deets">
                Contact
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>
              It's not just Coffee
              <br />
              It's <span>Starbucks</span>
            </h2>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <a className="link" href="#">
              Learn More
            </a>
          </Col>
          <Col className="wrapper-figure">
            <Figure className="img-product">
              <Figure.Image src={img1} />
            </Figure>
            <ul className="sci">
              <li>
                <a href="">
                  <img src={facebook} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={twitter} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={instagram} alt="" />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <ul className="thumb">
              <li>
                <img src={thumb1} value={figure} alt="" onClick={handleClick} />
              </li>
              <li>
                <img src={thumb2} alt="" />
              </li>
              <li>
                <img src={thumb3} alt="" />
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default grid;
