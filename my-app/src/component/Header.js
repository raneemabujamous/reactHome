import React, { Component } from "react";
import { GoLocation } from "react-icons/go";
import { GiSelfLove } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdPersonOutline } from "react-icons/md";
import { GiLoveLetter } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import style from "../css/Header.css";
export class header extends Component {
  render() {
    return (
      <>
        <div className="containerHeader">
          <div className="row1">
            <p
              style={{
                fontWeight: "bold",
                color: "white",
                fontSize: "1.875rem",
                fontFamily: "MuseoSans,sans-serif",
              }}
            >
              {" "}
              GrabOne{" "}
            </p>

            <div className="row1right">
              <span>
                Auckand <MdPersonOutline />
              </span>
              <GiLoveLetter />
              <GiSelfLove />
              <AiOutlineShoppingCart />
              <GoLocation />
            </div>
          </div>
          <div className="row2">
            <div>
              <span> Browse Categories </span>
              <span> What's new </span>
              <span> Trending </span>
              <span> For you </span>
            </div>
            <div>
              <input placeholder="Search GrabOnes" />
            </div>
          </div>
          <img
            src="https://mediacdn.grabone.co.nz/asset/245jDlRR8j"
            class="desktopheaderimage"
            alt="Auckland Anniversary"
          ></img>
        </div>
      </>
    );
  }
}
export default header;
