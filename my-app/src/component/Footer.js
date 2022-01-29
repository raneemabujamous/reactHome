import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

export class footer extends Component {
  render() {
    return (
      <div className="footer">
        <div>
          <p>Follow us </p>
          <div>
            <BsFacebook />
            <AiFillTwitterCircle />
            <AiFillInstagram />
            <AiFillYoutube />
          </div>
          <Button variant="info"> Download our App</Button>{" "}
        </div>
        <div>
          <p>GrabOne</p>
          <p>Contact Us</p>
          <p>About Us</p>
          <p>Terms & Returns</p>
        </div>
        <div>
          <p> My Account</p>
          <p>My Cart</p>
          <p>My Coupons</p>
          <p>FAQ</p>
        </div>
        <div>
          <p> Merchants</p>
          <p>Run a Deal</p>
          <p>Merchant Centre</p>
        </div>
        <div>
          <p> Newsletter Signup</p>
          <p>
            Sign up for our daily emails and we'll send you all the best deals,
            tailored for you
          </p>
          <input
            placeholder="          Enter email address
"
          />
          <Button variant="info"> Subscribe</Button>{" "}
        </div>
      </div>
    );
  }
}

export default footer;
