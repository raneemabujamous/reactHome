import React, { Component } from "react";
import { Button } from "react-bootstrap";

export class Box extends Component {
  render() {
    return (
      <div className="box">
        <div>
          <p style={{ color: "cornflowerblue", fontSize: "30px" }}>
            Get the best deals delivered direct to your inbox each day
          </p>
        </div>
        <div>
          <input
            style={{ width: "400px", height: "38px" }}
            placeholder="Enter email adress"
          />
          <Button variant="primary">Subscribe</Button>
        </div>
      </div>
    );
  }
}

export default Box;
