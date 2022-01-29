import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";

export class CardTop extends Component {
  render() {
    return (
      <div className="cont">
        <Card style={{ width: "30rem", height: "32rem" }}>
          <Card.Img
            variant="top"
            src="https://main-cdn.grabone.co.nz/goimage/fullsize/770de2df66a116009ec600e0943cd74f2c1f626f.jpg"
          />
          <Card.Body>
            <Card.Title>50-Pack of Disposable Face Masks</Card.Title>
            <Card.Text>
              Grab a 50-pack of disposable face masks for $19 from Off The Back.
            </Card.Text>
            <Button variant="light">3432</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "30rem", height: "32rem" }}>
          <Card.Img
            variant="top"
            src="//main-cdn.grabone.co.nz/goimage/495x343/5c31a23c4bc5d74e34dc5a1e77902596525c23ac.jpg"
          />
          <Card.Body>
            <Card.Title>
              Finger Tip Blood Oxygen Monitor - Option for Two-Pack & Eight-Pack
            </Card.Title>
            <Card.Text>Urban and rural delivery options available.</Card.Text>
            <Button variant="light">45533</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default CardTop;
