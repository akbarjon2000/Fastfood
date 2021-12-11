import React, { Component } from "react";
import Navbar from "../navbar/Navbar"
import FastFood from "./fastFood";
import "./main.css"
export default class Products extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <FastFood className="menu" />
        <div className="addd">Add More</div>
      </div>
    )
  }
}


