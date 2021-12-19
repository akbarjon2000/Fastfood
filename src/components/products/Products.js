import React, { Component } from "react";
import Navbar from "./ProductsNavbar/Navbar"
import FastFood from "./fastFood";
import { Base } from "./styled";
export default class Products extends Component {
  render() {
    return (
      <Base>
        <Navbar />
        <FastFood className="menu" />
      </Base>
    )
  }
}


